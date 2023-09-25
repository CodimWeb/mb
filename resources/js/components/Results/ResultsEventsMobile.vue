<template>
  <div class="flex-column results-page-events">
    <h1 class="h3_semibold results-page__heading" v-text="$t('Results')"/>

    <div class="flex-column results-page-events__list" v-if="getActualResults && getActualResults.length">
      <div
          class="flex-column results-page-events__sport"
          v-for="data in getActualResults"
      >
        <div class="flex-row t1_medium results-page-events__sport-header">
          <span :class="'betting-categories__icon ' + data.sport.icon"/>
          {{ $t(data.sport.name) }}
        </div>
        <div v-if="data.tournaments && data.tournaments.length">
          <div
              class="flex-column results-page-events__sport-category"
              v-for="single_tournament in data.tournaments"
              :key="'single_tournament_' + single_tournament.id"
          >
            <div class="flex-row t2_medium results-page-events__event-heading" v-text="single_tournament.name"/>
            <div
                class="flex-column results-page-events__event-list"
                v-if="single_tournament.events"
                v-for="single_event in single_tournament.events"
                :key="'event_' + single_event.id"
            >
              <div class="flex-column results-page-events__game-item">
                <div class="flex-row results-page-events__game-item-grid-3">
                  <div class="flex-column">
                    <div class="t3_regular results-page-events__game-item-small" v-text="$t('Date')"/>
                    <div class="t2_medium results-page-events__game-item-big"
                         v-text="get_local_time(single_event.start)"/>
                  </div>
                  <div class="flex-column">
                    <div class="t3_regular results-page-events__game-item-small" v-text="$t('Score')"/>
                    <div class="t2_medium results-page-events__game-item-big" v-text="single_event.score_home + ' - ' + single_event.score_away"/>
                  </div>
                  <div class="flex-column">
                    <div class="t3_regular results-page-events__game-item-small" v-text="$t('Outcome')"/>
                    <div class="t2_medium results-page-events__game-item-big">
                      <span class="betting-button betting-button__small" v-text="showWinner(single_event.winner)"/>
                    </div>
                  </div>
                </div>
                <div class="flex-row results-page-events__game-item-grid-2">
                  <div class="flex-column">
                    <div class="t3_regular results-page-events__game-item-small" v-text="$t('T1')"/>
                    <div class="t2_medium results-page-events__game-item-big" v-text="single_event.team_home.name"/>
                  </div>
                  <div class="flex-column">
                    <div class="t3_regular results-page-events__game-item-small" v-text="$t('T2')"/>
                    <div class="t2_medium results-page-events__game-item-big" v-text="single_event.team_away.name"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-column results-page-events__message" v-text="$t('Nothing to display')" v-else/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import moment from 'moment';

export default {
  computed: {
    ...mapGetters(["getActualResults"]),
  },
  methods: {
    showWinner(result) {
      let winner = '';

      if (result === 1) {
        winner = this.$t('T1')
      }

      if (result === 2) {
        winner = this.$t('T2')
      }

      if (result === 3) {
        winner = this.$t('Draw')
      }

      return winner
    },
    get_local_time(time) {
      let time_utc = moment.utc(time);
      return moment(time_utc).local().format('DD.MM.YYYY HH:mm');
    }
  },
  created: function () {
    this.moment = moment;
  },
  mounted() {
    if (this.$route.name === 'results-category') {
      this.$store.dispatch("fetchActualResults", {
        sport: this.$route.params.category
      });
    } else {
      this.$store.dispatch("fetchActualResults", {sport: null});
    }
  },
  watch: {
    '$route': function (refreshPage) {
      this.$store.dispatch("fetchActualResults", {sport: this.$route.params.category});
    }
  }
}
</script>