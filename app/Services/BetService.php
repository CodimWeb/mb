<?php

namespace App\Services;

use App\Models\ActualBet;
use App\Models\ActualOdds;
use App\Models\ActualEvent;
use Illuminate\Support\Facades\Log;

class BetService
{
    public function calculateBets(): void
    {
        $bets = ActualBet::where('calculated', false)->get();
        foreach ($bets as $single_bet) {
            Log::info('START calc bet id = ' . $single_bet->id);

            $odd = ActualOdds::with('events')->find($single_bet->odd_id);
            $bet = ActualBet::find($single_bet->id);
            $bet_win = false;

            if (in_array($odd->events->status, ActualEvent::$canceledStatuses)) {
                $bet->win = -1;
                $bet->calculated = true;
                $bet->save();

                continue;
            }

            if ($odd->events->winner || $odd->events->status == ActualEvent::FINISHED_STATUS) {
                if (($odd->events->winner == 1 || $odd->events->score_home > $odd->events->score_away) && $single_bet->choice == 1) {
                    $bet_win = true;
                }

                if (($odd->events->winner == 2 || $odd->events->score_home < $odd->events->score_away) && $single_bet->choice === 2) {
                    $bet_win = true;
                }

                if (($odd->events->winner == 3 || $odd->events->score_home == $odd->events->score_away) && $single_bet->choice === 3) {
                    $bet_win = true;
                }

                $bet->win = $bet_win;
                $bet->calculated = true;
                $bet->save();
            }

            Log::info('STOP calc bet id = ' . $single_bet->id);
        }
    }
}
