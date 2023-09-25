<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actual_balances', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user')->index();
            $table->double('display_balance')->default(0);
            $table->double('real_balance')->default(0);
            $table->timestamps();
        });

        Schema::create('actual_bets', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user');
            $table->unsignedBigInteger('event');
            $table->unsignedBigInteger('odd_id');
            $table->integer('choice');
            $table->double('odd');
            $table->boolean('win')->nullable();
            $table->boolean('calculated')->default(false);
            $table->timestamps();
        });

        Schema::create('actual_countries', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('title_ru');
            $table->string('title_en');
            $table->timestamps();
        });

        Schema::create('actual_coupons', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user');
            $table->unsignedBigInteger('event');
            $table->unsignedBigInteger('odd_id');
            $table->integer('choice');
            $table->double('chance');
            $table->timestamps();
        });

        Schema::create('actual_events', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique();
            $table->unsignedBigInteger('tournament');
            $table->unsignedBigInteger('team_home');
            $table->unsignedBigInteger('team_away');
            $table->string('score_home', 30)->nullable();
            $table->string('score_away', 30)->nullable();
            $table->smallInteger('winner')->nullable();
            $table->tinyInteger('active')->nullable();
            $table->tinyInteger('is_live')->nullable();
            $table->dateTime('start');
            $table->unsignedBigInteger('start_stamp');
            $table->string('status', 30);
            $table->string('api', 5)->nullable();
            $table->smallInteger('sport_id_our');
            $table->string('referee', 100)->nullable();
            $table->string('location', 100)->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();

            $table->index(['start_stamp', 'winner', 'is_live', 'active']);
            $table->index(['team_home', 'team_away', 'winner', 'active']);
        });

        Schema::create('actual_favourites', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user');
            $table->unsignedBigInteger('event');
        });

        Schema::create('actual_languages', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('slug');
            $table->string('title');
            $table->timestamps();
        });

        Schema::create('actual_lineup', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30);
            $table->string('player_id', 30)->nullable();
            $table->string('team', 4)->nullable();
            $table->string('team_os_id', 30)->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
            $table->tinyInteger('substitute')->nullable();

            $table->unique(['os_sports_id', 'player_id']);
        });

        Schema::create('actual_odds', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('event')->index();
            $table->string('os_sports_id', 30)->unique();
            $table->string('market_name', 30)->nullable();
            $table->float('choice_home', 10, 0)->nullable();
            $table->float('choice_away', 10, 0)->nullable();
            $table->float('choice_draw', 10, 0)->nullable();
            $table->boolean('winner')->nullable();
            $table->string('api', 5)->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('actual_payments', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('transaction');
            $table->string('tx_hash')->nullable();
            $table->boolean('status')->default(false);
            $table->timestamps();
        });

        Schema::create('actual_players', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('team_id');
            $table->string('os_sports_id', 30)->unique();
            $table->string('name', 55);
            $table->string('position', 55)->nullable();
            $table->integer('jerseyNumber')->nullable();
            $table->string('manager', 55)->nullable();
            $table->string('country', 55)->nullable();
            $table->boolean('active')->default(false);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('actual_post_categories', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('slug');
            $table->timestamps();
        });

        Schema::create('actual_posts', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('language');
            $table->unsignedBigInteger('category');
            $table->string('slug');
            $table->string('title');
            $table->string('excerpt');
            $table->longText('content');
            $table->timestamps();
        });

        Schema::create('actual_promo_codes', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('code');
            $table->double('sum');
            $table->boolean('is_personal')->default(false);
            $table->unsignedBigInteger('user')->nullable();
            $table->boolean('active')->default(true);
            $table->timestamps();
        });

        Schema::create('actual_promo_codes_histories', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user');
            $table->unsignedBigInteger('code');
            $table->timestamps();
        });

        Schema::create('actual_sports', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->bigInteger('os_sports_id')->unique();
            $table->string('name');
            $table->string('slug');
            $table->string('icon')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('actual_teams', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30);
            $table->string('name');
            $table->string('slug');
            $table->string('short-name')->nullable();
            $table->string('gender')->nullable();
            $table->string('logo')->nullable();
            $table->unsignedBigInteger('sport')->nullable();
            $table->string('country', 55)->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
            $table->string('city', 100)->nullable();
            $table->string('stadium', 100)->nullable();
        });

        Schema::create('actual_tournaments', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique();
            $table->string('category', 100)->nullable();
            $table->unsignedBigInteger('sport');
            $table->string('name', 200)->nullable();
            $table->string('slug', 200)->nullable();
            $table->boolean('active')->default(false)->index();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('actual_transactions_histories', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user')->index();
            $table->integer('type');
            $table->unsignedBigInteger('currency_from');
            $table->unsignedBigInteger('currency_to');
            $table->double('sum_from')->default(0);
            $table->double('sum_to')->default(0);
            $table->string('rate')->nullable();
            $table->integer('status')->default(0);
            $table->timestamps();
        });

        Schema::create('actual_user_line_rels', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user');
            $table->unsignedBigInteger('line');
            $table->unsignedBigInteger('bet');
            $table->timestamps();
        });

        Schema::create('actual_user_lines', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user');
            $table->double('sum');
            $table->boolean('calculated')->default(false);
            $table->timestamps();
        });

        Schema::create('actual_withdraw_funds', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user');
            $table->unsignedBigInteger('transaction');
            $table->double('sum');
            $table->string('wallet');
            $table->integer('status');
            $table->timestamps();
        });

        Schema::create('failed_jobs', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('uuid')->unique();
            $table->text('connection');
            $table->text('queue');
            $table->longText('payload');
            $table->longText('exception');
            $table->timestamp('failed_at')->useCurrent();
        });

        Schema::create('fottball', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('fottball_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_period2')->nullable();
            $table->smallInteger('home_normaltime')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_period2')->nullable();
            $table->smallInteger('away_normaltime')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('jobs', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('queue')->index();
            $table->longText('payload');
            $table->unsignedTinyInteger('attempts');
            $table->unsignedInteger('reserved_at')->nullable();
            $table->unsignedInteger('available_at');
            $table->unsignedInteger('created_at');
        });

        Schema::create('password_resets', function (Blueprint $table) {
            $table->comment('');
            $table->string('email')->index();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('users', function (Blueprint $table) {
            $table->comment('');
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('wallet')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');

        Schema::dropIfExists('password_resets');

        Schema::dropIfExists('jobs');

        Schema::dropIfExists('fottball');

        Schema::dropIfExists('failed_jobs');

        Schema::dropIfExists('actual_withdraw_funds');

        Schema::dropIfExists('actual_user_lines');

        Schema::dropIfExists('actual_user_line_rels');

        Schema::dropIfExists('actual_transactions_histories');

        Schema::dropIfExists('actual_tournaments');

        Schema::dropIfExists('actual_teams');

        Schema::dropIfExists('actual_sports');

        Schema::dropIfExists('actual_promo_codes_histories');

        Schema::dropIfExists('actual_promo_codes');

        Schema::dropIfExists('actual_posts');

        Schema::dropIfExists('actual_post_categories');

        Schema::dropIfExists('actual_players');

        Schema::dropIfExists('actual_payments');

        Schema::dropIfExists('actual_odds');

        Schema::dropIfExists('actual_lineup');

        Schema::dropIfExists('actual_languages');

        Schema::dropIfExists('actual_favourites');

        Schema::dropIfExists('actual_events');

        Schema::dropIfExists('actual_coupons');

        Schema::dropIfExists('actual_countries');

        Schema::dropIfExists('actual_bets');

        Schema::dropIfExists('actual_balances');
    }
};
