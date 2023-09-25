<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActualTransactionsHistory extends Model
{
    use HasFactory;

    protected $fillable = [
      "user",
      "type", # 0 - deposit , 1 - withdraw, 10 - frozen, 7 - win, 13 - lose, 20 - promo, 25 - refund
      "currency_from",
      "currency_to",
      "sum_from",
      "sum_to",
      "rate",
      "status" # 0 - default, 1 - success, 2 - cancelled
    ];
}
