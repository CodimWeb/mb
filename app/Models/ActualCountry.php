<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActualCountry extends Model
{
    use HasFactory;

    protected $fillable = [
      "title_ru",
      "title_en"
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
