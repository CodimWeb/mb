<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActualBalance extends Model
{
    use HasFactory;

    protected $fillable = [
        "user",
        "real_balance",
        "bonus",
        "freeze",
    ];
}
