<?php

namespace App\Http\Controllers\Actual;

use Illuminate\Http\Request;
use App\Models\ActualBalance;
use App\Models\ActualPromoCodes;
use App\Http\Controllers\Controller;
use App\Models\ActualPromoCodesHistory;
use App\Models\ActualTransactionsHistory;

class PromoCodesController extends Controller
{
    public function submit(Request $request)
    {
        $request->validate([
          "code" => "required"
        ]);

        $code = ActualPromoCodes::where([
          "active" => true,
          "code" => $request->code
        ])->first();

        if (!$code) {
            return response()->json([
              "success" => false,
              "message" => "Promo code can't be found"
            ], 500);
        }

        $code_history = ActualPromoCodesHistory::where([
          "user" => $request->user()->id,
          "code" => $code->id
        ])->first();
        if ($code_history) {
            return response()->json([
              "success" => false,
              "message" => "Promo code was already used"
            ], 500);
        }

        #### Записываем применение промо кода в историю
        $code_history = new ActualPromoCodesHistory([
          "user" => $request->user()->id,
          "code" => $code->id
        ]);
        $code_history->save();

        #### Начисляем баланс
        $user_balance = ActualBalance::where('user', $request->user()->id)->first();
        $user_balance->update(['bonus' => $user_balance->bonus + $code->sum]);

        #### Записываем новую транзакцию
        $user_transaction = new ActualTransactionsHistory([
          "user" => $request->user()->id,
          "type" => 20,
          "currency_from" => 0,
          "currency_to" => 0,
          "sum_from" => $request->user()?->balance->real_balance,
          "sum_to" => $request->user()?->balance->real_balance + $code->sum,
          "rate" => 1,
          "status" => 1
        ]);
        $user_transaction->save();

        return response()->json([
          "success" => true,
          "message" => "Promo code was submitted"
        ], 200);
    }

    public function status(Request $request, $code)
    {
        $user_code = ActualPromoCodesHistory::where('user', $request->user()->id)->first();

        return response()->json(["user_code" => $user_code], 200);
    }
}
