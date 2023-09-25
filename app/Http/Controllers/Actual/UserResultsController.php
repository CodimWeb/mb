<?php

namespace App\Http\Controllers\Actual;

use Illuminate\Http\Request;
use App\Models\ActualUserLine;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class UserResultsController extends Controller
{
    public function list(Request $request): JsonResponse
    {
        return response()->json(ActualUserLine::where('user', $request->user()?->id)->latest()->paginate(20));
    }
}
