<?php

namespace App\Http\Controllers\Actual;

use App\Models\ActualOdds;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class OddsController extends Controller
{
    public function getOddsbyIds(Request $request): JsonResponse
    {
        return response()->json(ActualOdds::whereIn('id', $request->input('oddsIds'))->get());
    }
}
