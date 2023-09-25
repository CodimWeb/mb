<?php

namespace App\Http\Controllers\Panel;

use App\Models\ActualBet;
use App\Models\ActualPromoCodes;
use App\Models\ActualPromoCodesHistory;
use App\Models\ActualSwap;
use App\Models\ActualTransactionsHistory;
use App\Models\ActualWithdrawFunds;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{
    public function stats(Request $request): JsonResponse
    {
        /*  total number for all time  */
        $total_count = [
            'users_total' => User::count(),
            'users_active' => User::with('balance')
                ->get()
                ?->where('balance.real_balance', '>', 0)
                ->count(),
        ];

        return response()->json(['total_count' => $total_count], 200);
    }

    public function get_stats_registration_user(): JsonResponse
    {
        /* quantity of registrations users by day */
        $output_day = User::select(DB::raw("count(*) as count_users, date_format(created_at, '%d-%m-%Y') as day, UNIX_TIMESTAMP(STR_TO_DATE(date_format(created_at, '%d-%m-%Y'), '%d-%m-%Y')) as timestamp"))
            ->groupBy('day', 'timestamp')
            ->orderBy('timestamp', 'DESC')
            ->limit(30)
            ->get()
            ->toArray();
        $output_day = array_reverse($output_day);

        /* quantity of registrations users by month */
        $output_month = User::select(DB::raw("count(*) as count_users, date_format(created_at, '%m-%Y') as month, UNIX_TIMESTAMP(STR_TO_DATE(date_format(created_at, '%m-%Y'), '%m-%Y')) as timestamp"))
            ->groupBy('month', 'timestamp')
            ->orderBy('timestamp', 'DESC')
            ->limit(15)
            ->get()
            ->toArray();

        return response()->json([
            "userPerDay" => $output_day,
            "userPerMonth" => $output_month
        ], 200);

    }

    public function stats_bet_active_user(): JsonResponse
    {
        /* The number of active users (who have made more than 1 bet during the whole time) **/
        $users = User::withCount('bets')
            ->having('bets_count', '>', 1)
            ->get();

        return response()->json(['users_count'=>$users->count()], 200);
    }

    public function get_stats_bet_all(): JsonResponse
    {
        /* total of bids for all period **/
        $bet_total = DB::table('actual_bets')->count();

        /* total of bids for day **/
        $bet_total_day = DB::table('actual_bets')
            ->select(DB::raw('DATE_FORMAT(created_at, "%d-%m-%Y") as date, COUNT(*) as total_bets'))
            ->groupBy('date')
            ->get()
            ->toArray();
        if(count($bet_total_day) > 30 ) {
            $bet_total_day = array_slice($bet_total_day, -30);
        }

        /* total of bids for week **/
        $bet_total_week = DB::table('actual_bets')
            ->select(DB::raw('YEAR(created_at) as year, WEEK(created_at) as week, COUNT(id) as total_bets'))
            ->groupBy('year', 'week')
            ->get()
            ->toArray();

        if(count($bet_total_week) > 15 ) {
            $bet_total_week = array_slice($bet_total_week, -15);
        }

        /* total of bids for month **/
        $bet_total_month = DB::table('actual_bets')
            ->select(DB::raw('YEAR(created_at) as year,DATE_FORMAT(created_at, "%m" ) as month, COUNT(id) as total_bets'))
            ->groupBy( 'year','month')
            ->get()
            ->toArray();

        if(count($bet_total_month) > 15 ) {
            $bet_total_month = array_slice($bet_total_month, -15);
        }

        return response()->json([
            'totalBets'       => $bet_total,
            'totalBetsDay'  => $bet_total_day,
            'totalBetsWeek'  => $bet_total_week,
            'totalBetsMonth' => $bet_total_month,
        ], 200);
    }

    public function stats_win(): JsonResponse
    {
        [$win_total, $win_total_day, $win_total_week, $win_total_month] = $this->betResultsStats(win: 1);

        return response()->json([
            'totalWins'      => $win_total,
            'totalWinsDay'   => $win_total_day,
            'totalWinsWeek'  => $win_total_week,
            'totalWinsMonth' => $win_total_month,
        ], 200);
    }

    public function stats_loss(): JsonResponse
    {
        [$loss_total, $loss_total_day, $loss_total_week, $loss_total_month] = $this->betResultsStats(win: 0);

        return response()->json([
            'totalLoss'      => $loss_total,
            'totalLossDay'   => $loss_total_day,
            'totalLossWeek'  => $loss_total_week,
            'totalLossMonth' => $loss_total_month,
        ], 200);

    }

    private function betResultsStats($win = 1): array
    {
        return [
            DB::table('actual_bets AS ab')
                ->join('actual_user_line_rels AS aulr', 'ab.id', '=', 'aulr.bet')
                ->leftJoin('actual_user_lines AS aul', 'aulr.line', '=', 'aul.id')
                ->where('ab.win', '=', $win)
                ->sum(DB::raw('(ab.odd - 1) * aul.sum')),

            DB::table('actual_bets AS ab')
            ->select([
                DB::raw('ROUND(SUM((ab.odd - 1) * aul.sum)) AS total_sum'),
                DB::raw('cast(aul.updated_at as date) AS date')
            ])
            ->join('actual_user_line_rels AS aulr', 'ab.id', '=', 'aulr.bet')
            ->leftJoin('actual_user_lines AS aul', 'aulr.line', '=', 'aul.id')
            ->where('ab.win', '=', $win)
            ->groupBy('date')
            ->get()
            ->toArray(),

        DB::table('actual_bets AS ab')
            ->select([
                DB::raw('ROUND(SUM((ab.odd - 1) * aul.sum)) AS total_sum'),
                DB::raw('WEEK(aul.updated_at) AS week'),
                DB::raw('YEAR(aul.updated_at) AS year'),
            ])
            ->join('actual_user_line_rels AS aulr', 'ab.id', '=', 'aulr.bet')
            ->leftJoin('actual_user_lines AS aul', 'aulr.line', '=', 'aul.id')
            ->where('ab.win', '=', $win)
            ->groupBy(['week', 'year'])
            ->get()
            ->toArray(),

        DB::table('actual_bets AS ab')
            ->select([
                DB::raw('ROUND(SUM((ab.odd - 1) * aul.sum)) AS total_sum'),
                DB::raw('MONTH(aul.updated_at) AS month'),
                DB::raw('YEAR(aul.updated_at) AS year'),
            ])
            ->join('actual_user_line_rels AS aulr', 'ab.id', '=', 'aulr.bet')
            ->leftJoin('actual_user_lines AS aul', 'aulr.line', '=', 'aul.id')
            ->where('ab.win', '=', $win)
            ->groupBy(['month', 'year'])
            ->get()
            ->toArray(),
        ];
    }

    /*  User statistic   **/
    public function get_stats_bet_user($user_id): JsonResponse
    {
        $user = User::findOrFail($user_id);

        /* quantity of all bids user **/
        $count_all = $user->bets;

        /* The quantity of user bids days **/
        $count_day = DB::table('actual_bets')
            ->select(DB::raw('DATE_FORMAT(created_at, "%d-%m-%Y") as date, COUNT(*) as total_bets'))
            ->where('user', $user_id)
            ->groupBy('date')
            ->get();

        /* The quantity of user bids for week **/
        $count_week = DB::table('actual_bets')
            ->select(DB::raw('YEAR(created_at) as year, WEEK(created_at) as week, COUNT(id) as total_bets'))
            ->where('user', $user_id)
            ->groupBy('year', 'week')
            ->get();

        /* The quantity of user for month **/
        $count_month = DB::table('actual_bets')
            ->select(DB::raw('YEAR(created_at) as year, DATE_FORMAT(created_at, "%M" ) as month, COUNT(id) as total_bets'))
            ->where('user', $user_id)
            ->groupBy('year', 'month')
            ->get();

        return response()->json([
            'quantity of user bids all'    => $count_all->count(),
            'quantity of user bids days'   => $count_day,
            'quantity of user bids  weeks' => $count_week,
            'quantity of user bids  month' => $count_month,
        ], 200);
    }

    public function get_stats_win_user($user_id): JsonResponse
    {
        /* The total amount won user */
        $total_win_user = DB::table(function ($subquery) use ($user_id){
            $subquery->select(
                'actual_user_line_rels.line',
                DB::raw('sum(actual_bets.odd * actual_user_lines.sum) as total_win_user')
            )
                ->from('actual_user_lines')
                ->join('actual_user_line_rels', 'actual_user_lines.id', '=', 'actual_user_line_rels.line')
                ->join('actual_bets', 'actual_user_line_rels.bet', '=', 'actual_bets.id')
                ->where('actual_user_lines.user', '=', $user_id)
                ->groupBy('actual_user_line_rels.line')
                ->havingRaw('min(actual_bets.win) = 1');
        }, 't')
            ->sum('t.total_win_user');

        return response()->json([
            'user won total amount' => $total_win_user,
        ], 200);
    }

    public function get_stats_loss_user($user_id): JsonResponse
    {
        /* Total loss amount user */
        $total_loss_user = DB::table(function ($subquery) use ($user_id){
            $subquery->select(
                'actual_user_line_rels.line',
                DB::raw('sum(actual_bets.odd * actual_user_lines.sum) as total_loss_user')
            )
                ->from('actual_user_lines')
                ->join('actual_user_line_rels', 'actual_user_lines.id', '=', 'actual_user_line_rels.line')
                ->join('actual_bets', 'actual_user_line_rels.bet', '=', 'actual_bets.id')
                ->where('actual_user_lines.user', '=', $user_id)
                ->groupBy('actual_user_line_rels.line')
                ->havingRaw('min(actual_bets.win) = 0');
        }, 't')
            ->sum('t.total_loss_user');

        return response()->json([
            'user los total amount' => $total_loss_user,
        ], 200);
    }

    public function get_stats_withdrawal_funds_user($user_id): JsonResponse
    {
        /* Total amount of the user's withdrawal  **/
        $withdrawal_funds_user = DB::table('actual_transactions_histories')
            ->select(DB::raw('SUM(sum_to - sum_from) as total_sum'), 'users.created_at as date_user_registration')
            ->join('users', 'users.id', '=', 'actual_transactions_histories.user')
            ->where('actual_transactions_histories.user', $user_id)
            ->where('actual_transactions_histories.type', 1)
            ->groupBy('users.created_at')
            ->first();

        return response()->json([
            'withdrawal amount user' => $withdrawal_funds_user,
        ], 200);

    }

    public function getStatsDetailUser($user_id)
    {
        $user = User::findOrFail($user_id);

        /* quantity of all bids user **/
        $count_all = $user->bets;

        /* The quantity of user bids days **/
        $count_day = DB::table('actual_bets')
            ->select(DB::raw('DATE_FORMAT(created_at, "%d-%m-%Y") as date, COUNT(*) as total_bets'))
            ->where('user', $user_id)
            ->groupBy('date')
            ->get()
            ->toArray();

        if(count($count_day) > 30 ) {
            $count_day = array_slice($count_day, -30);
        }

        /* The quantity of user bids for week **/
        $count_week = DB::table('actual_bets')
            ->select(DB::raw('YEAR(created_at) as year, WEEK(created_at) as week, COUNT(id) as total_bets'))
            ->where('user', $user_id)
            ->groupBy('year', 'week')
            ->get()
            ->toArray();

        if(count($count_week) > 15 ) {
            $count_week = array_slice($count_week, -15);
        }

        /* The quantity of user for month **/
        $count_month = DB::table('actual_bets')
            ->select(DB::raw('YEAR(created_at) as year, DATE_FORMAT(created_at, "%m" ) as month, COUNT(id) as total_bets'))
            ->where('user', $user_id)
            ->groupBy('year', 'month')
            ->get()
            ->toArray();

        if(count($count_month) > 15 ) {
            $count_month = array_slice($count_month, -15);
        }

        $total_win_user = DB::table(function ($subquery) use ($user_id){
            $subquery->select(
                'actual_user_line_rels.line',
                DB::raw('sum(actual_bets.odd * actual_user_lines.sum) as total_win_user')
            )
                ->from('actual_user_lines')
                ->join('actual_user_line_rels', 'actual_user_lines.id', '=', 'actual_user_line_rels.line')
                ->join('actual_bets', 'actual_user_line_rels.bet', '=', 'actual_bets.id')
                ->where('actual_user_lines.user', '=', $user_id)
                ->groupBy('actual_user_line_rels.line')
                ->havingRaw('min(actual_bets.win) = 1');
        }, 't')
            ->sum('t.total_win_user');

        $total_loss_user = DB::table(function ($subquery) use ($user_id){
            $subquery->select(
                'actual_user_line_rels.line',
                DB::raw('sum(actual_bets.odd * actual_user_lines.sum) as total_loss_user')
            )
                ->from('actual_user_lines')
                ->join('actual_user_line_rels', 'actual_user_lines.id', '=', 'actual_user_line_rels.line')
                ->join('actual_bets', 'actual_user_line_rels.bet', '=', 'actual_bets.id')
                ->where('actual_user_lines.user', '=', $user_id)
                ->groupBy('actual_user_line_rels.line')
                ->havingRaw('min(actual_bets.win) = 0');
        }, 't')
            ->sum('t.total_loss_user');

//        $withdrawal_funds_user = DB::table('actual_transactions_histories')
//            ->select(DB::raw('SUM(sum_to - sum_from) as total_sum'), 'users.created_at as date_user_registration')
//            ->join('users', 'users.id', '=', 'actual_transactions_histories.user')
//            ->where('actual_transactions_histories.user', $user_id)
//            ->where('actual_transactions_histories.type', 1)
//            ->groupBy('users.created_at')
//            ->first();

        $withdrawal_funds_user = User::select('created_at')
            ->where('id', $user_id)
            ->withCount(['withdraw as total_sum' => function($query) {
                $query->select(DB::raw('IFNULL(SUM(sum), 0)'))->where('status', '=', 1)->orWhere('status', '=', 2);
            }])
            ->get();

        return response()->json([
            'userBidAll'    => $count_all->count(),
            'userBidDay'   => $count_day,
            'userBidWeek' => $count_week,
            'userBidMonth' => $count_month,
            'userWonTotal' => $total_win_user,
            'userLossTotal' => $total_loss_user,
            'userWithdrawTotal' => $withdrawal_funds_user[0]->total_sum,
            'userDateRegistration' => $withdrawal_funds_user[0]->created_at->format('d.m.Y')
        ], 200);
    }

    public function get_stats_withdrawal_funds(): JsonResponse
    {
        /* Total withdrawal amount total **/
        $withdrawal_funds_all = ActualWithdrawFunds::where('status', '=', 1)->orWhere('status', '=', 2)->sum('sum');

        /* Total withdrawal amount by day **/
        $withdrawal_funds_day = ActualWithdrawFunds::select(
            DB::raw('DATE_FORMAT(created_at, "%d-%m-%Y") as date'),
            DB::raw('SUM(sum) as total'))
            ->where('status', '=', 1)
            ->orWhere('status', '=', 2)
            ->groupBy('date')
            ->get()
            ->toArray();

        if(count($withdrawal_funds_day) > 30 ) {
            $withdrawal_funds_day = array_slice($withdrawal_funds_day, -30);
        }

        /* Total withdrawal amount by week **/
        $withdrawal_funds_week = ActualWithdrawFunds::select(
            DB::raw('DATE_FORMAT(created_at, "%u-%Y") as week'),
            DB::raw('SUM(sum) as total'))
            ->where('status', '=', 1)
            ->orWhere('status', '=', 2)
            ->groupBy('week')
            ->get()
            ->toArray();

        if(count($withdrawal_funds_week) > 15 ) {
            $withdrawal_funds_week = array_slice($withdrawal_funds_week, -15);
        }

        /* Total withdrawal amount by month **/
        $withdrawal_funds_month = ActualWithdrawFunds::select(
            DB::raw('DATE_FORMAT(created_at, "%m-%Y") as month'),
            DB::raw('SUM(sum) as total'))
            ->where('status', '=', 1)
            ->orWhere('status', '=', 2)
            ->groupBy('month')
            ->get()
            ->toArray();

        if(count($withdrawal_funds_month) > 15 ) {
            $withdrawal_funds_month = array_slice($withdrawal_funds_month, -15);
        }

        return response()->json([
            'withdrawAll'   => $withdrawal_funds_all,
            'withdrawDay'   => $withdrawal_funds_day,
            'withdrawWeek'  => $withdrawal_funds_week,
            'withdrawMonth' => $withdrawal_funds_month,
        ], 200);

    }

    public function get_stats_promocodes(): JsonResponse
    {
        $promocodes = ActualPromoCodes::all('id', 'code');
        $quantityAll = ActualPromoCodesHistory::all()->count();

        $quantityToday = ActualPromoCodesHistory::whereDate('created_at', Carbon::today())->get()->count();

        $weekFrom = Carbon::today()->subDays(7);
        $weekTo = Carbon::today();
        $quantityWeek = ActualPromoCodesHistory::whereBetween('created_at', [$weekFrom, $weekTo])->get()->count();

        $monthFrom = Carbon::today()->subDays(30);
        $monthTo = Carbon::today();
        $quantityMonth = ActualPromoCodesHistory::whereBetween('created_at', [$monthFrom, $monthTo])->get()->count();

        /* total of promo_code for day **/
        $promocodesDay = DB::table('actual_promo_codes_histories')
            ->select(DB::raw("DATE_FORMAT(created_at, '%d-%m-%Y') as date, COUNT(*) as total_promo_code, UNIX_TIMESTAMP(STR_TO_DATE(date_format(created_at, '%d-%m-%Y'), '%d-%m-%Y')) as timestamp"))
            ->groupBy('date', 'timestamp')
            ->limit(30)
            ->orderBy('timestamp', 'DESC')
            ->get()
            ->toArray();

        $promocodesDay = array_reverse($promocodesDay);

        /* total of promo_code for week **/
        $promocodesWeek = DB::table('actual_promo_codes_histories')
            ->select(DB::raw("YEAR(created_at) as year, WEEK(created_at) as week, COUNT(id) as total_promo_code"))
            ->groupBy('year', 'week')
            ->orderBy('year', 'DESC')
            ->orderBy('week', 'DESC')
            ->limit(15)
            ->get()
            ->toArray();

        $promocodesWeek = array_reverse($promocodesWeek);

        /* total of promo_code for month **/
        $promocodesMonth = DB::table('actual_promo_codes_histories')
            ->select(DB::raw('YEAR(created_at) as year,DATE_FORMAT(created_at, "%m" ) as month, COUNT(id) as total_promo_code'))
            ->groupBy( 'year','month')
            ->orderBy('year', 'DESC')
            ->orderBy('month', 'DESC')
            ->limit(15)
            ->get()
            ->toArray();

        $promocodesMonth = array_reverse($promocodesMonth);

        return response()->json([
            'promocodes' => $promocodes,
            'quantityToday' => $quantityToday,
            'quantityWeek' => $quantityWeek,
            'quantityMonth' => $quantityMonth,
            'quantityAll' => $quantityAll,
            'promocodesDay' => $promocodesDay,
            'promocodesWeek' => $promocodesWeek,
            'promocodesMonth' => $promocodesMonth

        ], 200);
    }

    public function get_stats_promocodes_date_range(Request $request): JsonResponse
    {
        $dateFrom = $request->input('from');
        $dateTo = $request->input('to');
        return response()->json(ActualPromoCodesHistory::whereBetween('created_at', [$dateFrom, $dateTo])->get()->count());
    }

    public function get_stats_used_promocode(int $id): JsonResponse
    {
        $promocode = ActualPromoCodes::findOrFail($id);

//        $users = ActualPromoCodesHistory::where('code', $id)->get('user');

        $query = DB::table('actual_promo_codes_histories AS promo')
            ->select([
                'promo.user AS user_id',
                'promo.code AS promo_code',

                'users.wallet AS wallet'
            ])
            ->join('users AS users', 'promo.user', '=', 'users.id')
            ->where('promo.code', '=', $id);

        $users = $query->get();

        return response()->json([
            'promocode' => $promocode,
            'users' => $users
        ], 200);
    }

    public function get_users_rating() {
        $result = User::select('id', 'wallet')
            ->withCount([
                'betsCount as betsWinCount' => function(Builder $query) {
                    $query->where('win', '=', 1);
                },
                'betsCount as betsLoseCount' => function(Builder $query) {
                    $query->where('win', '=', 0);
                },
            ])
            ->withCount(['withdraw as withdrawSum' => function($query) {
                $query->select(DB::raw('IFNULL(SUM(sum), 0)'))->where('status', '=', 1)->orWhere('status', '=', 2);
            }])
            ->withCount(['lines as betSum' => function($query) {
                $query->select(DB::raw('IFNULL(SUM(sum), 0)'));
            }])
            ->orderBy('betSum', 'DESC')
            ->paginate(20);

        return response()->json($result);
    }

    public function get_stats_tokens(): JsonResponse
    {
        $sum_from = ActualTransactionsHistory::where([
            ['type', '=', 0],
            ['status', '=', 1]
        ])->sum('sum_from');

        $sum_to = ActualTransactionsHistory::where([
            ['type', '=', 0],
            ['status', '=', 1]
        ])->sum('sum_to');

        $maranFromSite = $sum_to - $sum_from;
        $maranFromSwap = ActualSwap::sum('amount_maran');
        $maranAll = $maranFromSite + $maranFromSwap;
        $usdtSum = ActualSwap::where('code', 'USDT')->sum('amount');
        $linkSum = ActualSwap::where('code', 'LINK')->sum('amount');
        $ethSum = ActualSwap::where('code', 'ETH')->sum('amount');
        $uniSum = ActualSwap::where('code', 'UNI')->sum('amount');
        $ftmSum = ActualSwap::where('code', 'FTM')->sum('amount');

        return response()->json([
            'maranFromSite' => $maranFromSite,
            'maranFromSwap' => $maranFromSwap,
            'maranAll' => $maranAll,
            'usdtSum' => $usdtSum,
            'linkSum' => $linkSum,
            'ethSum' => $ethSum,
            'uniSum' => $uniSum,
            'ftmSum' => $ftmSum,
        ], 200);
    }
}
