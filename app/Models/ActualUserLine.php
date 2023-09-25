<?php

namespace App\Models;

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

    protected $with = [
        "bets_rel"
    ];

    public function bets_rel()
    {
        return $this->hasMany(ActualUserLineRel::class, "line", "id");
    }
}
