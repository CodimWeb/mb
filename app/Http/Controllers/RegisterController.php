<?php

namespace App\Http\Controllers;

use App\Models\ActualBalance;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = $request->validate([
          'name' => 'required|min:3|max:255',
          'email' => 'required|email|unique:users,email',
          'password' => 'required|min:6|max:255|confirmed'
        ]);


        $user = User::create([
          'name' => $data['name'],
          'email' => $data['email'],
          'password' => Hash::make($data['password']),
        ]);

        if ($user) {
            // create balance
            $user_balance = new ActualBalance([
              'user' => $user->id,
              'real_balance' => 0
            ]);
            $user_balance->save();

            event(new Registered($user));
        }

        /*
        if ($user) {
            event(new Registered($user));

            // create user wallet
            $url = "https://api.maranbet.com/api/wallet/create";
            $ch = curl_init( $url );
            $payload = json_encode( array( "app_user_id"=> $user->id ) );
            curl_setopt( $ch, CURLOPT_POSTFIELDS, $payload );
            curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json', 'Authtoken:Dnltv6nhsk+kGg6ssm/AOw=='));
            curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
            $result = curl_exec($ch);
            curl_close($ch);

            return $user;
        }
        */
    }
}
