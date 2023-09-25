<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActualAdminProp extends Model
{
    use HasFactory;

    protected $table = "actual_admin_props";

    protected $fillable = [
        "key",
        "value",
    ];

    protected $casts = [
        'updated_at'  => 'date:d-m-Y',
        'created_at' => 'date:d-m-Y',
    ];

    const HIDDEN_SPORTS_KEY = 'hidden_sports';

    const MIN_BET_KEY = 'min_bet';

    const MIN_WITHDRAW_KEY = 'min_withdraw';

    const MAX_WITHDRAW_KEY = 'max_withdraw';

    const WITHDRAW_HOURLY = 'withdraw_hourly';

    const WITHDRAW_DAILY = 'withdraw_daily';
}
