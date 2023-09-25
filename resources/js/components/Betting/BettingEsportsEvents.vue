<template>
  <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="betting-events" v-else>

      <!-- no events -->
      <div
          v-if="this.$route.name === 'betting-category' && !getActualEsportsEvents.length"
          class="betting-events__nothing"
          v-text="$t('Nothing to display')"/>
      <!-- / no events -->

      <div v-for="tournamet in getActualEsportsEvents">
        <div class="betting-events__subcategory">
          <div class="betting-events__subcategory-container">
            <div
                class="betting-events__champ-container"
            >
              <div
                  class="betting-events__champ-title"
                  v-text="tournamet.name"
              />

              <div v-for="event in tournamet.events"
                   :key="tournamet.id">
                <div class="betting-events__game-container">
                  <div class="betting-events__game-group">
                    <div class="betting-events__game-group-row">
                      <div :class="{
                        'betting-events__game-favourite-icon': true,
                        'betting-events__game-favourite-icon--active': is_favorite(event.id)
                      }"
                          @click="addToFavoritesMethod(tournament.event_id)"
                          :key="'star_' + event.id"
                      />
                      <span
                          class="t2_regular betting-events__game-date"
                          v-text="get_local_time(event.start)"
                      />
                    </div>

                    <div class="betting-events__game-group">
                      <div class="betting-events__game-group-row">
                        <div class="betting-events__game-group-row-big">
                          <span class="flex-row t2_medium">
                          <img
                              v-if="event.team_home.logo !== null"
                              :src="'/storage/logos/' + event.team_home.logo"
                              class="betting-events__game-logo"
                          />
                          <span
                              class="betting-events__game-group"
                              v-text="event.team_home.name"/>
                          </span>
                              <span class="flex-row t2_medium">
                          <img
                              v-if="event.team_away.logo !== null"
                              :src="'/storage/logos/' + event.team_away.logo"
                              class="betting-events__game-logo"
                          />
                          <span
                              class="betting-events__game-group"
                              v-text="event.team_away.name"/>
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
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
    ...mapGetters(["getActualEsportsEvents", "getActualFavourites", "getActualBalance"]),
  },
  data() {
    return {
      is_loading: true,
      catalog_updating: null
    }
  },
  methods: {
    ...mapMutations(["addActualFavourite", "updateSelectedEvent"]),
    ...mapActions(["fetchActualEsportsEvents"]),
    showError(text) {
      this.$toast.error(text, {
        position: "top-right",
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
        this.showError($t('Log in to add a match to your favorites'))
        return false;
      }

      this.addActualFavourite(id)
    },
    setSelectedEventMethod(data) {
      this.updateSelectedEvent(data)
    },
    updateEventsData() {
      this.$store.dispatch("fetchActualEsportsEvents");
    },
    get_local_time(time) {
      let time_utc = moment.utc(time);
      return moment(time_utc).local().format('DD.MM.YYYY HH:mm');
    },
    updateCatalog() {
      this.catalog_updating = this.updateEventsData;
    }
  },
  created: function () {
    this.moment = moment;
  },
  mounted() {
    if (this.user) {
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
    'getActualEsportsEvents'() {
      this.is_loading = !this.getActualEsportsEvents;
    }
  }
}
</script>
