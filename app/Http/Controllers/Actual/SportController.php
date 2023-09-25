<?php

namespace App\Http\Controllers\Actual;

use Illuminate\Http\Request;
use App\Services\SportService;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redis;

class SportController extends Controller
{
    public function list(Request $request, SportService $sportService): JsonResponse
    {
        return response()->json($sportService->getActualSports());
    }

    public function live(Request $request, SportService $sportService): JsonResponse
    {
        return response()->json($sportService->getActualSports());
    }

    public function listWithCategoriesAndTournaments(Request $request, string $sportSlug)
    {
        return Redis::hget('tournaments_with_categories_by_sport', $sportSlug);
    }
}
