<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WithWallet
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::user()->wallet) {
            return redirect()->route('/en/dashboard')
                ->with('message', 'You need to add your wallet address.');
        }

        return $next($request);
    }
}
