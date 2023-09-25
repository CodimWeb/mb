<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sport_american_football', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_period2')->nullable();
            $table->smallInteger('home_period3')->nullable();
            $table->smallInteger('home_period4')->nullable();
            $table->smallInteger('home_normaltime')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_period2')->nullable();
            $table->smallInteger('away_period3')->nullable();
            $table->smallInteger('away_period4')->nullable();
            $table->smallInteger('away_normaltime')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_badminton', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
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

        Schema::create('sport_bandy', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
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

        Schema::create('sport_baseball', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_period2')->nullable();
            $table->smallInteger('home_period3')->nullable();
            $table->smallInteger('home_period4')->nullable();
            $table->smallInteger('home_period5')->nullable();
            $table->smallInteger('home_period6')->nullable();
            $table->smallInteger('home_period7')->nullable();
            $table->smallInteger('home_period8')->nullable();
            $table->smallInteger('home_period9')->nullable();
            $table->smallInteger('home_normaltime')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_period2')->nullable();
            $table->smallInteger('away_period3')->nullable();
            $table->smallInteger('away_period4')->nullable();
            $table->smallInteger('away_period5')->nullable();
            $table->smallInteger('away_period6')->nullable();
            $table->smallInteger('away_period7')->nullable();
            $table->smallInteger('away_period8')->nullable();
            $table->smallInteger('away_period9')->nullable();
            $table->smallInteger('away_normaltime')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_basketball', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_period2')->nullable();
            $table->smallInteger('home_period3')->nullable();
            $table->smallInteger('home_period4')->nullable();
            $table->smallInteger('home_normaltime')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_period2')->nullable();
            $table->smallInteger('away_period3')->nullable();
            $table->smallInteger('away_period4')->nullable();
            $table->smallInteger('away_normaltime')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_beach_volley', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
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

        Schema::create('sport_cricket', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_inning1')->nullable();
            $table->smallInteger('home_inning2')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_inning1')->nullable();
            $table->smallInteger('away_inning2')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_darts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_e_sports', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_period2')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_period2')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_floorball', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_period2')->nullable();
            $table->smallInteger('home_period3')->nullable();
            $table->smallInteger('home_normaltime')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_period2')->nullable();
            $table->smallInteger('away_period3')->nullable();
            $table->smallInteger('away_normaltime')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_football', function (Blueprint $table) {
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

        Schema::create('sport_futsal', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
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

        Schema::create('sport_handball', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
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

        Schema::create('sport_ice_hockey', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_period2')->nullable();
            $table->smallInteger('home_period3')->nullable();
            $table->smallInteger('home_normaltime')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_period2')->nullable();
            $table->smallInteger('away_period3')->nullable();
            $table->smallInteger('away_normaltime')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_rugby', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
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

        Schema::create('sport_snooker', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_normaltime')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_normaltime')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_table_tennis', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_period2')->nullable();
            $table->smallInteger('home_period3')->nullable();
            $table->smallInteger('home_period4')->nullable();
            $table->smallInteger('home_period5')->nullable();
            $table->smallInteger('home_period6')->nullable();
            $table->smallInteger('home_period7')->nullable();
            $table->smallInteger('home_normaltime')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_period2')->nullable();
            $table->smallInteger('away_period3')->nullable();
            $table->smallInteger('away_period4')->nullable();
            $table->smallInteger('away_period5')->nullable();
            $table->smallInteger('away_period6')->nullable();
            $table->smallInteger('away_period7')->nullable();
            $table->smallInteger('away_normaltime')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_tennis', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_period2')->nullable();
            $table->smallInteger('home_period1_tiebreak')->nullable();
            $table->smallInteger('home_period2_tiebreak')->nullable();
            $table->smallInteger('home_normaltime')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_period2')->nullable();
            $table->smallInteger('away_period1_tiebreak')->nullable();
            $table->smallInteger('away_period2_tiebreak')->nullable();
            $table->smallInteger('away_normaltime')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_volleyball', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_period2')->nullable();
            $table->smallInteger('home_period3')->nullable();
            $table->smallInteger('home_period4')->nullable();
            $table->smallInteger('home_period5')->nullable();
            $table->smallInteger('home_normaltime')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_period2')->nullable();
            $table->smallInteger('away_period3')->nullable();
            $table->smallInteger('away_period4')->nullable();
            $table->smallInteger('away_period5')->nullable();
            $table->smallInteger('away_normaltime')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });

        Schema::create('sport_waterpolo', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('os_sports_id', 30)->unique('football_os_sports_unique');
            $table->string('status', 30)->nullable();
            $table->smallInteger('home_current')->nullable();
            $table->smallInteger('home_period1')->nullable();
            $table->smallInteger('home_period2')->nullable();
            $table->smallInteger('home_period3')->nullable();
            $table->smallInteger('home_period4')->nullable();
            $table->smallInteger('home_normaltime')->nullable();
            $table->smallInteger('away_current')->nullable();
            $table->smallInteger('away_period1')->nullable();
            $table->smallInteger('away_period2')->nullable();
            $table->smallInteger('away_period3')->nullable();
            $table->smallInteger('away_period4')->nullable();
            $table->smallInteger('away_normaltime')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sport_waterpolo');

        Schema::dropIfExists('sport_volleyball');

        Schema::dropIfExists('sport_tennis');

        Schema::dropIfExists('sport_table_tennis');

        Schema::dropIfExists('sport_snooker');

        Schema::dropIfExists('sport_rugby');

        Schema::dropIfExists('sport_ice_hockey');

        Schema::dropIfExists('sport_handball');

        Schema::dropIfExists('sport_futsal');

        Schema::dropIfExists('sport_football');

        Schema::dropIfExists('sport_floorball');

        Schema::dropIfExists('sport_e_sports');

        Schema::dropIfExists('sport_darts');

        Schema::dropIfExists('sport_cricket');

        Schema::dropIfExists('sport_beach_volley');

        Schema::dropIfExists('sport_basketball');

        Schema::dropIfExists('sport_baseball');

        Schema::dropIfExists('sport_bandy');

        Schema::dropIfExists('sport_badminton');

        Schema::dropIfExists('sport_american_football');
    }
};
