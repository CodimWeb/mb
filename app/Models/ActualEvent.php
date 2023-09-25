<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActualEvent extends Model
{
    use HasFactory;

    const API_O = 'api_o';

    const API_F = 'api_f';

    const FINISHED_STATUS = 'finished';

    public static array $finishedStatuses = [
        "canceled",
        "delayed",
        "finished",
        "interrupted",
        "postponed",
        "conditional"
    ];

    public static array $canceledStatuses = [
        "canceled",
        "delayed",
        "interrupted",
        "postponed",
        "conditional"
    ];

    protected $fillable = [
      "os_sports_id",
      "tournament",
      "team_home",
      "team_away",
      "score_home",
      "score_away",
      "winner",
      "active",
      "is_live",
      "start",
      "status"
    ];

    protected $with = [
        "team_home",
        "team_away",
        "odds"
    ];

    public function team_home()
    {
        return $this->hasOne(ActualTeam::class, 'id', 'team_home');
    }

    public function team_away()
    {
        return $this->hasOne(ActualTeam::class, 'id', 'team_away');
    }

    public function event_tournament()
    {
        return $this->hasOne(ActualTournaments::class, 'id', 'tournament');
    }

    public function odds()
    {
        return $this->hasOne(ActualOdds::class, 'event', 'id');
    }
}
