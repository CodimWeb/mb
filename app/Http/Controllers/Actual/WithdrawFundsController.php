<?php

namespace App\Http\Controllers\Actual;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\ActualAdminProp;
use Illuminate\Http\JsonResponse;
use App\Models\ActualWithdrawFunds;
use App\Services\BlockchainService;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redis;
use Brick\Math\Exception\MathException;
use App\Models\ActualTransactionsHistory;
use GuzzleHttp\Exception\GuzzleException;

class WithdrawFundsController extends Controller
{
    public function check(Request $request): bool
    {
        return (bool) empty(Redis::get('lock_withdraw_' . $request->user()->id));
    }

    /**
     * @throws MathException
     * @throws GuzzleException
     */
    public function new(Request $request, BlockchainService $blockchainService): JsonResponse
    {
        $minWithdrawSum = ActualAdminProp::where('key', ActualAdminProp::MIN_WITHDRAW_KEY)->first()?->value ?? 200;
        $maxWithdrawSum = ActualAdminProp::where('key', ActualAdminProp::MAX_WITHDRAW_KEY)->first()?->value ?? 1000;

        $request->validate(
            [
                "summ" => "required|numeric|gte:" . $minWithdrawSum,
            ],
            [
                'summ.required' => 'Minimum withdraw amount is ' . $minWithdrawSum . ' Maran',
                'summ.gte' => 'Minimum withdraw amount is ' . $minWithdrawSum . ' Maran',
            ]
        );

        if (empty(Redis::get('lock_withdraw_' . $request->user()->id))) {
            Redis::setex('lock_withdraw_' . $request->user()->id, 180, 1);
        }

        $user = $request->user();
        $userBalance = $user?->balance;
        $userRealBalanceValue = $userBalance->real_balance;
        if ($userBalance->real_balance < $request->summ) {

            return response()->json([
              "success" => false,
              "message" => "You don’t have enough amount to withdraw"
            ], 500);
        }

        $lastWithdraw = ActualWithdrawFunds::where('user', $user?->id)->where('status', 1)->latest()->first()?->created_at;
        if ($lastWithdraw) {
            $withdrawHourly = ActualAdminProp::where('key', ActualAdminProp::WITHDRAW_HOURLY)->first()?->value;
            $withdrawDaily = ActualAdminProp::where('key', ActualAdminProp::WITHDRAW_DAILY)->first()?->value;
            if ($withdrawHourly || $withdrawDaily) {
                if ($withdrawHourly) {
                    if (Carbon::now()->diffInHours($lastWithdraw) < 1) {

                        return response()->json([
                            "success" => false,
                            "message" => "Please try again later"
                        ], 500);
                    }
                } else {
                    if (Carbon::now()->diffInDays($lastWithdraw) < 1) {

                        return response()->json([
                            "success" => false,
                            "message" => "Please try again later"
                        ], 500);
                    }
                }
            }
        }

        if ($request->summ > $maxWithdrawSum) {
            $blockchainResponse = $blockchainService->freeze($user, $request->summ);
            if (isset($blockchainResponse['result']['status']) && $blockchainResponse['result']['status'] != 'responded') {
                Log::error('WithdrawFundsController freeze error', $blockchainResponse);

                return response()->json([
                    "success" => "false",
                    "message" => "Please try again later"
                ], 500);
            }

            $user_transaction_history = ActualTransactionsHistory::create([
                "user" => $user?->id,
                "type" => 1,
                "currency_from" => 0,
                "currency_to" => 0,
                "sum_from" => $userRealBalanceValue,
                "sum_to" => $userRealBalanceValue - $request->summ,
                "rate" => 1,
                "status" => 0
            ]);

            ActualWithdrawFunds::create([
                "user" => $user?->id,
                "transaction" => $user_transaction_history->id,
                "sum" => $request->summ,
                "wallet" => $user?->wallet,
                "status" => 0
            ]);

            return response()->json([
                "success" => true,
                "message" => "Your withdraw will be revised soon"
            ], 200);
        }

        if (!$blockchainService->canWithdraw($user, $request->summ)) {
            Log::error('WithdrawFundsController canWithdraw error');

            return response()->json([
                "success" => false,
                "message" => "An error has occurred, contact support"
            ], 500);
        }

        if (!$blockchainService->withdraw($user, $request->summ)) {
            Log::error('WithdrawFundsController withdraw error');

            return response()->json([
                "success" => false,
                "message" => "An error has occurred, contact support"
            ], 500);
        }

        $userBalance->real_balance -= $request->summ;
        $userBalance->save();

        /**** Add to transaction histories ****/
        $user_transaction_history = new ActualTransactionsHistory([
          "user" => $user?->id,
          "type" => 1,
          "currency_from" => 0,
          "currency_to" => 0,
          "sum_from" => $userRealBalanceValue,
          "sum_to" => $userBalance->real_balance,
          "rate" => 1,
          "status" => 1
        ]);

        $user_transaction_history->save();

        $user_withdraw = new ActualWithdrawFunds([
          "user" => $user->id,
          "transaction" => $user_transaction_history->id,
          "sum" => $request->summ,
          "wallet" => $user?->wallet,
          "status" => 1
        ]);

        $user_withdraw->save();

        return response()->json([
          "success" => true,
          "message" => "Withdrawal successful, your tokens will be in your wallet soon"
        ]);
    }
}
