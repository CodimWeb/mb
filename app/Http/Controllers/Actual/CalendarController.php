<?php

namespace App\Http\Controllers\Actual;

use App\Models\ActualSport;
use Illuminate\Http\Request;
use App\Services\EventService;
use Illuminate\Support\Carbon;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class CalendarController extends Controller
{
    public function getAllEventsByDate(Request $request, EventService $eventService): JsonResponse
    {
        $request->validate([
            'date' => 'required|date',
            'sport_slug' => 'sometimes|string',
            'tournament_category' => 'sometimes|string',
            'tournament_name' => 'sometimes|string',
            'team_country' => 'sometimes|string',
            'team_name' => 'sometimes|string',
        ]);

        $date = Carbon::parse($request->input('date'))->startOfDay()->timestamp;
        $upcomingDate = ($request->input('date') == Carbon::today()->toDateString()) ?
            Carbon::parse($request->input('date') . ' ' . Carbon::now()->toTimeString())->addMinute()->timestamp :
            Carbon::parse($request->input('date'))->addMinute()->timestamp;
        $sportId = ($request->input('sport_slug')) ? ActualSport::whereSlug($request->input('sport_slug'))->first()?->id : '';
        $tournament_category = ($request->input('tournament_category')) ?? '';
        $tournament_name = ($request->input('tournament_name')) ?? '';
        $team_country = ($request->input('team_country')) ?? '';
        $team_name = ($request->input('team_name')) ?? '';
        $activeEvents = $eventService->getActiveEventsByDate(
            fromDateTime: $date,
            sportId: $sportId,
            tournamentCategory: $tournament_category,
            tournamentName: $tournament_name,
            teamCountry: $team_country,
            teamName: $team_name
        );
        $liveEvents = $eventService->getActiveEventsByDate(
            fromDateTime: $date,
            isLive: 1,
            sportId: $sportId,
            tournamentCategory: $tournament_category,
            tournamentName: $tournament_name,
            teamCountry: $team_country,
            teamName: $team_name
        );
        $upcomingEvents = $eventService->getActiveEventsByDate(
            fromDateTime: $upcomingDate,
            sportId: $sportId,
            tournamentCategory: $tournament_category,
            tournamentName: $tournament_name,
            teamCountry: $team_country,
            teamName: $team_name
        );
        $resultEvents = $eventService->getActiveEventsByDate(
            fromDateTime: $date,
            isActive: 0,
            hasWinner: 1,
            sportId: $sportId,
            tournamentCategory: $tournament_category,
            tournamentName: $tournament_name,
            teamCountry: $team_country,
            teamName: $team_name
        );

        return response()->json(
            [
                'active' => $eventService->formatEvents(
                    $activeEvents->mergeRecursive($liveEvents->mergeRecursive($resultEvents)),
                ),
                'live' => $eventService->formatEvents($liveEvents),
                'upcoming' => $eventService->formatEvents($upcomingEvents),
            ]
        );
    }
}
