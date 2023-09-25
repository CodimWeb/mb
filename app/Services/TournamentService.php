<?php

namespace App\Services;

use App\Models\ActualTournaments;

class TournamentService
{
    public function get_tournaments($sport_id = null, $limit = false)
    {
        if ($sport_id === null) {
            if ($limit) {
                $tournaments = ActualTournaments::where([
                    ['active', '=', true]
                ])->take($limit)->get();
            } else {
                $tournaments = ActualTournaments::where('active', true)->get();
            }
        } else {
            if ($limit) {
                $tournaments = ActualTournaments::where([
                    ["active", "=", true],
                    ["sport", "=", $sport_id]
                ])->take($limit)->get();
            } else {
                $tournaments = ActualTournaments::where([
                    "active" => true,
                    "sport" => $sport_id
                ])->get();
            }
        }

        return $tournaments;
    }

    public function findByName(string $name)
    {
        return ActualTournaments::with(['tournament_sport', 'tournament_events'])
            ->where(
                [
                    ['name', 'LIKE', '%' . $name . '%'],
                    ['active', '=', 1]
                ]
            )
            ->get();
    }
}
