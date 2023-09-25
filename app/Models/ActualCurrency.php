<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActualCurrency extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    const MAIN_TOKEN_CODE = 'MARAN';

    const MAIN_TOKEN_NAME = 'Maran';

    public static $currencies = [
        'USDT',
        'ETH',
        'LINK',
        'UNI',
        'FTM',
        'MARAN',
    ];

    public static $tokens = [
        'USDT' => 'Tether',
        'ETH' => 'Ethereum',
        'LINK' => 'Chainlink',
        'UNI' => 'Uniswap',
        'FTM' => 'Fantom',
        'MARAN' => 'Maran',
    ];
}
