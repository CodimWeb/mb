<?php

namespace App\Console\Commands;

use App\Models\ActualSport;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class FixSportIcons extends Command
{
    const IMG_PATH = '/img/sport-icons';

    const ICON_EXT = '.svg';

    protected $signature = 'fix:sport-icons';

    protected $description = 'Fix all sports icons';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        if (!$sports = ActualSport::all()) {
            Log::error('No actual sports found');

            return 0;
        }

        $path = resource_path() . static::IMG_PATH;
        if (!$files = array_diff(scandir($path), array('.', '..'))) {
            Log::error('No icons found');

            return 0;
        }

        foreach ($sports as $sport) {
            foreach ($files as $file) {
                if (!$sport->icon && $sport->slug . static::ICON_EXT == $file) {
                    $sport->icon = $sport->slug . '-icon';
                    $sport->save();
                }
            }
        }

        return 0;
    }
}
