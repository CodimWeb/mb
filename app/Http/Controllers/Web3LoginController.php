<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Elliptic\EC;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use kornrunner\Keccak;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class Web3LoginController extends Controller
{
    public function message(): string
    {
        $nonce = Str::random();
        $message = "Sign this message to confirm you own this wallet address. This action will not cost any gas fees.\n\nNonce: " . $nonce;

        Cache::put('sign_message', $message);

        return $message;
    }

    public function verify(Request $request): string
    {
        $address = $request->input('address');
        $result = $this->verifySignature(
            Cache::get('sign_message'),
            $request->input('signature'),
            $address
        );

        if ($result) {
            if (!$user = User::whereWallet($address)->first()) {
                $user = User::updateOrCreate(
                    [
                        'email' => $address.'@metamask.io',
                    ],
                    [
                        'name' => $address,
                        'password' => Hash::make($address),
                        'wallet' => $address
                    ]
                );
            }

            Auth::login($user);

            return '/en/dashboard';
        }

        return '/en/auth';
    }

    /**
     * @throws Exception
     */
    private function verifySignature(string $message, string $signature, string $address): bool
    {
        $recId = ord(hex2bin(substr($signature, 130, 2))) - 27;
        if ($recId != ($recId & 1)) {
            return false;
        }

        $hash = Keccak::hash(sprintf("\x19Ethereum Signed Message:\n%s%s", strlen($message), $message), 256);
        $sign = [
            'r' => substr($signature, 2, 64),
            's' => substr($signature, 66, 64),
        ];

        $pubkey = (new EC('secp256k1'))->recoverPubKey($hash, $sign, $recId);
        $derived_address = '0x' . substr(Keccak::hash(substr(hex2bin($pubkey->encode('hex')), 1), 256), 24);

        return (Str::lower($address) == $derived_address);
    }
}
