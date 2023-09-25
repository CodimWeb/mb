<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Actual\BetController;
use App\Http\Controllers\Actual\OddsController;
use App\Http\Controllers\Actual\EventController;
use App\Http\Controllers\Actual\PostsController;
use App\Http\Controllers\Actual\SportController;
use App\Http\Controllers\Actual\BalanceController;
use App\Http\Controllers\Actual\ResultsController;
use App\Http\Controllers\Panel\WithdrawController;
use App\Http\Controllers\Actual\CalendarController;
use App\Http\Controllers\Actual\FavouriteController;
use App\Http\Controllers\Panel\StatisticsController;
use App\Http\Controllers\Actual\PromoCodesController;
use App\Http\Controllers\Actual\AddingFundsController;
use App\Http\Controllers\Actual\UserResultsController;
use App\Http\Controllers\Actual\TransactionsController;
use App\Http\Controllers\Panel\ReplenishmentController;
use App\Http\Controllers\Actual\WithdrawFundsController;
use App\Http\Controllers\Panel\PromoCodeAdminController;
use App\Http\Controllers\Panel\ActualAdminPropsController;

Route::middleware('guest')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->name('login');
//    Route::post('/register', RegisterController::class);
//    Route::post('/forgot-password', ForgotPasswordController::class);
//    Route::post('/reset-password', ResetPasswordController::class);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/actual/update-odds', [
        OddsController::class,
        'getOddsbyIds'
    ]);

    /** Актуальные ставки */
    Route::get('/actual/bets/list', [
      BetController::class,
      'list'
    ]);
    Route::post('/actual/bets/add', [
      BetController::class,
      'add'
    ])->middleware(['new_bet' ,'with_wallet']);
    //->middleware(['is_verify_email']);


    /** Актуальный Баланс */
    Route::get('/actual/balance/get', [
      BalanceController::class,
      'get'
    ]);

    /** Избранное */
    Route::get('/actual/favourites/list', [
        FavouriteController::class,
        'list'
    ]);
    Route::post('/actual/favourites/add', [
        FavouriteController::class,
        'add'
    ]);
    /** для удаления из избранного в дашборде */
    Route::get('/actual/favourites/remove/{id}', [
        FavouriteController::class,
        'remove'
    ]);
    Route::get('/actual/favourites/events', [
        FavouriteController::class,
        'events'
    ]);


    /* История транзакций */
    Route::get('/actual/transactions/list', [
      TransactionsController::class,
      'list'
    ]);

    /* Промо коды */
    Route::post('/actual/promo-code/submit', [
      PromoCodesController::class,
      'submit'
    ]);
    Route::get('/actual/promo-code/status/{code}', [
      PromoCodesController::class,
      'status'
    ]);

    /* Пополнение баланса */
    Route::post('/actual/adding-funds/new-payment', [
      AddingFundsController::class,
      'newTransaction'
    ]);
    Route::get('/actual/adding-funds/coins/list', [
        AddingFundsController::class,
        'coins_list'
    ]);
    Route::get('/actual/adding-funds/coins/price/{code}', [
        AddingFundsController::class,
        'coin_price'
    ]);

    /* Вывод средств */
    Route::get('/actual/withdraw-funds/check', [
        WithdrawFundsController::class,
        'check'
    ]);
    Route::post('/actual/withdraw-funds/new', [
      WithdrawFundsController::class,
      'new'
    ])->middleware(['new_withdraw']);

    /*** Результаты игр для конкретного пользователя ***/
    Route::get('/actual/user-results/list', [
      UserResultsController::class,
      'list'
    ]);
});

/* Виды спорта */
Route::get('/actual/sport/list', [
  SportController::class,
  'list'
]);
Route::get('/actual/sport/live/list', [
  SportController::class,
  'live'
]);

Route::get('/actual/sport/{sport}/categories/list', [
    SportController::class,
    'listWithCategoriesAndTournaments'
]);

/* События */
Route::get('/actual/events/get/{id}', [
  EventController::class,
  'get'
]);
Route::get('/actual/events/esports', [
    EventController::class,
    'getActiveEsports'
]);
Route::get('/actual/events/{sport}/{category}/{tournament}/list', [
    EventController::class,
    'listByCategoriesAndTournaments'
]);

Route::post('/actual/search/events', [SearchController::class, 'index']);

Route::get('/actual/search/default', [SearchController::class, 'getDefaultResult']);

Route::post('/actual/search/list', [SearchController::class, 'getSearchVariants']);

Route::get('/actual/category/list', [
  PostsController::class,
  'list'
]);

Route::get('/actual/category/get/{slug}', [
  PostsController::class,
  'get'
]);

Route::get('/actual/results/sport/{slug}', [ResultsController::class, 'bySport']);

Route::post('/wallet/submit', [UserController::class, 'addWallet']);

/** добавление емейла для зарегестрированного через metamask */
Route::post('/add-email', [UserController::class, 'addEmail']);
Route::get('/verify-email/{id}/{hash}', [UserController::class, 'verifyEmail'])->name('verify');
Route::post('/verify-email', [UserController::class, 'sendVerificationEmail']);

Route::post('/calendar/events', [CalendarController::class, 'getAllEventsByDate']);
Route::post('/deposit/accept', [BalanceController::class, 'sendDepositRequest']);
Route::post('/deposit/swap/accept', [BalanceController::class, 'sendSwapDepositRequest']);
Route::get('/deposit/system', [BalanceController::class, 'getSystemWallets']);

/** Auth */
Route::middleware('auth:sanctum')->group(function () {
    Route::patch('/profile', ProfileController::class);
//    Route::patch('/password', PasswordController::class);
    Route::get('/user', UserController::class);
    Route::post('/logout', [AuthController::class, 'logout']);

    /** Admin panel */
    Route::middleware('is_admin')->group(function () {
        Route::resource('/admin-props', ActualAdminPropsController::class);
        Route::resource('/promo-code', PromoCodeAdminController::class);

        Route::get('/actual/panel/statistics/registration', [
            StatisticsController::class,
            'get_stats_registration_user'
        ]);

        Route::get('/actual/panel/statistics', [
            StatisticsController::class,
            'stats'
        ]);
        Route::get('/actual/panel/statistics-promocodes', [
            StatisticsController::class,
            'get_stats_promocodes'
        ]);
        Route::get('/actual/panel/statistics-used-promocodes/{id}', [
            StatisticsController::class,
            'get_stats_used_promocode'
        ]);
        Route::post('/actual/panel/statistics-promocodes-date-range', [
            StatisticsController::class,
            'get_stats_promocodes_date_range'
        ]);
        Route::get('/actual/panel/statistics-users-rating', [
            StatisticsController::class,
            'get_users_rating'
        ]);

        Route::get('/actual/panel/statistics/win', [
            StatisticsController::class,
            'stats_win'
        ]);

        Route::get('/actual/panel/statistics/loss', [
            StatisticsController::class,
            'stats_loss'
        ]);

        Route::get('/actual/panel/statistics/user-detail/{id}', [
            StatisticsController::class,
            'getStatsDetailUser'
        ]);

//        Route::get('/actual/panel/statistics/user/{id}/bet', [
//            StatisticsController::class,
//            'get_stats_bet_user'
//        ]);
//
//        Route::get('/actual/panel/statistics/user/{id}/win', [
//            StatisticsController::class,
//            'get_stats_win_user'
//        ]);
//
//        Route::get('/actual/panel/statistics/user/{id}/loss', [
//            StatisticsController::class,
//            'get_stats_loss_user'
//        ]);
//
//        Route::get('/actual/panel/statistics/user/{id}/withdrawal', [
//            StatisticsController::class,
//            'get_stats_withdrawal_funds_user'
//        ]);

        Route::get('/actual/panel/statistics/user/bet', [
            StatisticsController::class,
            'stats_bet_active_user'
        ]);

        Route::get('/actual/panel/statistics/bets', [
            StatisticsController::class,
            'get_stats_bet_all'
        ]);

        Route::get('/actual/panel/statistics/withdrawal', [
            StatisticsController::class,
            'get_stats_withdrawal_funds'
        ]);

        Route::get('/actual/panel/statistics/tokens', [
            StatisticsController::class,
            'get_stats_tokens'
        ]);

//        Route::get('/actual/panel/replenishment/list', [
//            ReplenishmentController::class,
//            'list'
//        ]);
//        Route::post('/actual/panel/replenishment/accept/{id}', [
//            ReplenishmentController::class,
//            'accept'
//        ]);

        Route::get('/actual/panel/withdraw/list', [
            WithdrawController::class,
            'list'
        ]);
        Route::post('/actual/panel/withdraw/submit/{id}', [
            WithdrawController::class,
            'submit'
        ]);
    });
});
