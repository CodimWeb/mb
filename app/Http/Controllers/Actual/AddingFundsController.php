<?php

namespace App\Http\Controllers\Actual;

use Illuminate\Http\Request;
use App\Models\ActualPayment;
use App\Models\ActualCurrency;
use Illuminate\Http\JsonResponse;
use App\Services\BlockchainService;
use App\Http\Controllers\Controller;
use Brick\Math\Exception\MathException;
use GuzzleHttp\Exception\GuzzleException;
use App\Models\ActualTransactionsHistory;

class AddingFundsController extends Controller
{
    public function coins_list(Request $request): JsonResponse
    {
        return response()->json(ActualCurrency::whereActive(1)->get());
    }

    public function coin_price(Request $request, $code): JsonResponse
    {
        return response()->json(ActualCurrency::whereCode($code)->first());
    }

    /**
     * @throws MathException
     * @throws GuzzleException
     */
    public function newTransaction(Request $request, BlockchainService $blockchainService): JsonResponse
    {
        $request->validate([
          "summ" => "required|numeric|min:1",
        ]);

        if (!$blockchainService->deposit($request->user(), $request->summ)) {
            return response()->json([
                "success" => false,
                "message" => "Operation has been canceled"
            ], 500);
        }

        $user_transaction = new ActualTransactionsHistory([
          "user" => $request->user()?->id,
          "type" => 0,
          "currency_from" => 0,
          "currency_to" => 0,
          "sum_from" => $request->user()?->balance->real_balance,
          "sum_to" => $request->user()?->balance->real_balance + $request->summ,
          "rate" => 1,
          "status" => 1
        ]);

        $user_transaction->save();

        /*** Создаем платеж ***/
        $user_payment = new ActualPayment([
          "transaction" => $user_transaction->id,
          "status" => true
        ]);

        $user_payment->save();

        return response()->json([
          "success" => true,
          "message" => "In case of a successful transaction"
        ]);
    }
}
