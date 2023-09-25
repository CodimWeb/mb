<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminPropsSeeder extends Seeder
{
    public function run()
    {
        if (empty(DB::table('actual_admin_props')->count())) {
            DB::table('actual_admin_props')->insert(['key' => 'hidden_sports', 'value' => '742,749,752,755,756,757']);
            DB::table('actual_admin_props')->insert(['key' => 'min_bet', 'value' => 200]);
            DB::table('actual_admin_props')->insert(['slug' => 'min_withdraw', 'value' => 200]);
            DB::table('actual_admin_props')->insert(['slug' => 'max_withdraw', 'value' => 1000]);
            DB::table('actual_admin_props')->insert(['slug' => 'withdraw_hourly', 'value' => 1]);
            DB::table('actual_admin_props')->insert(['slug' => 'withdraw_daily', 'value' => 0]);
        } else {
            if (!DB::table('actual_admin_props')->where('key', 'hidden_sports')->first()) {
                DB::table('actual_admin_props')->insert(['key' => 'hidden_sports', 'value' => '742,749,752,755,756,757']);
            }

            if (!DB::table('actual_admin_props')->where('key', 'min_bet')->first()) {
                DB::table('actual_admin_props')->insert(['key' => 'min_bet', 'value' => 200]);
            }

            if (!DB::table('actual_admin_props')->where('key', 'min_withdraw')->first()) {
                DB::table('actual_admin_props')->insert(['key' => 'min_withdraw', 'value' => 200]);
            }

            if (!DB::table('actual_admin_props')->where('key', 'max_withdraw')->first()) {
                DB::table('actual_admin_props')->insert(['key' => 'max_withdraw', 'value' => 1000]);
            }

            if (!DB::table('actual_admin_props')->where('key', 'withdraw_hourly')->first()) {
                DB::table('actual_admin_props')->insert(['key' => 'withdraw_hourly', 'value' => 1]);
            }

            if (!DB::table('actual_admin_props')->where('key', 'withdraw_daily')->first()) {
                DB::table('actual_admin_props')->insert(['key' => 'withdraw_daily', 'value' => 0]);
            }
        }
    }
}