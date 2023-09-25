<?php

namespace App\Models;

use App\Services\TeamService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActualTeam extends Model
{
    use HasFactory;

    protected $fillable = [
      "os_sports_id",
      "name",
      "slug",
      "full-name",
      "short-name",
      "gender",
      "logo",
      "sport",
      "country"
    ];


    protected $with = [
        'players',
    ];

    protected $appends = [
        'last_results',
    ];

    public function players(): HasMany
    {
        return $this->hasMany(ActualPlayer::class, 'team_id', 'id');
    }

    public function getLastResultsAttribute(): array
    {
        return TeamService::getLastEventsResults($this->id);
    }
}
