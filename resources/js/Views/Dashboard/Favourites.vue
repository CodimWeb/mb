<template>
  <div class="dashboard-results">
    <h1
        class="h3_semibold dashboard__heading"
        v-text="$t('Favourites')"/>
    <div class="betting-events__loading" v-if="is_loading">
      <div class="betting-events">
        <div class="betting-events__subcategory">
          <div class="betting-events__subcategory-container">
            <div class="betting-events__subcategory-title">
              <span class="betting-events__subcategory-icon betting-events__subcategory-icon--loading"/>
              {{ $t('Loading') }}
            </div>

            <div class="betting-events__champ-container">
              <div class="flex-row betting-events__champ-title"/>

              <div class="betting-events__game-container">
                <div class="betting-events__game-group">
                  <div class="betting-events__game-group-row">
                    <div class="betting-events__game-favourite-icon--loading"/>
                    <div class="betting-events__game-date"/>
                  </div>
                  <div class="betting-events__game-group-row-big">
                    <div class="flex-row"/>
                    <div class="flex-row"/>
                  </div>
                </div>
                <div class="betting-events__game-group">
                  <div class="betting-events__game-teams-grid">
                    <div class="flex-row betting-events__game-teams-grid-text"/>
                    <div class="flex-row betting-events__game-teams-grid-text"/>
                    <div class="flex-row betting-events__game-teams-grid-text"/>
                  </div>
                  <div class="betting-events__game-teams-grid">
                    <div class="button-action-02 betting-events__game-button"/>
                    <div class="button-action-02 betting-events__game-button"/>
                    <div class="button-action-02 betting-events__game-button"/>
                  </div>
                </div>
              </div>
              <div class="betting-events__game-container">
                <div class="betting-events__game-group">
                  <div class="betting-events__game-group-row">
                    <div class="betting-events__game-favourite-icon--loading"/>
                    <div class="betting-events__game-date"/>
                  </div>
                  <div class="betting-events__game-group-row-big">
                    <div class="flex-row"/>
                    <div class="flex-row"/>
                  </div>
                </div>
                <div class="betting-events__game-group">
                  <div class="betting-events__game-teams-grid">
                    <div class="flex-row betting-events__game-teams-grid-text"/>
                    <div class="flex-row betting-events__game-teams-grid-text"/>
                    <div class="flex-row betting-events__game-teams-grid-text"/>
                  </div>
                  <div class="betting-events__game-teams-grid">
                    <div class="button-action-02 betting-events__game-button"/>
                    <div class="button-action-02 betting-events__game-button"/>
                    <div class="button-action-02 betting-events__game-button"/>
                  </div>
                </div>
              </div>
              <div class="betting-events__game-container">
                <div class="betting-events__game-group">
                  <div class="betting-events__game-group-row">
                    <div class="betting-events__game-favourite-icon--loading"/>
                    <div class="betting-events__game-date"/>
                  </div>
                  <div class="betting-events__game-group-row-big">
                    <div class="flex-row"/>
                    <div class="flex-row"/>
                  </div>
                </div>
                <div class="betting-events__game-group">
                  <div class="betting-events__game-teams-grid">
                    <div class="flex-row betting-events__game-teams-grid-text"/>
                    <div class="flex-row betting-events__game-teams-grid-text"/>
                    <div class="flex-row betting-events__game-teams-grid-text"/>
                  </div>
                  <div class="betting-events__game-teams-grid">
                    <div class="button-action-02 betting-events__game-button"/>
                    <div class="button-action-02 betting-events__game-button"/>
                    <div class="button-action-02 betting-events__game-button"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="betting-events" v-else>
        <div v-for="data in getActualFavourites" :key="data.sport.id">
            <div class="betting-events__subcategory" v-if="data.sport && data.tournaments.length">
            <!-- Контейнер с видами спорта -->
                <div class="betting-events__subcategory-container">
                    <!-- Название вида спорта -->
                    <div class="betting-events__subcategory-title">
                        <span :class="'betting-events__subcategory-icon ' + data.sport.icon"/>
                        {{ $t(data.sport.name) }}
                    </div>
                    <!-- Контейнер с чемпионатами -->
                    <div class="betting-events__champ-container" v-for="tournament in data.tournaments" :key="tournament.id">
                        <div class="betting-events__champ-title">{{tournament.name}}</div>

                        <!-- Контейнер с играми -->
                        <div
                            class="betting-events__game-container"
                            v-for="event in tournament.events"
                            :key="event.id"
                        >
                            <div class="betting-events__game-group">
                                <div class="betting-events__game-group-row">
                                    <div
                                        :class="{
                                            'betting-events__game-favourite-icon': true,
                                            'betting-events__game-favourite-icon--active': true
                                        }"
                                        @click="removeFromFavorites(event.id)"
                                        :key="'star_' + event.id"
                                    />
                                    <span
                                        class="t2_regular betting-events__game-date"
                                        v-text="get_local_time(event.start_stamp * 1000)"
                                    />
                                </div>
                                <div class="betting-events__game-group-row-big">
                                    <span class="flex-row betting-events__game-team-title t2_medium">
                                    <img
                                        v-if="event.team_home.logo !== null"
                                        :src="'/storage/logos/' + event.team_home.logo"
                                        class="betting-events__game-logo"
                                    />
                                    <span
                                        class="betting-events__game-group__overflow-text"
                                        v-text="event.team_home.name"/>
                                    <span
                                        class="t2_semibold betting-events__game-score"
                                        v-text="event.score_home"
                                    />
                                    </span>
                                    <span class="flex-row betting-events__game-team-title t2_medium">
                                    <img
                                        v-if="event.team_away.logo !== null"
                                        :src="'/storage/logos/' + event.team_away.logo"
                                        class="betting-events__game-logo"
                                    />
                                    <span
                                        class="betting-events__game-group__overflow-text"
                                        v-text="event.team_away.name"/>
                                    <span
                                        class="t2_semibold betting-events__game-score"
                                        v-text="event.score_away"
                                    />
                                    </span>
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
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
    computed: {
        ...mapGetters(["getActualFavourites"]),
    },
    
    data() {
        return {
            is_loading: true,
        }
    },

    methods: {
        ...mapMutations(["addActualFavourite"]),
        ...mapActions(["fetchDashboardActualFavourites"]),
        get_local_time(time) {
            let time_utc = moment.utc(time);
            return moment(time_utc).local().format('DD.MM.YYYY HH:mm');
        },
        removeFromFavorites(id) {
            this.$store.dispatch("removeActualFavourites", id)
        }
    },

    created: function () {
        this.moment = moment;
    },

    mounted() {
        this.$store.dispatch("fetchDashboardActualFavourites");
    },
    watch: {
        // '$route.path'() {
        //     this.is_loading = true;
        //     this.updateEventsData()
        // },
        'getActualFavourites'() {
            this.is_loading = this.getActualFavourites ? false : true;
        },
  }
}
</script>
