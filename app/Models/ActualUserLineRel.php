<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActualUserLineRel extends Model
{
    use HasFactory;

    protected $fillable = [
      "user",
      "line",
      "bet"
    ];

    protected $with = [
        "bet"
    ];

    public function bet()
    {
        return $this->hasOne(ActualBet::class, "id", "bet");
    }
}
