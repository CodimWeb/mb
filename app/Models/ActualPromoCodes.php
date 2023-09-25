<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActualPromoCodes extends Model
{
    use HasFactory;

    protected $fillable = [
      "code",
      "sum",
      "is_personal",
      "user",
      "active"
    ];
}
