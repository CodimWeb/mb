<?php

namespace App\Http\Controllers\Actual;

use App\Models\ActualSport;
use Illuminate\Http\Request;
use App\Services\EventService;
use Illuminate\Support\Carbon;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class ResultsController extends Controller
{
    public function bySport(Request $request, string $slug, EventService $eventService): JsonResponse
    {
        return response()->json(
            $eventService->formatEvents(
                $eventService->getActiveEventsByDate(
                    fromDateTime: Carbon::today()->subWeek()->timestamp,
                    isActive: 0,
                    hasWinner: 1,
                    sportId: ActualSport::whereSlug($slug)->first()?->id,
                )
            )
        );
    }
}
