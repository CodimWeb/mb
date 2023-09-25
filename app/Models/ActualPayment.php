<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ActualPayment extends Model
{
    use HasFactory;

    protected $fillable = [
      "transaction",
      "tx_hash",
      "status"
    ];

    protected $with = [
        "transaction"
    ];

    public function transaction(): HasOne
    {
        return $this->hasOne(ActualTransactionsHistory::class, 'id', 'transaction');
    }
}
