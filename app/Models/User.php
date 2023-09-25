<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use App\Notifications\VerifyEmailNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\ResetPasswordNotification;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\WithoutWith\ActualBet as ActualBetClean;
use App\Models\WithoutWith\ActualUserLine as ActualUserLineClean;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = [
        'name',
        'email',
        'wallet',
        'email_verified_at',
        'password',
        'role',
        'is_admin',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmailNotification());
    }

    public function balance(): HasOne
    {
        return $this->hasOne(ActualBalance::class, 'user', 'id');
    }

    public function bets(): HasMany
    {
        return $this->hasMany(ActualBet::class, 'user','id');
    }

    public function betsCount(): HasMany
    {
        return $this->hasMany(ActualBetClean::class, 'user','id');
    }

    public function withdraw(): HasMany
    {
        return $this->hasMany(ActualWithdrawFunds::class, 'user', 'id');

    }

    public function lines(): HasMany
    {
        return $this->hasMany(ActualUserLineClean::class, 'user','id');
    }
}
