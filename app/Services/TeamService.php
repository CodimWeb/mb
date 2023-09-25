<?php

namespace App\Services;

use App\Models\ActualEvent;
use App\Models\ActualTeam;

class TeamService
{
    public function findByName(string $name)
    {
        return ActualTeam::with('team_sport')
            ->where('name', 'LIKE', '%' . $name . '%')
            ->get();
    }

    public static function getLastEventsResults(int $teamId): array
    {
        /** @var ActualEvent $events */
        $events = ActualEvent::where('team_home', '=', $teamId)
            ->orWhere('team_away', '=', $teamId)
            ->where('active', '=', 0)
            ->where('winner', '>', 0)
            ->orderBy('start')
            ->limit(6)
            ->get();

        $results = [];
        foreach ($events as $event) {
            if (($event->team_home == $teamId && $event->winner == 1) || ($event->team_away == $teamId && $event->winner == 2)) {
                $results[] = 'W';
            } elseif (($event->team_home == $teamId && $event->winner == 2) || ($event->team_away == $teamId && $event->winner == 1)) {
                $results[] = 'L';
            } elseif ($event->winner == 3) {
                $results[] = 'D';
            }
        }

        return $results;
    }
}
