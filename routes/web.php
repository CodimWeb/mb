<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web3LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/web3-login-message', [Web3LoginController::class, 'message']);
Route::post('/web3-login-verify', [Web3LoginController::class, 'verify']);

Route::get('{path}', function () {
    return view('app');
})->where('path', '.*');
