<?php

namespace App\Console\Commands;

use App\Models\ActualEvent;
use Illuminate\Console\Command;
use App\Models\ActualTournaments;

class SetTournamentStatuses extends Command
{
    protected $signature = 'set:tournament-statuses';

    protected $description = 'Update tournament statuses';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $actual_list = [];
        $not_actual_list = [];

        $tournaments = ActualTournaments::all();
        foreach ($tournaments as $single_tournament) {
            $tournament_events = ActualEvent::where([
                ['tournament', '=', $single_tournament->id],
                ['active', '=', true]
            ])->count();

            if (!$single_tournament->active && $tournament_events) {
                $actual_list[] = $single_tournament->id;
            }

            if ($single_tournament && !$tournament_events) {
                $not_actual_list[] = $single_tournament->id;
            }
        }

        ActualTournaments::where('id', $actual_list)->update(['active' => true]);
        ActualTournaments::where('id', $not_actual_list)->update(['active' => false]);

        return 0;
    }
}
