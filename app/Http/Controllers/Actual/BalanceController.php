<?php

namespace App\Http\Controllers\Actual;

use Exception;
use App\Models\ActualSwap;
use Illuminate\Http\Request;
use App\Models\ActualCurrency;
use Bschmitt\Amqp\Facades\Amqp;
use Illuminate\Http\JsonResponse;
use App\Services\BlockchainService;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Models\ActualTransactionsHistory;
use GuzzleHttp\Exception\GuzzleException;

class BalanceController extends Controller
{
    /**
     * @throws GuzzleException
     */
    public function get(Request $request, BlockchainService $blockchainService): JsonResponse
    {
        return response()->json($blockchainService->getActualBalance($request->user()));
    }

    public function getSystemWallets(BlockchainService $blockchainService): array
    {
        return array_merge(
            $blockchainService->getChainId(),
            $blockchainService->getTargetAddress(),
            $blockchainService->getStorageAddress(),
            $blockchainService->getTokensContractAddresses(),
        );
    }

    public function sendSwapDepositRequest(Request $request): JsonResponse
    {
        $request->validate([
            'txHash' => 'required|string',
            'wallet' => 'required|string',
            'amount' => 'required|string',
            'token' => 'required|string',
        ]);

        try {
            Amqp::publish(
                'routing-key',
                json_encode(
                    array_merge(
                        $request->all(),
                        ['courses' => ActualCurrency::all()]
                    )
                ),
                [
                    'queue' => 'maranbet-swap'
                ]
            );

            $user = $request->user();
            $currentBalance = $user?->balance->real_balance;
            $maranTokenCurrency = ActualCurrency::whereCode(ActualCurrency::MAIN_TOKEN_CODE)->first();
            $tokenCurrency = ActualCurrency::whereCode($request->input('token'))->first();
            if ($maranTokenCurrency && $tokenCurrency && $maranTokenCurrency->price) {
                $newBalance = ($currentBalance ?? 0) + ($request->input('amount') * $tokenCurrency->price) / $maranTokenCurrency->price;
                ActualTransactionsHistory::create([
                    "user" => $user?->id,
                    "type" => 0,
                    "currency_from" => 0,
                    "currency_to" => 0,
                    "sum_from" => $currentBalance ?? 0,
                    "sum_to" => $newBalance,
                    "rate" => 1,
                    "status" => 1
                ]);
            }

            ActualSwap::create([
                "user_id" => $user?->id,
                "txid" => $request->input('txHash'),
                "amount" => $request->input('amount'),
                "amount_maran" => ($request->input('amount') * $tokenCurrency->price) / $maranTokenCurrency->price,
                "code" => $request->input('token'),
                "courses" => json_encode(ActualCurrency::all()),
            ]);

            return response()->json([
                "success" => true,
                "message" => "In case of a successful transaction"
            ]);
        } catch (Exception $e) {
            Log::error($e->getMessage());

            return response()->json([
                "success" => false,
                "message" => "An error has occurred, contact support"
            ], 500);
        }
    }

    public function sendDepositRequest(Request $request): JsonResponse
    {
        $request->validate([
            'txHash' => 'required|string',
            'wallet' => 'required|string',
            'amount' => 'required|string',
        ]);

        try {
            Amqp::publish(
                'routing-key',
                json_encode($request->all()),
                [
                    'queue' => 'maranbet'
                ]
            );

            $user = $request->user();
            $currentBalance = $user?->balance->real_balance;
            $newBalance = ($currentBalance ?? 0) + $request->input('amount');
            ActualTransactionsHistory::create([
                "user" => $user?->id,
                "type" => 0,
                "currency_from" => 0,
                "currency_to" => 0,
                "sum_from" => $currentBalance ?? 0,
                "sum_to" => $newBalance,
                "rate" => 1,
                "status" => 1
            ]);

            return response()->json([
                "success" => true,
                "message" => "In case of a successful transaction"
            ]);
        } catch (Exception $e) {
            Log::error($e->getMessage());

            return response()->json([
                "success" => false,
                "message" => "An error has occurred, contact support"
            ], 500);
        }
    }
}
