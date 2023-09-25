<?php

namespace App\Http\Controllers\Actual;

use App\Models\ActualEvent;
use App\Models\ActualSport;
use Illuminate\Http\Request;
use App\Services\EventService;
use Illuminate\Support\Carbon;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class EventController extends Controller
{
    const ESPORTS_SLUG = 'esports';

    public function get(Request $request, $id): JsonResponse
    {
        return response()->json(ActualEvent::find($id));
    }

    public function getActiveEsports(Request $request, EventService $eventService): JsonResponse
    {
        $data = $eventService->formatEvents(
            $eventService->getActiveEventsByDate(
                fromDateTime: Carbon::today()->timestamp,
                sportId: ActualSport::whereSlug(static::ESPORTS_SLUG)->first()?->id
            )
        );

        $array = $data ?? [];
        $esportsByTournamentArr = reset($array);
        $esportsByTournament = $esportsByTournamentArr->tournaments;

        return response()->json($esportsByTournament);
    }

    public function listByCategoriesAndTournaments(
        Request $request,
        string $sportSlug,
        string $category,
        string $tournament,
        EventService $eventService
    ): JsonResponse {
        $date = Carbon::today()->timestamp;
        $activeEvents = $eventService->getActiveEventsByDate(
            fromDateTime: $date,
            sportId: ActualSport::whereSlug($sportSlug)->first()?->id,
            tournamentCategory: $category,
            tournamentName: $tournament
        );
        $liveEvents = $eventService->getActiveEventsByDate(
            fromDateTime: $date,
            isLive: 1,
            sportId: ActualSport::whereSlug($sportSlug)->first()?->id,
            tournamentCategory: $category,
            tournamentName: $tournament
        );
        $upcomingEvents = $eventService->getActiveEventsByDate(
            fromDateTime: Carbon::parse($request->input('date'))->subHours(3)->timestamp,
            sportId: ActualSport::whereSlug($sportSlug)->first()?->id,
            tournamentCategory: $category,
            tournamentName: $tournament
        );
        $resultEvents = $eventService->getActiveEventsByDate(
            fromDateTime: $date,
            isActive: 0,
            hasWinner: 1,
            sportId: ActualSport::whereSlug($sportSlug)->first()?->id,
            tournamentCategory: $category,
            tournamentName: $tournament
        );

        return response()->json(
            [
                'active' => $eventService->formatEvents(
                    $activeEvents->mergeRecursive($liveEvents->mergeRecursive($resultEvents))
                ),
                'live' => $eventService->formatEvents($liveEvents),
                'upcoming' => $eventService->formatEvents($upcomingEvents),
            ]
        );
    }
}
