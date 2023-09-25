<?php

namespace App\Models\WithoutWith;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActualUserLine extends Model
{
    use HasFactory;

    protected $fillable = [
      "user",
      "sum",
      "calculated",
      "used_bonus",
    ];

}
