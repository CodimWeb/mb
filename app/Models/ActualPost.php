<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActualPost extends Model
{
    use HasFactory;

    protected $fillable = [
      "language",
      "category",
      "slug",
      "title",
      "excerpt",
      "content"
    ];

    public function language() {
      return $this->hasOne(ActualLanguage::class, "id", "language");
    }

    protected $with = [
      "language"
    ];
}
