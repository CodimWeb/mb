<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\ActualAdminProp;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\Builder;

class EventService
{
    public function getActiveEventsByDate(
        $fromDateTime,
        $isActive = 1,
        $isLive = 0,
        $hasWinner = 0,
        $sportId = 0,
        $tournamentCategory = '',
        $tournamentName = '',
        $teamCountry = '',
        $teamName = ''
    ): Collection {
        $query = DB::table('actual_events AS ae')
            ->select([
                'asp.id AS asp_id',
                'asp.name AS asp_name',
                'asp.slug AS asp_slug',
                'asp.icon AS asp_icon',

                'at.id AS at_id',
                'at.category AS at_category',
                'at.name AS at_name',
                'at.slug AS at_slug',
                'at.sport AS at_sport',

                'ae.id AS ae_id',
                'ae.tournament AS ae_tournament',
                'ae.score_home AS ae_score_home',
                'ae.score_away AS ae_score_away',
                'ae.winner AS winner',
                'ae.is_live AS ae_is_live',
                'ae.start AS ae_start',
                'ae.start_stamp AS ae_start_stamp',

                'ao.id AS ao_id',
                'ao.event AS ao_event',
                'ao.market_name AS ao_market_name',
                'ao.choice_home AS ao_choice_home',
                'ao.choice_away AS ao_choice_away',
                'ao.choice_draw AS ao_choice_draw',
                'ao.winner AS ao_has_winner',
                'ao.live AS ao_live',

                'team_home.id AS team_home_id',
                'team_home.name AS team_home_name',
                'team_home.slug AS team_home_slug',
                'team_home.logo AS team_home_logo',
                'team_home.country AS team_home_country',

                'team_away.id AS team_away_id',
                'team_away.name AS team_away_name',
                'team_away.slug AS team_away_slug',
                'team_away.logo AS team_away_logo',
                'team_away.country AS team_away_country',
            ])
            ->join('actual_tournaments AS at', 'ae.tournament', '=', 'at.id')
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->leftJoin('actual_odds AS ao', 'ae.id', '=', 'ao.event')
            ->join('actual_teams AS team_home', 'ae.team_home', '=', 'team_home.id')
            ->join('actual_teams AS team_away', 'ae.team_away', '=', 'team_away.id');

        $query->where('ae.start_stamp', '>=', $fromDateTime)
            ->where('ae.start_stamp', '<=', Carbon::parse($fromDateTime)->endOfDay()->subHours(3)->timestamp)
            ->where('ae.winner', ($hasWinner == 0) ? '=' : '>', 0)
            ->where('ae.is_live', '=', $isLive)
            ->where('ae.active', '=', $isActive)
            ->where('at.active', '=', 1);

        $excludedSportIds = ActualAdminProp::where('key', ActualAdminProp::HIDDEN_SPORTS_KEY)->first()?->value;
        $excludedSportIds = array_map('trim', explode(',', $excludedSportIds));
        if (!empty($excludedSportIds)) {
            $query->whereNotIn('asp.id', $excludedSportIds);
        }

        if (!empty($sportId)) {
            $query->where('asp.id', '=', $sportId);
        }

        if (!empty($tournamentCategory)) {
            $query->where('at.category', 'LIKE', '%' . $tournamentCategory . '%');
        }

        if (!empty($tournamentName)) {
            $query->where('at.name', 'LIKE', '%' . $tournamentName . '%');
        }

        if (!empty($teamCountry)) {
            $query->where(function (Builder $q) use ($teamCountry) {
                $q->where('team_home.country', 'LIKE', '%' . $teamCountry . '%')
                    ->orWhere('team_away.country', 'LIKE', '%' . $teamCountry . '%');
            });
        }

        if (!empty($teamName)) {
            $query->where(function (Builder $q) use ($teamName) {
                $q->where('team_home.name', 'LIKE', '%' . $teamName . '%')
                    ->orWhere('team_away.name', 'LIKE', '%' . $teamName . '%');
            });
        }

        return $query->get();
    }

    public function getActiveEventsBySearch(
        $fromDateTime,
        $isActive = 1,
        $hasWinner = 0,
        $searchData = ''
    ): Collection {
        $query = DB::table('actual_events AS ae')
            ->select([
                'asp.id AS asp_id',
                'asp.name AS asp_name',
                'asp.slug AS asp_slug',
                'asp.icon AS asp_icon',

                'at.id AS at_id',
                'at.category AS at_category',
                'at.name AS at_name',
                'at.slug AS at_slug',
                'at.sport AS at_sport',

                'ae.id AS ae_id',
                'ae.tournament AS ae_tournament',
                'ae.score_home AS ae_score_home',
                'ae.score_away AS ae_score_away',
                'ae.winner AS winner',
                'ae.is_live AS ae_is_live',
                'ae.start AS ae_start',
                'ae.start_stamp AS ae_start_stamp',

                'ao.id AS ao_id',
                'ao.event AS ao_event',
                'ao.market_name AS ao_market_name',
                'ao.choice_home AS ao_choice_home',
                'ao.choice_away AS ao_choice_away',
                'ao.choice_draw AS ao_choice_draw',
                'ao.winner AS ao_has_winner',
                'ao.live AS ao_live',

                'team_home.id AS team_home_id',
                'team_home.name AS team_home_name',
                'team_home.slug AS team_home_slug',
                'team_home.logo AS team_home_logo',
                'team_home.country AS team_home_country',

                'team_away.id AS team_away_id',
                'team_away.name AS team_away_name',
                'team_away.slug AS team_away_slug',
                'team_away.logo AS team_away_logo',
                'team_away.country AS team_away_country',
            ])
            ->join('actual_tournaments AS at', 'ae.tournament', '=', 'at.id')
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->leftJoin('actual_odds AS ao', 'ae.id', '=', 'ao.event')
            ->join('actual_teams AS team_home', 'ae.team_home', '=', 'team_home.id')
            ->join('actual_teams AS team_away', 'ae.team_away', '=', 'team_away.id');

        if (!empty($searchData) && $searchData['type'] == 'player') {
            $query->leftJoin('actual_players AS player_home', 'team_home.id', '=', 'player_home.team_id')
                ->leftJoin('actual_players AS player_away', 'team_away.id', '=', 'player_away.team_id');
        }

        $excludedSportIds = ActualAdminProp::where('key', ActualAdminProp::HIDDEN_SPORTS_KEY)->first()?->value;
        $excludedSportIds = array_map('trim', explode(',', $excludedSportIds));
        if (!empty($excludedSportIds)) {
            $query->whereNotIn('asp.id', $excludedSportIds);
        }

        $query->where('ae.active', '=', $isActive);

        $query->where('ae.winner', ($hasWinner == 0) ? '=' : '>', 0)
            ->where('ae.start_stamp', '>=', $fromDateTime)
            ->where('ae.start_stamp', '<=', Carbon::parse($fromDateTime)->addDays(7)->endOfDay()->timestamp)
            ->where('at.active', '=', 1);

        if (!empty($searchData)) {
            $query->where(function (Builder $q) use ($searchData) {
                if ($searchData['type'] == 'tournament') {
                    $q->where('ae.tournament', '=', $searchData['id']);
                }

                if ($searchData['type'] == 'team') {
                    $q->where('team_home.name', '=', $searchData['name'])
                        ->orWhere('team_away.name', '=', $searchData['name']);
                }

                if ($searchData['type'] == 'player') {
                    $q->where('player_home.name', '=', $searchData['name'])
                        ->orWhere('player_away.name', '=', $searchData['name']);
                }

                if ($searchData['type'] == 'country') {
                    $q->where('at.category', '=', $searchData['name'])
                        ->where('asp.name', '=', $searchData['sport']);
                }
            });
        }

        return $query->get();
    }

    public function getFavoriteEvents(int $userId): Collection
    {
        return DB::table('actual_favourites AS af')
            ->select([
                'ae.id AS ae_id',
                'ae.tournament AS ae_tournament',
                'ae.score_home AS ae_score_home',
                'ae.score_away AS ae_score_away',
                'ae.is_live AS ae_is_live',
                'ae.winner AS winner',
                'ae.start AS ae_start',
                'ae.start_stamp AS ae_start_stamp',

                'at.id AS at_id',
                'at.category AS at_category',
                'at.name AS at_name',
                'at.slug AS at_slug',
                'at.sport AS at_sport',

                'asp.id AS asp_id',
                'asp.name AS asp_name',
                'asp.slug AS asp_slug',
                'asp.icon AS asp_icon',

                'team_home.id AS team_home_id',
                'team_home.name AS team_home_name',
                'team_home.slug AS team_home_slug',
                'team_home.logo AS team_home_logo',
                'team_home.country AS team_home_country',

                'team_away.id AS team_away_id',
                'team_away.name AS team_away_name',
                'team_away.slug AS team_away_slug',
                'team_away.logo AS team_away_logo',
                'team_away.country AS team_away_country',
            ])
            ->join('actual_events as ae', 'af.event', '=', 'ae.id')
            ->join('actual_tournaments as at', 'ae.tournament', '=', 'at.id')
            ->join('actual_sports as asp', 'at.sport', '=', 'asp.id')
            ->join('actual_teams AS team_home', 'ae.team_home', '=', 'team_home.id')
            ->join('actual_teams AS team_away', 'ae.team_away', '=', 'team_away.id')
            ->where('user', $userId)
            ->orderBy('asp.id')
            ->get();
    }

    public function formatEvents($activeEventsByDateData): array
    {
        $result = [];
        foreach ($activeEventsByDateData as $data) {
            if (!isset($result[$data->asp_id])) {
                $result[$data->asp_id] = new \stdClass();
                $result[$data->asp_id]->sport = new \stdClass();
                $result[$data->asp_id]->tournaments = [];
            }

            $result[$data->asp_id]->sport->id = $data->asp_id;
            $result[$data->asp_id]->sport->name = $data->asp_name;
            $result[$data->asp_id]->sport->slug = $data->asp_slug;
            $result[$data->asp_id]->sport->icon = $data->asp_icon;

            if (!isset($result[$data->at_sport])) {
                $result[$data->asp_id] = new \stdClass();
                $result[$data->asp_id]->sport = new \stdClass();
                $result[$data->at_sport]->tournaments = [];
            }

            if (!isset($result[$data->at_sport]->tournaments[$data->at_id])) {
                $result[$data->at_sport]->tournaments[$data->at_id] = new \stdClass();
                $result[$data->at_sport]->tournaments[$data->at_id]->events = [];
            }

            $result[$data->at_sport]->tournaments[$data->at_id]->id = $data->at_id;
            $result[$data->at_sport]->tournaments[$data->at_id]->category = $data->at_category;
            $result[$data->at_sport]->tournaments[$data->at_id]->name = $data->at_name;
            $result[$data->at_sport]->tournaments[$data->at_id]->slug = $data->at_slug;

            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id] = new \stdClass();
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->id = $data->ae_id;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->tournament = $data->ae_tournament;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->score_home = $data->ae_score_home;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->score_away = $data->ae_score_away;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->is_live = $data->ae_is_live;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->winner = $data->winner;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->start = $data->ae_start;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->start_stamp = $data->ae_start_stamp;

            if (!isset($result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_home[$data->team_home_id])) {
                $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_home[$data->team_home_id] = new \stdClass();
            }

            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_home[$data->team_home_id]->id = $data->team_home_id;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_home[$data->team_home_id]->name = $data->team_home_name;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_home[$data->team_home_id]->slug = $data->team_home_slug;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_home[$data->team_home_id]->logo = $data->team_home_logo;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_home[$data->team_home_id]->country = $data->team_home_country;

            if (!isset($result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_away[$data->team_away_id])) {
                $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_away[$data->team_away_id] = new \stdClass();
            }

            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_away[$data->team_away_id]->id = $data->team_away_id;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_away[$data->team_away_id]->name = $data->team_away_name;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_away[$data->team_away_id]->slug = $data->team_away_slug;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_away[$data->team_away_id]->logo = $data->team_away_logo;
            $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->team_away[$data->team_away_id]->country = $data->team_away_country;

            if (!empty($data->ao_id) && !isset($result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ao_event]->odds[$data->ao_id])) {
                if ($result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ae_id]->is_live && !$data->ao_live) {
                    continue;
                }

                $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ao_event]->odds[$data->ao_id] = new \stdClass();

                $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ao_event]->odds[$data->ao_id]->id = $data->ao_id;
                $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ao_event]->odds[$data->ao_id]->event = $data->ao_event;
                $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ao_event]->odds[$data->ao_id]->market_name = $data->ao_market_name;
                $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ao_event]->odds[$data->ao_id]->choice_home = $data->ao_choice_home;
                $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ao_event]->odds[$data->ao_id]->choice_away = $data->ao_choice_away;
                $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ao_event]->odds[$data->ao_id]->choice_draw = $data->ao_choice_draw;
                $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ao_event]->odds[$data->ao_id]->has_winner = $data->ao_has_winner;
                $result[$data->at_sport]->tournaments[$data->ae_tournament]->events[$data->ao_event]->odds[$data->ao_id]->live = $data->ao_live;
            }
        }

        $result = array_values($result);
        foreach ($result as $data) {
            foreach ($data->tournaments as $tournament) {
                foreach ($tournament->events as $event) {
                    $event->team_home = ($event->team_home) ? (object) array_values($event->team_home)[0] : [];
                    $event->team_away = ($event->team_away) ? (object) array_values($event->team_away)[0] : [];
                    if (!empty($event->odds)) {
                        $event->odds = array_values($event->odds);
                    }
                }
            }
        }

        foreach ($result as $data) {
            foreach ($data->tournaments as $tournament) {
                $tournament->events = array_values($tournament->events);
            }
        }

        foreach ($result as $data) {
            $data->tournaments = array_values($data->tournaments);
        }

        return $result;
    }
}
