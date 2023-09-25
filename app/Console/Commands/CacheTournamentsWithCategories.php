<?php

namespace App\Console\Commands;

use App\Models\ActualSport;
use App\Services\SportService;
use App\Models\ActualAdminProp;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;

class CacheTournamentsWithCategories extends Command
{
    protected $signature = 'cache:tournaments-with-categories-by-sports';

    protected $description = 'Cache tournaments with categories by sports';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle(SportService $sportService)
    {
        $excludedSportIds = ActualAdminProp::where('key', ActualAdminProp::HIDDEN_SPORTS_KEY)->first()?->value;
        $excludedSportIds = array_map('trim', explode(',', $excludedSportIds));
        if (!$sports = ActualSport::whereNotIn('id', $excludedSportIds)->get()) {
            Log::error('No actual sports found');

            return 0;
        }

        foreach ($sports as $sport) {
            Redis::hset(
                'tournaments_with_categories_by_sport',
                $sport->slug,
                json_encode($sportService->getActiveWithSportAndCategories($sport->slug))
            );
        }

        return 0;
    }
}
