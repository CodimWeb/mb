<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActualSport extends Model
{
    use HasFactory;

    protected $fillable = [
      "os_sports_id",
      "name",
      "slug",
      "icon",
    ];
}
