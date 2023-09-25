<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActualWithdrawFunds extends Model
{
    use HasFactory;

    protected $fillable = [
      "user",
      "transaction",
      "sum",
      "wallet",
      "status" # 1 - OK, 2 - manual OK
    ];
}
