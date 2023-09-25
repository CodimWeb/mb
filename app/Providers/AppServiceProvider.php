<?php

namespace App\Providers;

use GuzzleHttp\Client;
use App\Services\BetService;
use App\Services\SportService;
use App\Services\CoinsbitService;
use App\Services\RapidapiService;
use App\Services\BlockchainService;
use App\Services\TournamentService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
