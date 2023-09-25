<?php

namespace App\Http\Controllers\Actual;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Models\ActualTransactionsHistory;

class TransactionsController extends Controller
{
    public function list(Request $request): JsonResponse
    {
        return response()->json(
            ActualTransactionsHistory::where('user', $request->user()->id)
            ->latest()
            ->paginate(20)
        );
    }
}
