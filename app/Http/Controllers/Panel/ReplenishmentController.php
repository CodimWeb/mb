<?php

namespace App\Http\Controllers\Panel;

use Illuminate\Http\Request;
use App\Models\ActualBalance;
use App\Models\ActualPayment;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Models\ActualTransactionsHistory;

class ReplenishmentController extends Controller
{
    private function showAllTransactions()
    {
        $payments = ActualPayment::all();

        foreach ($payments as $single_payment) {
            $single_payment->transaction = ActualTransactionsHistory::find($single_payment->transaction);
        }

        return $payments;
    }

    public function list(Request $request): JsonResponse
    {
        return response()->json($this->showAllTransactions(), 200);
    }

    public function accept(Request $request, $id): JsonResponse
    {
        /* Подтверждаем транзакцию */
        $payment = ActualPayment::find($id);

        if ($payment->success) {
            return response()->json($this->showAllTransactions(), 200);
        }

        $payment->status = true;
        $payment->save();

        /* История */
        $tx_history = ActualTransactionsHistory::find($payment->transaction);
        $tx_history->status = 1;
        $tx_history->save();

        /* Пополняем баланс */
        $userBalance = ActualBalance::where('user', $tx_history->user)->first();
        $userBalance->real_balance += $tx_history->sum_to;
        $userBalance->save();

        return response()->json($this->showAllTransactions(), 200);
    }
}
