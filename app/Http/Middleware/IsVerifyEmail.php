<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IsVerifyEmail
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::user()->email_verified_at) {
            return redirect()->route('/en/dashboard')
                ->with('message', 'You need to confirm your account. We have sent you an activation code, please check your email.');
        }

        return $next($request);
    }
}
