<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActualOdds extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "event",
        "os_sports_id",
        "market_name",
        "choice_home",
        "choice_away",
        "choice_draw",
        "winner"
    ];

    public function events(): BelongsTo
    {
        return $this->belongsTo(ActualEvent::class, 'event', 'id');
    }
}
