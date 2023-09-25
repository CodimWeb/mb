<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActualTournaments extends Model
{
    use HasFactory;

    protected $fillable = [
        "os_sports_id",
        "category",
        "sport",
        "name",
        "slug",
        "active"
    ];

    protected $with = [];

    public function tournament_sport()
    {
        return $this->hasOne(ActualSport::class, "id", "sport");
    }

    public function tournament_events()
    {
        return $this->hasMany(ActualEvent::class, 'tournament', 'id');
    }
}
