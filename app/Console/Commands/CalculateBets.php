<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\ActualBet;
use App\Services\BetService;
use App\Models\ActualBalance;
use App\Models\ActualUserLine;
use Illuminate\Console\Command;
use App\Models\ActualUserLineRel;
use App\Services\BlockchainService;
use Illuminate\Support\Facades\Log;
use App\Models\ActualTransactionsHistory;

class CalculateBets extends Command
{
    protected $signature = 'calculate:bets';

    protected $description = 'Calculate bets';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle(BetService $betService, BlockchainService $blockchainService)
    {
        $betService->calculateBets();

        $users_list = User::with('balance')->get();
        foreach ($users_list as $user) {
            $lines_list = ActualUserLine::where('user', $user->id)
                ->where('calculated', false)
                ->get();

            if (!$lines_list) {
                continue;
            }

            foreach ($lines_list as $line) {
                Log::info('START calc line with id = ' . $line->id);

                $line_win = true;
                $line_end = true;
                $line_k = 0;

                $line_rels = ActualUserLineRel::where('line', $line->id)->get();
                if (!count($line_rels)) {
                    continue;
                }

                $bets_arr = [];
                foreach ($line_rels as $rel) {
                    $bets_arr[] = $rel->bet;
                }

                $bets = ActualBet::whereIn('id', $bets_arr)->get();
                if (!$bets) {
                    continue;
                }

                foreach ($bets as $bet_count => $bet) {
                    if (!$bet->calculated) {
                        $line_end = false;
                    }

                    if (!is_null($bet->win) && $bet->win == -1) {
                        $line_end = true;
                        $line_win = false;
                        $line_canceled = true;
                    }

                    if (!is_null($bet->win) && $bet->win == 0) {
                        $line_end = true;
                        $line_win = false;
                    }

                    // Суммируем коэффициенты
                    if ($bet_count == 0) {
                        $line_k = $bet->odd;
                    } else {
                        $line_k = $line_k + $bet->odd;
                    }
                }

                if ($line_end) {
                    // Если линия закончилась, то давайте отметим это
                    $single_line = ActualUserLine::find($line->id);
                    $single_line->calculated = true;
                    $single_line->save();

                    if ($line_win) {
                        $reward = $line->sum * $line_k;
                        $blockchainService->win(
                            $user,
                            $line->sum - $line->used_bonus,
                            $reward - ($line->sum - $line->used_bonus) - $line->used_bonus
                        );

                        ActualTransactionsHistory::create([
                            "user" => $user->id,
                            "type" => 7,
                            "currency_from" => 0,
                            "currency_to" => 0,
                            "sum_from" => $user->balance->real_balance,
                            "sum_to" => $user->balance->real_balance + $reward - $line->used_bonus,
                            "rate" => 1,
                            "status" => 1
                        ]);
                    } else {
                        if (!empty($line_canceled)) {
                            $blockchainService->unfreeze($user, $line->sum);

                            ActualTransactionsHistory::create([
                                "user" => $user->id,
                                "type" => 25,
                                "currency_from" => 0,
                                "currency_to" => 0,
                                "sum_from" => $user->balance->real_balance,
                                "sum_to" => $user->balance->real_balance + $line->sum,
                                "rate" => 1,
                                "status" => 1
                            ]);
                        } else {
                            $blockchainService->loss($user, $single_line->sum - $line->used_bonus);

                            ActualTransactionsHistory::create([
                                "user" => $user->id,
                                "type" => 13,
                                "currency_from" => 0,
                                "currency_to" => 0,
                                "sum_from" => $user->balance->real_balance,
                                "sum_to" => $user->balance->real_balance - $single_line->sum,
                                "rate" => 1,
                                "status" => 1
                            ]);
                        }
                    }
                }

                Log::info('STOP calc line with id = ' . $line->id);
            }
        }

        return 0;
    }
}
