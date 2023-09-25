<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;

class NewWithdrawDdos
{
    public function handle(Request $request, Closure $next)
    {
        $lock = Redis::get('lock_withdraw_' . Auth::user()->id);
        if (!empty($lock) && $lock == 1) {
            return response()->json([
                "success" => false,
                "ddos" => true,
                "message" => "Please wait for a while"
            ], 429);
        }

        return $next($request);
    }
}
