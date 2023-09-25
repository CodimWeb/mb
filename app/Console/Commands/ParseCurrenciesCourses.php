<?php

namespace App\Console\Commands;

use App\Models\ActualCurrency;
use App\Services\CoinsbitService;
use Illuminate\Console\Command;
use App\Services\BlockchainService;

class ParseCurrenciesCourses extends Command
{
    const USDT_TICKER = 'USDT';

    const USDT_NAME = 'Tether';

    protected $signature = 'parse:courses';

    protected $description = 'Parse currencies courses';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle(CoinsbitService $coinsbitService, BlockchainService $blockchainService): int
    {
        $contracts = $blockchainService->getTokensContractAddresses();
        foreach (ActualCurrency::$currencies as $ticker) {
            $response = $coinsbitService->getPairCourse($ticker, self::USDT_TICKER);
            if ($ticker == self::USDT_TICKER) {
                ActualCurrency::updateOrCreate(
                    [
                        'code' => self::USDT_TICKER,
                    ],
                    [
                        'name' => self::USDT_NAME,
                        'price' => 1,
                        'address' => $contracts['USDT_ADDR'] ?? null,
                    ]
                );

                continue;
            }

            if (!empty($response) && !empty($response['code']) && $response['code'] == 200 && !empty($response['result']) && !empty($response['result']['bid'])) {
                ActualCurrency::updateOrCreate(
                    [
                        'code' => $ticker,
                    ],
                    [
                        'name' => ActualCurrency::$tokens[$ticker] ?? '',
                        'price' => round($response['result']['bid'], 8),
                        'address' => $contracts[$ticker . '_ADDR'] ?? null,
                    ]
                );
            }
        }

        return 0;
    }
}
