<?php

namespace App\Http\Controllers\Actual;

use App\Models\User;
use App\Models\ActualBet;
use App\Models\ActualOdds;
use App\Models\ActualEvent;
use Illuminate\Http\Request;
use App\Models\ActualBalance;
use App\Models\ActualUserLine;
use Illuminate\Support\Carbon;
use App\Models\ActualAdminProp;
use App\Services\RapidapiService;
use App\Models\ActualUserLineRel;
use Illuminate\Http\JsonResponse;
use App\Services\BlockchainService;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redis;

class BetController extends Controller
{
    public function add(Request $request, BlockchainService $blockchainService, RapidapiService $rapidapiService): JsonResponse
    {
        Redis::setex('lock_bet_' . $request->user()->id, 30, 1);

        $request->validate([
            "sum" => "required|numeric|min:1",
            "coupons" => "required",
        ]);

        $lastUserLine = ActualUserLine::without('bets_rel')
            ->where('user', $request->user()->id)
            ->where('calculated', false)
            ->latest()
            ->first();

        if ($lastUserLine) {
            if (Carbon::now()->diffInSeconds($lastUserLine->created_at) < 15) {
                Redis::set('lock_bet_' . $request->user()->id, 0);

                return response()->json([
                    "success" => false,
                    "message" => "Stop DDoS"
                ], 429);
            }
        }

        $minBet = ActualAdminProp::where('key', ActualAdminProp::MIN_BET_KEY)->first()?->value ?? 10;
        if ($request->sum < $minBet) {
            Redis::set('lock_bet_' . $request->user()->id, 0);

            return response()->json([
                "success" => false,
                "message" => "Minimum bid is " . $minBet . " maran"
            ], 500);
        }

        /** @var User $user */
        $user = $request->user();

        #### Проверим баланс пользователя, может ли он ставить такую сумму
        $userBalance = $blockchainService->getActualBalance($user);
        $userTotalBalance = $userBalance->real_balance + $userBalance->bonus;
        if ($userTotalBalance < $request->sum) {
            Redis::set('lock_bet_' . $request->user()->id, 0);

            return response()->json([
                "success" => false,
                "message" => "There are not enough funds on your balance"
            ], 500);
        }

        #### Заморозим баланс
        $wasFreezed = false;
        $wasFreezedAmount = 0;
        if ($userBalance->bonus) {
            if ($request->sum > $userBalance->bonus) {
                $blockchainResponse = $blockchainService->freeze($user, $request->sum - $userBalance->bonus);
                $wasFreezedAmount = $request->sum - $userBalance->bonus;
                $wasFreezed = true;
            }
        } else {
            $blockchainResponse = $blockchainService->freeze($user, $request->sum);
            $wasFreezedAmount = $request->sum;
            $wasFreezed = true;
        }

        if (isset($blockchainResponse['result']['status']) && $blockchainResponse['result']['status'] != 'responded') {
            Log::error('BlockchainService freeze error', $blockchainResponse);

            Redis::set('lock_bet_' . $request->user()->id, 0);

            return response()->json([
                "success" => "false",
                "message" => "Failed to record the bet"
            ], 500);
        }

        $coupons = $request->input('coupons');
        if (!$coupons) {
            Redis::set('lock_bet_' . $request->user()->id, 0);

            return response()->json([
              "success" => "false",
              "message" => "Coupon is not available"
            ], 500);
        }

        $line = new ActualUserLine([
          "user" => $user->id,
          "sum" => $request->sum,
          "used_bonus" => ($userBalance->bonus >= $request->sum) ?
              $request->sum
              : $userBalance->bonus
        ]);

        $line->save();

        $events_old = false;
        $events_count = 0;
        foreach ($coupons as $single_coupon) {
            #### Проверка закончилась ли игра
            $single_event = ActualEvent::find($single_coupon['event']['id']);
            $apiEventStatus = $rapidapiService->checkEventStatus($single_event->os_sports_id);
            if ($single_event->winner > 0 || $single_event->active == 0 || ($apiEventStatus != -1 && !$apiEventStatus)) {
                $events_old = true;
                continue;
            }

            #### Подтягиваем реальные коэффициенты
            $single_odd = 0;
            $bet_odds = ActualOdds::where('event', '=', $single_event->id)
                ->latest()
                ->first();

            if ($single_coupon['choice'] === 1) {
                $single_odd = $bet_odds->choice_home;
            }

            if ($single_coupon['choice'] === 2) {
                $single_odd = $bet_odds->choice_away;
            }

            if ($single_coupon['choice'] === 3) {
                $single_odd = $bet_odds->choice_draw;
            }

            if (!$single_odd) {
                continue;
            }

            #### Создаем ставку
            $bet = new ActualBet([
              "user" => $user->id,
              "event" => $single_coupon['event']['id'],
              "odd_id" => $single_coupon['odd_id'],
              "choice" => $single_coupon['choice'],
              "odd" => $single_odd
            ]);

            $bet->save();

            $actual_user_line_rel = new ActualUserLineRel([
              "user" => $user->id,
              "line" => $line->id,
              "bet" => $bet->id
            ]);

            $actual_user_line_rel->save();
            $events_count++;
        }

        #### Удаляем линию если нет событий (вдруг со всеми играми проблема)
        if (!$events_count || $events_old) {
            $line->delete();

            #### Вернем токены на баланс
            if ($wasFreezed && $wasFreezedAmount) {
                $blockchainResponse = $blockchainService->unfreeze($user, $wasFreezedAmount);
                if (isset($blockchainResponse['result']['status']) && $blockchainResponse['result']['status'] != 'responded') {
                    Log::error('BlockchainService unfreeze error', $blockchainResponse);

                    Redis::set('lock_bet_' . $request->user()->id, 0);

                    return response()->json([
                        "success" => "false",
                        "message" => "Failed to cancel the bet"
                    ], 500);
                }
            }

            Redis::set('lock_bet_' . $request->user()->id, 0);

            return response()->json([
              "success" => false,
              "message" => "Event is not available for betting"
            ], 500);
        }

        $userBalance = $blockchainService->getActualBalance($user);
        ActualBalance::where('user', $user->id)
            ->update(
                [
                    'real_balance' => $userBalance->real_balance + $userBalance->bonus - $request->sum,
                    'bonus' => ($userBalance->bonus >= $request->sum) ?
                        ($userBalance->bonus - $request->sum)
                        : 0
                ]
            );

        $lines = ActualUserLine::where('user', $user->id)
            ->where('calculated', false)
            ->get();

        Redis::set('lock_bet_' . $request->user()->id, 0);

        return response()->json($lines);
    }

    public function list(Request $request): JsonResponse
    {
        $lines = ActualUserLine::where('user', $request->user()->id)
            ->where('calculated', false)
            ->get();


        return response()->json($lines);
    }
}
