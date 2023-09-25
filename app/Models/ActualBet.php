<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    protected $with = [
        "event"
    ];

    public function event()
    {
        return $this->hasOne(ActualEvent::class, "id", "event");
    }
}
