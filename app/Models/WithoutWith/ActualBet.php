<?php

namespace App\Models\WithoutWith;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\WithoutWith\ActualUserLine as ActualUserLineClean;

class ActualBet extends Model
{
    use HasFactory;

    protected $fillable = [
      "user",
      "event",
      "odd_id",
      "choice",
      "odd",
      "win",
      "calculated"
    ];
}
