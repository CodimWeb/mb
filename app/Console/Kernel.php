<?php

namespace App\Console;

use App\Console\Commands\CalculateBets;
use App\Console\Commands\FixSportIcons;
use Illuminate\Console\Scheduling\Schedule;
use App\Console\Commands\SetTournamentStatuses;
use App\Console\Commands\CacheTournamentsWithCategories;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        CalculateBets::class,
        FixSportIcons::class,
        SetTournamentStatuses::class,
        CacheTournamentsWithCategories::class,
    ];

    protected function schedule(Schedule $schedule)
    {
        $schedule->command('parse:courses')->everyMinute();

        $schedule->command('cache:tournaments-with-categories-by-sports')->everyFourHours();

        $schedule->command('set:tournament-statuses')->everyFourHours();

        $schedule->command('calculate:bets')->everyFiveMinutes();

        $schedule->command('fix:sport-icons')->dailyAt('05:00');
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
