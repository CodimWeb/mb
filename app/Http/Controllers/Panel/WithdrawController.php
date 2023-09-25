<?php

namespace App\Http\Controllers\Panel;

use App\Models\User;
use Brick\Math\Exception\MathException;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\ActualWithdrawFunds;
use App\Services\BlockchainService;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Models\ActualTransactionsHistory;

class WithdrawController extends Controller
{
    private function showAll()
    {
        return ActualWithdrawFunds::latest()->get();
    }

    public function list(Request $request): JsonResponse
    {
        return response()->json($this->showAll());
    }

    /**
     * @throws MathException
     * @throws GuzzleException
     */
    public function submit(Request $request, $id, BlockchainService $blockchainService): JsonResponse
    {
        $withdraw = ActualWithdrawFunds::find($id);
        if ($withdraw->status == 1 || $withdraw->status == 2) {
            return response()->json($this->showAll());
        }

        $user = User::find($withdraw->user);
        $blockchainResponse = $blockchainService->unfreeze($user, (int) $withdraw->sum);
        if (isset($blockchainResponse['result']['status'])) {
            if ($blockchainResponse['result']['status'] != 'responded') {
                Log::error('WithdrawController unfreeze error', $blockchainResponse);

                return response()->json([
                    "success" => "false",
                    "message" => "Can not unfreeze"
                ], 500);
            }

            do {
                $userBalance = $blockchainService->getActualBalance($user);
            } while ($userBalance->real_balance < $withdraw->sum);

            if (!$blockchainService->canWithdraw($user, (int) $withdraw->sum)) {
                Log::error('WithdrawController canWithdraw error');

                return response()->json([
                    "success" => false,
                    "message" => "An error has occurred during canWithdraw"
                ], 500);
            }

            if (!$blockchainService->withdraw($user, (int) $withdraw->sum)) {
                Log::error('WithdrawController withdraw error');

                return response()->json([
                    "success" => false,
                    "message" => "An error has occurred during withdraw"
                ], 500);
            }

            $withdraw->status = 2;
            $withdraw->save();

            // Add to history
            $transaction = ActualTransactionsHistory::find($withdraw->transaction);
            $transaction->status = 1;
            $transaction->save();
        }

        return response()->json($this->showAll());
    }
}
