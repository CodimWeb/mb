<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function __invoke(Request $request)
    {
        return response()->json($request->user());
    }

    public function addEmail(Request $request) {
        $request->validate([
            "email" => "email|unique:users"
        ]);

        if ($userAuth = auth()->user()) {
            /** @var User $user */
            $user = User::find($userAuth->id);
//            $user->sendEmailVerificationNotification();

            $user->email = $request->email;
            $user->save();

            return response()->json([
                "success" => true,
                "message" => "OK"
            ], 200);
        }

        return response()->json([
            "success" => false,
            "message" => "Something went wrong"
        ], 500);
    }

    public function verifyEmail(Request $request, int $userId, string $hash)
    {
        User::whereId($userId)->update(['email_verified_at' => Carbon::now()->toDateTimeString()]);

        return redirect('/en/dashboard');
    }

    public function sendVerificationEmail(Request $request)
    {
        $request->validate([
            "email" => "email|unique:users"
        ]);

        /** @var User $userAuth */
        if ($userAuth = auth()->user()) {
            /** @var User $user */
            $user = User::find($userAuth->id);
            $user->sendEmailVerificationNotification();

            $user->email = $request->email;
            $user->save();

            return response()->json([
                "success" => true,
                "message" => "OK"
            ], 200);
        }

        return response()->json([
            "success" => false,
            "message" => "Something went wrong"
        ], 500);
    }

    public function addWallet(Request $request): JsonResponse
    {
        $request->validate([
            "wallet" => "required"
        ]);

        /** @var User $user */
        if ($user = auth()->user()) {
            $userId = $user->id;
        }

        if (User::whereId($userId)->update(['wallet' => $request->input('wallet')])) {
            return response()->json([
                "success" => true,
                "message" => "Wallet address was added successfully"
            ], 200);
        }

        return response()->json([
            "success" => false,
            "message" => "Something went wrong"
        ], 500);
    }
}
