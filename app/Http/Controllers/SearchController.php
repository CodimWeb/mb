<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\EventService;
use Illuminate\Support\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Services\SearchService;

class SearchController extends Controller
{
    public function index(Request $request, EventService $eventService): JsonResponse
    {
        $date = Carbon::today()->startOfDay()->subHours(3)->timestamp;
        $searchData = $request->input('data');

        $result = [
            'active' => $eventService->formatEvents(
                $eventService->getActiveEventsBySearch(
                    fromDateTime: $date,
                    searchData: $searchData
                )
            ),
//            'live' => $eventService->formatEvents(
//                $eventService->getActiveEventsBySearch(
//                    fromDateTime: $date,
//                    searchData: $searchData
//                )
//            ),
//            'upcoming' => [],
//            'results' => $eventService->formatEvents(
//                $eventService->getActiveEventsBySearch(
//                    fromDateTime: $date,
//                    isActive: 0,
//                    hasWinner: 1,
//                    searchData: $searchData
//                )
//            ),
        ];

        return response()->json($result);
    }

    public function getDefaultResult(SearchService $searchService): JsonResponse
    {
        return $searchService->getDefaultResult();
    }

    public function getSearchVariants(Request $request, SearchService $searchService): JsonResponse
    {
        $searchQeury = $request->input('searchQuery');
        return $searchService->getSearchVariants($searchQeury);
    }
}
