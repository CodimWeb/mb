<template>
  <div class="betting-events__loading" v-if="is_loading">
    <div class="flex-column">
      <div class="betting-events-mobile__subcategory">
        <div class="flex-column betting-events-mobile__subcategory-container">
          <div class="flex-row t1_medium betting-events-mobile__subcategory-title" v-text="$t('Loading')" />
          <div class="flex-column betting-events-mobile__champ-container">
            <div
              class="flex-row t1_medium betting-events-mobile__champ-title betting-events-mobile__champ-title--loading" />
            <div class="flex-column betting-events-mobile__game-container" v-for="n in 3" :key="'loading_' + n">
              <div class="betting-events-mobile__game-grid">
                <div class="flex-column">
                  <div class="betting-events-mobile__date betting-events-mobile__date--loading" />
                  <div class="betting-events-mobile__teams betting-events-mobile__teams--loading" />
                </div>
                <div class="flex-column">
                  <div class="betting-events-mobile__loading-star" />
                </div>
              </div>
              <div class="betting-events-mobile__game-grid-2">
                <div v-for="a in 3">
                  <div class="betting-events-mobile__loading-button">
                    <div class="flex-row betting-events-mobile__loading-button--left" />
                    <div class="flex-row betting-events-mobile__loading-button--right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="flex-column betting-events-mobile" v-else>

    <!-- filters -->
    <div class="flex-row betting-events-mobile__filters">
      <div :class="{
        't1_medium betting-events-mobile__filters-button': true,
        'betting-events-mobile__filters-button--active': filter === 'all'
      }" @click="setFilter('all')" v-text="$t('All')" />
      <div :class="{
        't1_medium betting-events-mobile__filters-button': true,
        'betting-events-mobile__filters-button--active': filter === 'live'
      }" @click="setFilter('live')" v-text="$t('LIVE')" />
      <div :class="{
        't1_medium betting-events-mobile__filters-button': true,
        'betting-events-mobile__filters-button--active': filter === 'upcoming'
      }" @click="setFilter('upcoming')" v-text="$t('Upcoming')" />
    </div>
    <!-- /filters -->

    <!-- no events -->
    <div v-if="this.$route.name === 'betting-category' && !getActualEvents.length && !getLiveEvents.length"
      class="betting-events-mobile__nothing" v-text="$t('Nothing to display')" />
    <!-- / no events -->

    <!-- LIVE -->
    <div class="flex-column" v-for="data in getLiveEvents" v-if="$route.params.category !== 'live' && filter === 'live'">
      <div class="betting-events-mobile__subcategory" v-if="data.sport && data.tournaments.length" :key="data.sport.id">
        <div class="flex-column betting-events-mobile__subcategory-container">
          <div
            class="flex-row t1_medium betting-events-mobile__subcategory-title betting-events-mobile__subcategory-title--live">
            {{ $t(data.sport.name) + ' LIVE' }}
          </div>

          <!-- контейнер с чемпионатами -->
          <div class="flex-column betting-events-mobile__champ-container" v-for="tournament in data.tournaments"
            :key="tournament.id">
            <div class="flex-row t1_medium betting-events-mobile__champ-title"
              v-text="tournament.name + `(${tournament.events.length})`" />

            <!-- Контейнер с играми -->
            <div v-for="event in tournament.events" :key="event.id" @click="setSelectedEventMethod(event)">
              <div class="flex-column betting-events-mobile__game-container" v-if="event.team_home && event.team_away">
                <div class="betting-events-mobile__game-grid">
                  <div class="flex-column">
                    <span class="t2_regular betting-events-mobile__date"
                      v-text="get_local_time(event.start_stamp * 1000)" />
                    <span class="t2_medium betting-events-mobile__teams">
                      <img v-if="event.team_home.logo !== null" :src="'/storage/logos/' + event.team_home.logo"
                        class="betting-events-mobile__teams-logo" />
                      {{ event.team_home.name }} -
                      <img v-if="event.team_home.logo !== null" :src="'/storage/logos/' + event.team_away.logo"
                        class="betting-events-mobile__teams-logo" />
                      {{ event.team_away.name }}
                    </span>
                  </div>
                  <div class="flex-column">
                    <div :class="{
                      'betting-events__game-favourite-icon': true,
                      'betting-events__game-favourite-icon--active': is_favorite(event.id)
                    }" @click="addToFavoritesMethod(event.id)" :key="'star_' + event.id" />
                  </div>
                </div>
                <div v-if="event.odds && event.odds.length" :class="{
                  'betting-events-mobile__game-grid-2': true,
                  'betting-events-mobile__game-grid-2--half': !isEventHasDraw(event)
                }">
                  <div :key="`mobile_odd_${event.id}_choice_1`">
                    <div :class="{
                      'button-action-02 betting-events-mobile__game-button': true,
                      'button-action-02--active': checkCoupon(event.id, 1)
                    }" @click.stop="addCouponMethod({
  event: event.id,
  odd_id: getOddId(event),
  choice: 1,
  chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home : '',
  type: 'team_home'
})" :key="`odd_${event.id}_choice_1`">
                      <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('T1')" />
                      <div class="flex-row betting-events-mobile__game-button--right-part"
                        v-text="event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home : ' - '" />
                    </div>
                  </div>
                  <div :key="`mobile_odd_${event.id}_choice_3`" v-if="isEventHasDraw(event)">
                    <div :class="{
                      'button-action-02 betting-events-mobile__game-button': true,
                      'button-action-02--active': checkCoupon(event.id, 3)
                    }" @click="addCouponMethod({
  event: event.id,
  odd_id: getOddId(event),
  choice: 3,
  chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw : '',
  type: 'draw'
})" :key="`odd_${event.id}_choice_3`">
                      <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('X')" />
                      <div class="flex-row betting-events-mobile__game-button--right-part"
                        v-text="event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw : ' - '" />
                    </div>
                  </div>
                  <div :key="`mobile_odd_${event.id}_choice_2`">
                    <div :class="{
                      'button-action-02 betting-events-mobile__game-button': true,
                      'button-action-02--active': checkCoupon(event.id, 2)
                    }" @click="addCouponMethod({
  event: event.id,
  odd_id: getOddId(event),
  choice: 2,
  chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away : '',
  type: 'team_away'
})" :key="`odd_${event.id}_choice_2`">
                      <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('T2')" />
                      <div class="flex-row betting-events-mobile__game-button--right-part"
                        v-text="event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away : ' - '" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- виды спорта -->
    <div class="flex-column" v-for="data in getActualEvents" v-if="filter !== 'live' && filter === 'all'">
      <div class="betting-events-mobile__subcategory" v-if="data.sport && data.tournaments.length" :key="data.sport.id">
        <div class="flex-column betting-events-mobile__subcategory-container">
          <div class="flex-row t1_medium betting-events-mobile__subcategory-title">
            {{ $t(data.sport.name) }}
          </div>

          <!-- контейнер с чемпионатами -->
          <div class="flex-column betting-events-mobile__champ-container" v-for="tournament in data.tournaments"
            :key="tournament.id">
            <div class="flex-row t1_medium betting-events-mobile__champ-title"
              v-text="tournament.name + `(${tournament.events.length})`" />

            <!-- Контейнер с играми -->
            <div v-for="event in tournament.events" :key="event.id" @click="setSelectedEventMethod(event)">
              <div class="flex-column betting-events-mobile__game-container" v-if="event.team_home && event.team_away">
                <div class="betting-events-mobile__game-grid">
                  <div class="flex-column">
                    <span class="t2_regular betting-events-mobile__date"
                      v-text="get_local_time(event.start_stamp * 1000)" />
                    <span class="t2_medium betting-events-mobile__teams">
                      <img v-if="event.team_home.logo !== null" :src="'/storage/logos/' + event.team_home.logo"
                        class="betting-events-mobile__teams-logo" />
                      {{ event.team_home.name }} -
                      <img v-if="event.team_home.logo !== null" :src="'/storage/logos/' + event.team_away.logo"
                        class="betting-events-mobile__teams-logo" />
                      {{ event.team_away.name }}
                    </span>
                  </div>
                  <div class="flex-column">
                    <div :class="{
                      'betting-events__game-favourite-icon': true,
                      'betting-events__game-favourite-icon--active': is_favorite(event.id)
                    }" @click="addToFavoritesMethod(event.id)" :key="'star_' + event.id" />
                  </div>
                </div>
                <div v-if="event.odds && event.odds.length" :class="{
                  'betting-events-mobile__game-grid-2': true,
                  'betting-events-mobile__game-grid-2--half': !isEventHasDraw(event)
                }">
                  <div :key="`mobile_odd_${event.id}_choice_1`">
                    <div :class="{
                      'button-action-02 betting-events-mobile__game-button': true,
                      'button-action-02--active': checkCoupon(event.id, 1)
                    }" @click.stop="addCouponMethod({
  event: event.id,
  odd_id: getOddId(event),
  choice: 1,
  chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home : '',
  type: 'team_home'
})" :key="`odd_${event.id}_choice_1`">
                      <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('T1')" />
                      <div class="flex-row betting-events-mobile__game-button--right-part"
                        v-text="event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home : ' - '" />
                    </div>
                  </div>
                  <div :key="`mobile_odd_${event.id}_choice_3`" v-if="isEventHasDraw(event)">
                    <div :class="{
                      'button-action-02 betting-events-mobile__game-button': true,
                      'button-action-02--active': checkCoupon(event.id, 3)
                    }" @click.stop="addCouponMethod({
  event: event.id,
  odd_id: getOddId(event),
  choice: 3,
  chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw : '',
  type: 'draw'
})" :key="`odd_${event.id}_choice_3`">
                      <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('X')" />
                      <div class="flex-row betting-events-mobile__game-button--right-part"
                        v-text="event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw : ' - '" />
                    </div>
                  </div>
                  <div :key="`mobile_odd_${event.id}_choice_2`">
                    <div :class="{
                      'button-action-02 betting-events-mobile__game-button': true,
                      'button-action-02--active': checkCoupon(event.id, 2)
                    }" @click.stop="addCouponMethod({
  event: event.id,
  odd_id: getOddId(event),
  choice: 2,
  chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away : '',
  type: 'team_away'
})" :key="`odd_${event.id}_choice_2`">
                      <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('T2')" />
                      <div class="flex-row betting-events-mobile__game-button--right-part"
                        v-text="event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away : ' - '" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Upcoming -->
    <div class="flex-column" v-if="filter === 'upcoming'" v-for="data in getUpcomingEvents">
      <div class="betting-events-mobile__subcategory" v-if="data.sport && data.tournaments.length" :key="data.sport.id">
        <div class="flex-column betting-events-mobile__subcategory-container">
          <div class="flex-row t1_medium betting-events-mobile__subcategory-title">
            {{ $t(data.sport.name) }}
          </div>

          <!-- контейнер с чемпионатами -->
          <div class="flex-column betting-events-mobile__champ-container" v-for="tournament in data.tournaments"
            :key="tournament.id">
            <div class="flex-row t1_medium betting-events-mobile__champ-title"
              v-text="tournament.name + `(${tournament.events.length})`" />

            <!-- Контейнер с играми -->
            <div v-for="event in tournament.events" :key="event.id" @click="setSelectedEventMethod(event)">
              <div class="flex-column betting-events-mobile__game-container" v-if="event.team_home && event.team_away">
                <div class="betting-events-mobile__game-grid">
                  <div class="flex-column">
                    <span class="t2_regular betting-events-mobile__date"
                      v-text="get_local_time(event.start_stamp * 1000)" />
                    <span class="t2_medium betting-events-mobile__teams">
                      <img v-if="event.team_home.logo !== null" :src="'/storage/logos/' + event.team_home.logo"
                        class="betting-events-mobile__teams-logo" />
                      {{ event.team_home.name }} -
                      <img v-if="event.team_home.logo !== null" :src="'/storage/logos/' + event.team_away.logo"
                        class="betting-events-mobile__teams-logo" />
                      {{ event.team_away.name }}
                    </span>
                  </div>
                  <div class="flex-column">
                    <div :class="{
                      'betting-events__game-favourite-icon': true,
                      'betting-events__game-favourite-icon--active': is_favorite(event.id)
                    }" @click="addToFavoritesMethod(event.id)" :key="'star_' + event.id" />
                  </div>
                </div>
                <div v-if="event.odds && event.odds.length" :class="{
                  'betting-events-mobile__game-grid-2': true,
                  'betting-events-mobile__game-grid-2--half': !isEventHasDraw(event)
                }">
                  <div :key="`mobile_odd_${event.id}_choice_1`">
                    <div :class="{
                      'button-action-02 betting-events-mobile__game-button': true,
                      'button-action-02--active': checkCoupon(event.id, 1)
                    }" @click.stop="addCouponMethod({
  event: event.id,
  odd_id: getOddId(event),
  choice: 1,
  chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home : '',
  type: 'team_home'
})" :key="`odd_${event.id}_choice_1`">
                      <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('T1')" />
                      <div class="flex-row betting-events-mobile__game-button--right-part"
                        v-text="event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home : ' - '" />
                    </div>
                  </div>
                  <div :key="`mobile_odd_${event.id}_choice_3`" v-if="isEventHasDraw(event)">
                    <div :class="{
                      'button-action-02 betting-events-mobile__game-button': true,
                      'button-action-02--active': checkCoupon(event.id, 3)
                    }" @click.stop="addCouponMethod({
  event: event.id,
  odd_id: getOddId(event),
  choice: 3,
  chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw : '',
  type: 'draw'
})" :key="`odd_${event.id}_choice_3`">
                      <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('X')" />
                      <div class="flex-row betting-events-mobile__game-button--right-part"
                        v-text="event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw : ' - '" />
                    </div>
                  </div>
                  <div :key="`mobile_odd_${event.id}_choice_2`">
                    <div :class="{
                      'button-action-02 betting-events-mobile__game-button': true,
                      'button-action-02--active': checkCoupon(event.id, 2)
                    }" @click="addCouponMethod({
  event: event.id,
  odd_id: getOddId(event),
  choice: 2,
  chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away : '',
  type: 'team_away'
})" :key="`odd_${event.id}_choice_2`">
                      <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('T2')" />
                      <div class="flex-row betting-events-mobile__game-button--right-part"
                        v-text="event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away : ' - '" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
    selectedEvent() {
      return this.$store.getters.getSelectedEvent
    },
    ...mapGetters(["getActualEvents", "getLiveEvents", "getUpcomingEvents", "getSelectedEvent", "getManualSearch", "getActualEventsLiveFilter", "getActualFavourites", "getActualCoupons", "getActualBalance", "getSelectedDate"]),
  },
  data() {
    return {
      is_loading: true,
      filter: 'all',
      catalog_updating: null
    }
  },
  methods: {
    ...mapMutations(["addActualFavourite", "addActualCoupon", "filterActualEvents", "updateSelectedEvent", "updateSport", "updateLive"]),
    ...mapActions(["fetchActualEvents", "fetchActualCoupons", 'fetchActualEventsByCountryTournament']),
    showError(text) {
      this.$toast.error(text, {
        position: "bottom",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
    setSelectedEventMethod(data) {
      this.$store.dispatch("getEventData", {id: data.id});
    },
    is_favorite(id) {
      let favorite = false;
      this.getActualFavourites.forEach((item) => {
        if (item.event === id) {
          favorite = true;
        }
      })
      return favorite;
    },
    addToFavoritesMethod(id) {
      if (!this.user) {
        this.showError(this.$t('Log in to add a match to your favorites'))
        return false;
      }

      this.addActualFavourite(id)
    },
    addCouponMethod(coupon) {
      if (!this.getActualBalance.real_balance) {
        this.showError(this.$t('Top up your balance to place a bet'))
        return false;
      }

      if (!this.user) {
        this.showError(this.$t('Log in to place a bet'))
        return false;
      }

      this.addActualCoupon(coupon)
    },
    updateEventsData() {

      if (this.getManualSearch) return;

      let live = false;

      if (this.$route.name === 'betting-live' || this.$route.name === 'betting-live-category') {
        live = true;
      }

      // this.updateLive(live);

      let sport = 'football';

      if (typeof (this.$route.params.subcategory) !== "undefined") {
        sport = this.$route.params.subcategory;
      }

      // this.updateSport(sport);   

      let formattedDate = moment(this.getSelectedDate).format('YYYY-MM-DD');

      if (this.$route.params.country && this.$route.params.tournament) {
        this.$store.dispatch("fetchActualEventsByCountryTournament", {
          country: this.$route.params.country,
          tournament: this.$route.params.tournament
        });
      }

      else {
        this.$store.dispatch("fetchActualEvents", {
          date: formattedDate,
          sport: sport,
          live: live
        })
        // if (this.selectedEvent) {
        //   this.$store.dispatch("getEventData", { id: this.selectedEvent.id });
        // }

      }


    },
    checkCoupon(event_id, choice) {
      let selected = false;
      this.getActualCoupons.forEach((item) => {
        if (item.event.id === event_id && item.choice === choice) {
          selected = true
        }
      })
      return selected
    },
    getOddId(event) {
      let odd_id = null;
      if (event.odds.length) {
        odd_id = event.odds.filter(item => item.market_name === 'Full time')[0].id
      }
      return odd_id
    },
    isEventHasDraw(event) {
      return event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw ?? false : false
    },
    get_local_time(time) {
      let time_utc = moment.utc(time);
      return moment(time_utc).local().format('DD.MM.YYYY HH:mm');
    },
    setFilter(filter) {
      this.filter = filter
    },
    updateCatalog() {
      this.catalog_updating = setInterval(this.updateEventsData, 15000)
    }
  },
  created: function () {
    this.moment = moment;
  },
  mounted() {
    if (this.user) {
      this.$store.dispatch("fetchActualCoupons");
      this.$store.dispatch("fetchActualFavourites");
      this.$store.dispatch("fetchActualBalance");
    }

    this.updateEventsData()
    this.updateCatalog()
  },
  unmounted() {
    clearInterval(this.catalog_updating)
  },
  watch: {
    '$route.path'() {
      this.is_loading = true;
      this.updateEventsData()
    },
    'getActualEvents'() {
      this.is_loading = this.getActualEvents ? false : true;
    },
    'getLiveEvents'() {
      this.is_loading = this.getLiveEvents ? false : true;
    }
  }
}
</script>





















