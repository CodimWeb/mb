<?php

namespace App\Services;

use App\Models\ActualSport;
use App\Models\ActualAdminProp;
use App\Models\ActualTournaments;
use Illuminate\Support\Facades\DB;

class SportService
{
    public function getActualSports(): array
    {
        $data = [];
        $excludedSportIds = ActualAdminProp::where('key', ActualAdminProp::HIDDEN_SPORTS_KEY)->first()?->value;
        $excludedSportIds = array_map('trim', explode(',', $excludedSportIds));
        $actualSports = ActualSport::whereNotIn('id', $excludedSportIds)->get();
        $tournamentsCountBySport = ActualTournaments::select([
            DB::raw('count(id) as count'),
            'sport'
        ])
            ->where('active', true)
            ->groupBy('sport')
            ->get();

        foreach ($actualSports as $actualSport) {
            if ($tournamentsCountBySport->where('sport', $actualSport->id)->all()) {
                $data[] = $actualSport;
            }
        }

        return $data;
    }

    public function getActiveWithSportAndCategories(string $sportSlug): array
    {
        $sportId = ActualSport::whereSlug($sportSlug)->first()?->id;
        $allData = DB::select(
            '
                    select
                      asp.id as sport_id,
                      asp.name as sport_name,
                      asp.slug as sport_slug,
                      tournament_id,
                      tournament_slug,
                      tournament_name,
                      tournament_category,
                      tournament_sport,
                      tournament_events_count
                    from
                    (  select
                        t.id         as tournament_id,
                        t.slug       as tournament_slug,
                        t.name       as tournament_name,
                        t.category   as tournament_category,
                        t.sport      as tournament_sport,
                        count(ae.id) as tournament_events_count
                      from actual_events ae
                      join actual_tournaments t
                        on  t.id = ae.tournament
                        and t.sport = ?
                      where t.active  = 1
                      group by t.id, t.slug, t.name, t.category, t.sport
                      having tournament_events_count > 0
                    ) tt
                    left join actual_sports asp on tt.tournament_sport = asp.id
                    join actual_countries ac
                      ON tt.tournament_category = ac.title_en
                    order by tournament_category
            ',
            [$sportId]
        );

        $result = [];
        foreach ($allData as $item) {
            if (empty($result[$item->tournament_category])) {
                $result[$item->tournament_category] = [
                    'tournament_category' => $item->tournament_category,
                    'sport_name' => $item->sport_name,
                    'sport_slug' => $item->sport_slug,
                    'sport_id' => $item->sport_id,
                ];
            }

            if (empty($result[$item->tournament_category]['total_events_count'])) {
                $result[$item->tournament_category]['total_events_count'] = 0;
            }

            $result[$item->tournament_category]['total_events_count'] += $item->tournament_events_count;

            if (empty($result[$item->tournament_category]['tournaments'])) {
                $result[$item->tournament_category]['tournaments'] = [];
            }

            $result[$item->tournament_category]['tournaments'][] = [
                'id' => $item->tournament_id,
                'name' => $item->tournament_name,
                'slug' => $item->tournament_slug,
                'category' => $item->tournament_category,
                'sport' => $item->tournament_sport,
                'events_count' => $item->tournament_events_count,
            ];
        }

        return $result;
    }
}
