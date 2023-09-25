<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActualPostCategory extends Model
{
    use HasFactory;

    protected $fillable = [
      "title",
      "slug"
    ];
}
