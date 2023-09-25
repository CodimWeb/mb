<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;

class NewBetDdos
{
    public function handle(Request $request, Closure $next)
    {
        $lock = Redis::get('lock_bet_' . Auth::user()->id);
        if (!empty($lock) && $lock == 1) {
            return response()->json([
                "success" => false,
                "message" => "Stop DDoS"
            ], 429);
        }

        return $next($request);
    }
}
