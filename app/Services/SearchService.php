<?php

namespace App\Services;

use Illuminate\Database\Query\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class SearchService
{
    public function getDefaultResult_Old(): JsonResponse
    {
        $fromDateTime = Carbon::today()->startOfDay()->subHours(3)->timestamp;
        $query = DB::table('actual_tournaments AS at')
            ->select([
                'at.id AS id',
                'at.name AS name',
                'at.category AS country',
                'at.sport AS sport_name',

                'asp.icon AS sport_icon',
                'asp.name AS sport_name',
                'asp.slug AS sport_slug',

            ])
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->join('actual_events AS ae', 'at.id', '=', 'ae.tournament')
            ->where('ae.start_stamp', '>=', $fromDateTime)
            ->where('ae.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDays(7)->endOfDay()->subHours(3)->timestamp)
            ->limit(5)
            ->groupBy('at.id');

        $tournaments = $query->get()->toArray();

        $query = DB::table('actual_teams AS at')
            ->select([
                'at.id AS id',
                'at.name AS name',
                'at.country AS country',
                'at.logo AS team_logo',

                'asp.name AS sport_name',
                'asp.icon AS sport_icon',
                'asp.slug AS sport_slug',
            ])
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->join('actual_events AS ae_home', 'at.id', '=', 'ae_home.team_home')
            ->join('actual_events AS ae_away', 'at.id', '=', 'ae_away.team_away');

        $query->where('ae_home.start_stamp', '>=', $fromDateTime)
            ->where('ae_home.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDays(7)->endOfDay()->subHours(3)->timestamp);
        $query->orWhere(function (Builder $q) use ($fromDateTime) {
            $q->where('ae_away.start_stamp', '>=', $fromDateTime)
                ->where('ae_away.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDays(7)->endOfDay()->subHours(3)->timestamp);
        });

        $query->limit(5)->groupBy('at.id');
        $teams = $query->get()->toArray();

        $query = DB::table('actual_players AS ap')
            ->select([
                'ap.id AS id',
                'ap.name AS name',

                'at.name AS team_name',
                'at.logo AS team_logo',

                'asp.name AS sport_name',
                'asp.icon AS sport_icon',
                'asp.slug AS sport_slug',
            ])
            ->join('actual_teams AS at', 'ap.team_id', '=', 'at.id')
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->join('actual_events AS ae_home', 'at.id', '=', 'ae_home.team_home')
            ->join('actual_events AS ae_away', 'at.id', '=', 'ae_away.team_away');

        $query->where('ae_home.start_stamp', '>=', $fromDateTime)
             ->where('ae_home.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDay(7)->endOfDay()->subHours(3)->timestamp);
        $query->orWhere(function (Builder $q) use ($fromDateTime) {
            $q->where('ae_away.start_stamp', '>=', $fromDateTime)
                ->where('ae_away.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDays(7)->endOfDay()->subHours(3)->timestamp);
        });

        $query->limit(5)->groupBy('ap.id');
        $players = $query->get()->toArray();

//        select `ap`.`id` as `id`, `ap`.`name` as `name`, `at`.`name` as `team_name`, `at`.`logo` as `team_logo` from `actual_players` as `ap`
//        inner join `actual_teams` as `at` on `ap`.`team_id` = `at`.`id`
//        inner join `actual_sports` as `asp` on `at`.`sport` = `asp`.`id`
//        inner join `actual_events` as `ae_home` on `at`.`id` = `ae_home`.`team_home`
//        inner join `actual_events` as `ae_away` on `at`.`id` = `ae_away`.`team_away`
//        where `ap`.`name` LIKE '%Yorman%' and `ae_home`.`start_stamp` >= 1678050000 and `ae_home`.`start_stamp` <= 1678654799
//            or (`ap`.`name` LIKE '%Yorman%' and `ae_away`.`start_stamp` >= 1678050000 and `ae_away`.`start_stamp` <= 1678654799)


//        select `ac`.`title_en` as `name`, `asp`.`name` as `sport_name`, `asp`.`icon` as `sport_icon`
//        from `actual_countries` as `ac`
//        inner join `actual_tournaments` as `at` on `ac`.`title_en` = `at`.`category`
//        inner join `actual_sports` as `asp` on `at`.`sport` = `asp`.`id`
//        left join `actual_events` as `ae` on `at`.`id` = `ae`.`tournament`
//        where `ae`.`start_stamp` >= 1678050000 and `ae`.`start_stamp` <= 1678654799

        $countries = DB::table('actual_countries AS ac')
            ->select([
                'ac.id AS id',
                'ac.title_en AS name',

                'asp.name AS sport_name',
                'asp.icon AS sport_icon',
                'asp.slug AS sport_slug',

            ])
            ->join('actual_tournaments AS at', 'ac.title_en', '=', 'at.category')
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->join('actual_events AS ae', 'at.id', '=', 'ae.tournament')
            ->where('ae.start_stamp', '>=', $fromDateTime)
            ->where('ae.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDay(7)->endOfDay()->subHours(3)->timestamp)
            ->inRandomOrder()
            ->limit(5)
            ->get()
            ->toArray();

//        $sport = DB::table('actual_sports')->select(['name', 'icon'])->where('name', '=', 'Football')->get();

        foreach ($tournaments as $tournament) {
            $tournament->type = 'tournament';
        }
        foreach ($teams as $team) {
            $team->type = 'team';
        }
        foreach ($players as $player) {
            $player->type = 'player';
        }

        foreach ($countries as $country) {
            $country->type = 'country';
        }

        $result = array_merge($tournaments, $teams, $players, $countries);

        return response()->json($result);
    }

    public function getDefaultResult(): JsonResponse
    {
        $fromDateTime = Carbon::now()->timestamp;
        $query = DB::table('actual_events')
            ->select(['id', 'tournament', 'team_home', 'team_away'])
            ->where('start_stamp', '>=', $fromDateTime)
            ->where('start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDays(7)->endOfDay()->timestamp);
        $events = $query->get()->toArray();

        $eventIds = [];
        $tournamentIds = [];
        $teamHomeIds = [];
        $teamAwayIds = [];

        foreach ($events as $event) {
            array_push($eventIds, $event->id);
            array_push($tournamentIds, $event->tournament);
            array_push($teamHomeIds, $event->team_home);
            array_push($teamAwayIds, $event->team_away);
        }

        $teamsAllIds = array_merge($teamHomeIds, $teamAwayIds);

        $query = DB::table('actual_tournaments AS at')
            ->select([
                'at.id AS id',
                'at.name AS name',
                'at.category AS country',
                'at.sport AS sport_name',

                'asp.icon AS sport_icon',
                'asp.name AS sport_name',
                'asp.slug AS sport_slug',

            ])
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->whereIn('at.id', $tournamentIds)
            ->limit(5);
        $tournaments = $query->get()->toArray();

        $query = DB::table('actual_teams AS at')
            ->select([
                'at.id AS id',
                'at.name AS name',
                'at.country AS country',
                'at.logo AS team_logo',

                'asp.name AS sport_name',
                'asp.icon AS sport_icon',
                'asp.slug AS sport_slug',
            ])
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->whereIn('at.id', $teamsAllIds)
            ->limit(5);

        $teams = $query->get()->toArray();

        $query = DB::table('actual_players AS ap')
            ->select([
                'ap.id AS id',
                'ap.name AS name',

                'at.name AS team_name',
                'at.logo AS team_logo',

                'asp.name AS sport_name',
                'asp.icon AS sport_icon',
                'asp.slug AS sport_slug',
            ])
            ->join('actual_teams AS at', 'ap.team_id', '=', 'at.id')
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->whereIn('at.id', $teamsAllIds)
            ->limit(5);

        $players = $query->get()->toArray();

        $countries = DB::table('actual_tournaments AS at')
            ->select([
                'at.category AS name',
                'at.sport AS sport',

                'asp.name AS sport_name',
                'asp.icon AS sport_icon',
                'asp.slug AS sport_slug',

            ])
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->whereIn('at.id', $tournamentIds)
            ->limit(10)
            ->distinct('at.sport')
            ->get()
            ->toArray();

        $countries = array_slice($countries, 0, 5);


        foreach ($tournaments as $tournament) {
            $tournament->type = 'tournament';
        }

        foreach ($teams as $team) {
            $team->type = 'team';
        }

        foreach ($players as $player) {
            $player->type = 'player';
        }

        foreach ($countries as $country) {
            $country->type = 'country';
        }

        $result = array_merge($tournaments, $teams, $players, $countries);

        return response()->json($result);

    }

    public function getSearchVariants_Old(string $searchQuery): JsonResponse
    {
        $fromDateTime = Carbon::today()->startOfDay()->subHours(3)->timestamp;
        $tournaments = DB::table('actual_tournaments AS at')
            ->select([
                'at.id AS id',
                'at.name AS name',
                'at.category AS country',

                'asp.icon AS sport_icon',
                'asp.name AS sport_name',
                'asp.slug AS sport_slug',
            ])
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->join('actual_events AS ae', 'at.id', '=', 'ae.tournament')
            ->where('ae.start_stamp', '>=', $fromDateTime)
            ->where('ae.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDay(7)->endOfDay()->subHours(3)->timestamp)
            ->where('at.name', 'LIKE', "%{$searchQuery}%")
            ->groupBy('at.id')
            ->get()
            ->toArray();

        $query = DB::table('actual_teams AS at')
            ->select([
                'at.id AS id',
                'at.name AS name',
                'at.country AS country',
                'at.logo AS team_logo',
                'at.sport AS team_sport',

                'asp.name AS sport_name',
                'asp.icon AS sport_icon',
                'asp.slug AS sport_slug',
            ])
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->join('actual_events AS ae_home', 'at.id', '=', 'ae_home.team_home')
            ->join('actual_events AS ae_away', 'at.id', '=', 'ae_away.team_away');

        $query->where('at.name', 'LIKE', "%{$searchQuery}%")
            ->where('ae_home.start_stamp', '>=', $fromDateTime)
            ->where('ae_home.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDays(7)->endOfDay()->subHours(3)->timestamp);
        $query->orWhere(function (Builder $q) use ($fromDateTime, $searchQuery) {
            $q->where('at.name', 'LIKE', "%{$searchQuery}%")
                ->where('ae_away.start_stamp', '>=', $fromDateTime)
                ->where('ae_away.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDays(7)->endOfDay()->subHours(3)->timestamp);
        });

        $teams = $query->groupBy('at.id')->get()->toArray();

        $query = DB::table('actual_players AS ap')
            ->select([
                'ap.id AS id',
                'ap.name AS name',
                'ap.country AS country',

                'at.name AS team_name',
                'at.logo AS team_logo',

                'asp.name AS sport_name',
                'asp.icon AS sport_icon',
                'asp.slug AS sport_slug',
            ])
            ->join('actual_teams AS at', 'ap.team_id', '=', 'at.id')
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->join('actual_events AS ae_home', 'at.id', '=', 'ae_home.team_home')
            ->join('actual_events AS ae_away', 'at.id', '=', 'ae_away.team_away');

        $query->where('ap.name', 'LIKE', "%{$searchQuery}%")
                ->where('ae_home.start_stamp', '>=', $fromDateTime)
                ->where('ae_home.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDay(7)->endOfDay()->subHours(3)->timestamp);
        $query->orWhere(function (Builder $q) use ($fromDateTime, $searchQuery) {
            $q->where('ap.name', 'LIKE', "%{$searchQuery}%")
                ->where('ae_away.start_stamp', '>=', $fromDateTime)
                ->where('ae_away.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDays(7)->endOfDay()->subHours(3)->timestamp);
        });

        $query->groupBy('ap.id');
        $players = $query->get()->toArray();

//        сложный запрос по странам
//        $countries = DB::table('actual_countries AS ac')
//            ->select([
//                'ac.id AS id',
//                'ac.title_en AS name',
//
//                'asp.name AS sport_name',
//                'asp.icon AS sport_icon',
//                'asp.slug AS sport_slug',
//
//            ])
//            ->join('actual_tournaments AS at', 'ac.title_en', '=', 'at.category')
//            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
//            ->join('actual_events AS ae', 'at.id', '=', 'ae.tournament')
//            ->where('ac.title_en', 'LIKE', "%{$searchQuery}%")
//            ->where('ae.start_stamp', '>=', $fromDateTime)
//            ->where('ae.start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDay(7)->endOfDay()->subHours(3)->timestamp)
//            ->groupBy('ac.title_en')
//            ->get()
//            ->toArray();

        $countries = DB::table('actual_countries AS ac')
            ->select([
                'ac.id AS id',
                'ac.title_en AS name'
            ])
            ->where('ac.title_en', 'LIKE', "%{$searchQuery}%")
            ->get()
            ->toArray();
        // для простого запроса по странам берем виды спорта
        $sports = DB::table('actual_sports')->select(['name', 'icon', 'slug'])->get()->toArray();

        foreach ($tournaments as $tournament) {
            $tournament->type = 'tournament';
        }
        foreach ($teams as $team) {
            $team->type = 'team';
        }
        foreach ($players as $player) {
            $player->type = 'player';
        }
        // для сложного запроса по странам
//        foreach($countries as $country) {
//            $country->type = 'country';
//        }

        // для простого запроса по странам
        $countriesWithSport = [];

        for ($i = 0; $i < count($countries); $i++) {
            $country = $countries[$i];
            for ($j = 0; $j < count($sports); $j++) {
                $countryWithSport = new \stdClass();
                $countryWithSport->type = 'country';
                $countryWithSport->id = $country->id;
                $countryWithSport->name = $country->name;
                $countryWithSport->sport_name = $sports[$j]->name;
                $countryWithSport->sport_icon = $sports[$j]->icon;
                $countryWithSport->sport_slug = $sports[$j]->slug;
                array_push($countriesWithSport, $countryWithSport);
            }
        }

        $result = array_merge($tournaments, $teams, $players, $countriesWithSport);

        return response()->json($result);
    }

    public function getSearchVariants(string $searchQuery): JsonResponse {
        $fromDateTime = Carbon::now()->timestamp;
        $query = DB::table('actual_events')
            ->select(['id', 'tournament', 'team_home', 'team_away'])
            ->where('start_stamp', '>=', $fromDateTime)
            ->where('start_stamp', '<=', \Carbon\Carbon::parse($fromDateTime)->addDays(7)->endOfDay()->timestamp);
        $events = $query->get()->toArray();

        $eventIds = [];
        $tournamentIds = [];
        $teamHomeIds = [];
        $teamAwayIds = [];

        foreach ($events as $event) {
            array_push($eventIds, $event->id);
            array_push($tournamentIds, $event->tournament);
            array_push($teamHomeIds, $event->team_home);
            array_push($teamAwayIds, $event->team_away);
        }

        $teamsAllIds = array_merge($teamHomeIds, $teamAwayIds);

        $query = DB::table('actual_tournaments AS at')
            ->select([
                'at.id AS id',
                'at.name AS name',
                'at.category AS country',
                'at.sport AS sport_name',

                'asp.icon AS sport_icon',
                'asp.name AS sport_name',
                'asp.slug AS sport_slug',

            ])
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->whereIn('at.id', $tournamentIds)
            ->where('at.name', 'LIKE', "%{$searchQuery}%");
        $tournaments = $query->get()->toArray();

        $query = DB::table('actual_teams AS at')
            ->select([
                'at.id AS id',
                'at.name AS name',
                'at.country AS country',
                'at.logo AS team_logo',

                'asp.name AS sport_name',
                'asp.icon AS sport_icon',
                'asp.slug AS sport_slug',
            ])
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->whereIn('at.id', $teamsAllIds)
            ->where('at.name', 'LIKE', "%{$searchQuery}%");

        $teams = $query->get()->toArray();

        $query = DB::table('actual_players AS ap')
            ->select([
                'ap.id AS id',
                'ap.name AS name',

                'at.name AS team_name',
                'at.logo AS team_logo',

                'asp.name AS sport_name',
                'asp.icon AS sport_icon',
                'asp.slug AS sport_slug',
            ])
            ->join('actual_teams AS at', 'ap.team_id', '=', 'at.id')
            ->join('actual_sports AS asp', 'at.sport', '=', 'asp.id')
            ->whereIn('at.id', $teamsAllIds)
            ->where('ap.name', 'LIKE', "%{$searchQuery}%");

        $players = $query->get()->toArray();

        $countries = DB::table('actual_countries AS ac')
            ->select([
                'ac.id AS id',
                'ac.title_en AS name'
            ])
            ->where('ac.title_en', 'LIKE', "%{$searchQuery}%")
            ->get()
            ->toArray();
        // для простого запроса по странам берем виды спорта
        $sports = DB::table('actual_sports')->select(['name', 'icon', 'slug'])->get()->toArray();


        foreach ($tournaments as $tournament) {
            $tournament->type = 'tournament';
        }

        foreach ($teams as $team) {
            $team->type = 'team';
        }

        foreach ($players as $player) {
            $player->type = 'player';
        }

        $countriesWithSport = [];

        for ($i = 0; $i < count($countries); $i++) {
            $country = $countries[$i];
            for ($j = 0; $j < count($sports); $j++) {
                $countryWithSport = new \stdClass();
                $countryWithSport->type = 'country';
                $countryWithSport->id = $country->id;
                $countryWithSport->name = $country->name;
                $countryWithSport->sport_name = $sports[$j]->name;
                $countryWithSport->sport_icon = $sports[$j]->icon;
                $countryWithSport->sport_slug = $sports[$j]->slug;
                array_push($countriesWithSport, $countryWithSport);
            }
        }

        $result = array_merge($tournaments, $teams, $players, $countriesWithSport);

        return response()->json($result);
    }
}
