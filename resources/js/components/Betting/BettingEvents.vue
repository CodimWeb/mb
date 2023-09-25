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


      <!-- filters -->
      <!-- <div class="flex-row betting-events__filters" v-if="$route.name === 'betting-category' && $route.params.category !== 'live'"> -->
      <div class="flex-row betting-events__filters" 
            v-if="$route.name === 'betting' || $route.name === 'betting-category' && $route.params.category !== 'live'"
        >
        <span
            :class="{
              't1_medium betting-events__filters-item': true,
              'betting-events__filters-item--active': this.filter === 'all'
            }"
            @click="setFilter('all')"
            v-text="$t('All')"/>
        <span
            :class="{
              't1_medium betting-events__filters-item': true,
              'betting-events__filters-item--active': this.filter === 'live'
            }"
            @click="setFilter('live')"
            v-text="'LIVE'"/>
        <span
            :class="{
              't1_medium betting-events__filters-item': true,
              'betting-events__filters-item--active': this.filter === 'upcoming'
            }"
            @click="setFilter('upcoming')"
            v-text="$t('Upcoming')"/>
      </div>
      <!-- / filters end -->

      <!-- no events -->
      <div
          v-if="this.$route.name === 'betting-category' && !getActualEvents.length  && !getLiveEvents.length"
          class="betting-events__nothing"
          v-text="$t('Nothing to display')"/>
      <!-- / no events -->

      <!-- live events -->

      <!-- <div v-if="
      $route.name === 'betting-category' &&
      $route.params.category !== 'live' &&
      getActualEvents.length &&
      filter !== 'upcoming'"> -->

      <!-- <div v-if="
      $route.name === 'betting-category' &&
      $route.params.category !== 'live' &&
      getActualEventsLiveFilter.length &&
      filter !== 'upcoming'"> -->


<!--      <div v-if="-->
<!--      //$route.name === 'betting-category' &&-->
<!--      $route.params.category !== 'live' &&-->
<!--      // getActualEventsLiveFilter.length &&-->
<!--      filter === 'live'">-->


      <div v-if="$route.params.category !== 'live' && filter === 'live'">
        <div v-for="data in getLiveEvents" class="betting-events__subcategory" :key="'sport_live_' + data.sport.id">
          <div class="betting-events__subcategory-title betting-events__subcategory-title--live">
            <span :class="'betting-events__subcategory-icon ' + data.sport.icon"/>
            {{ data.sport.name + ' LIVE' }}
          </div>

          <div class="betting-events__champ-container" v-for="tournament in data.tournaments" :key="tournament.id">
            <div class="betting-events__champ-title">
              {{tournament.name}}
            </div>

            <!-- Контейнер с играми -->
            <div
                class="betting-events__game-container"
                v-for="event in tournament.events"
                @click="setSelectedEventMethod(event)"
                :key="event.id + '_live'"
            >
              <div class="betting-events__game-group">
                <div class="betting-events__game-group-row">
                  <div
                      :class="{
                        'betting-events__game-favourite-icon': true,
                        'betting-events__game-favourite-icon--active': is_favorite(event.id)
                      }"
                      @click.stop="addToFavoritesMethod(event.id)"
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

              <div class="betting-events__game-group" v-if="event.odds && event.odds.length">
                <div
                    :class="{
                    'betting-events__game-teams-grid': true,
                    'betting-events__game-teams-grid--grid-2': ((event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw ?? false : false) === false
                  }"
                >
                  <span class="t2_regular betting-events__game-group-3-text"
                        v-text="event.team_home.name"
                        v-if="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home ?? false : false"/>
                  <span
                      class="t2_regular betting-events__game-group-3-text"
                      v-text="$t('Draw')"
                      v-if="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw ?? false : false"/>
                  <span class="t2_regular betting-events__game-group-3-text"
                        v-text="event.team_away.name"
                        v-if="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away ?? false : false"/>
                </div>
                <div
                    :class="{
                    'betting-events__game-teams-grid': true,
                    'betting-events__game-teams-grid--grid-2': !isEventHasDraw(event)
                  }">
                  <button
                      :class="{
                       'button-action-02 betting-events__game-button': true,
                       'button-action-02--active': checkCoupon(event.id, 1)
                    }"
                      v-if="isEventHasWinHome(event)"
                      v-text="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home ?? ' - ' : ''"
                      @click.stop="addCouponMethod({
                                        event: event.id,
                                        odd_id: getOddId(event),
                                        choice: 1,
                                        chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home : '',
                                        type: 'team_home'
                                    })"
                      :key="`odd_${event.id}_choice_1`"/>
                  <button
                      :class="{
                       'button-action-02 betting-events__game-button': true,
                       'button-action-02--active': checkCoupon(event.id, 3)
                    }"
                      v-if="isEventHasDraw(event)"
                      v-text="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw ?? ' - ' : ''"
                      @click.stop="addCouponMethod({
                                        event: event.id,
                                        odd_id: getOddId(event),
                                        choice: 3,
                                        chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw : '',
                                        type: 'draw'
                                    })"
                      :key="`odd_${event.id}_choice_3`"/>
                  <button
                      :class="{
                       'button-action-02 betting-events__game-button': true,
                       'button-action-02--active': checkCoupon(event.id, 2)
                    }"
                      v-if="isEventHasWinAway(event)"
                      v-text="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away ?? ' - ' : ''"
                      @click.stop="addCouponMethod({
                                        event: event.id,
                                        odd_id: getOddId(event),
                                        choice: 2,
                                        chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away : '',
                                        type: 'team_away'
                                    })"
                      :key="`odd_${event.id}_choice_2`"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filter !== 'live' && filter === 'all'" v-for="data in getActualEvents">
        <div class="betting-events__subcategory" v-if="data.sport && data.tournaments.length" :key="data.sport.id">
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
                  @click="setSelectedEventMethod(event)"
                  :key="event.id"
              >
                <div class="betting-events__game-group">
                  <div class="betting-events__game-group-row">
                    <div
                        :class="{
                      'betting-events__game-favourite-icon': true,
                      'betting-events__game-favourite-icon--active': is_favorite(event.id)
                    }"
                        @click.stop="addToFavoritesMethod(event.id)"
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

                <div class="betting-events__game-group" v-if="event.odds && event.odds.length">
                  <div
                      :class="{
                    'betting-events__game-teams-grid': true,
                    'betting-events__game-teams-grid--grid-2': ((event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw ?? false : false) === false
                  }"
                  >
                    <span class="t2_regular betting-events__game-group-3-text"
                          v-text="event.team_home.name"
                          v-if="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home ?? false : false"/>
                    <span
                        class="t2_regular betting-events__game-group-3-text"
                        v-text="$t('Draw')"
                        v-if="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw ?? false : false"/>
                    <span class="t2_regular betting-events__game-group-3-text"
                          v-text="event.team_away.name"
                          v-if="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away ?? false : false"/>
                  </div>
                  <div
                      :class="{
                    'betting-events__game-teams-grid': true,
                    'betting-events__game-teams-grid--grid-2': !isEventHasDraw(event)
                  }">
                    <button
                        :class="{
                       'button-action-02 betting-events__game-button': true,
                       'button-action-02--active': checkCoupon(event.id, 1)
                    }"
                        v-if="isEventHasWinHome(event)"
                        v-text="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home ?? ' - ' : ''"
                        @click.stop="addCouponMethod({
                                        event: event.id,
                                        odd_id: getOddId(event),
                                        choice: 1,
                                        chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home : '',
                                        type: 'team_home'
                                    })"
                        :key="`odd_${event.id}_choice_1`"/>
                    <button
                        :class="{
                       'button-action-02 betting-events__game-button': true,
                       'button-action-02--active': checkCoupon(event.id, 3)
                    }"
                        v-if="isEventHasDraw(event)"
                        v-text="(event.odds && event.odds.length)? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw ?? ' - ' : ''"
                        @click.stop="addCouponMethod({
                                        event: event.id,
                                        odd_id: getOddId(event),
                                        choice: 3,
                                        chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw : '',
                                        type: 'draw'
                                    })"
                        :key="`odd_${event.id}_choice_3`"/>
                    <button
                        :class="{
                       'button-action-02 betting-events__game-button': true,
                       'button-action-02--active': checkCoupon(event.id, 2)
                    }"
                        v-if="isEventHasWinAway(event)"
                        v-text="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away ?? ' - ' : ''"
                        @click.stop="addCouponMethod({
                                        event: event.id,
                                        odd_id: getOddId(event),
                                        choice: 2,
                                        chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away : '',
                                        type: 'team_away'
                                    })"
                        :key="`odd_${event.id}_choice_2`"/>
                  </div>
                </div>
              </div>
            </div>


            <router-link
                v-if="$route.name === 'betting'"
                :to="{
                    name: 'betting-category',
                    params: {
                      category: 'sport',
                      subcategory: data.sport.slug
                    }}"
                class="flex-row t2_medium betting-events__more-btn">
              {{ $t('All events in the category') + ' ' + data.sport.name }}
            </router-link>
          </div>
        </div>
      </div>

      <div v-if="filter === 'upcoming'" v-for="data in getUpcomingEvents">
        <div class="betting-events__subcategory" v-if="data.sport && data.tournaments.length" :key="data.sport.id">
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
                  @click="setSelectedEventMethod(event)"
                  :key="event.id"
              >
                <div class="betting-events__game-group">
                  <div class="betting-events__game-group-row">
                    <div
                        :class="{
                      'betting-events__game-favourite-icon': true,
                      'betting-events__game-favourite-icon--active': is_favorite(event.id)
                    }"
                        @click.stop="addToFavoritesMethod(event.id)"
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

                <div class="betting-events__game-group" v-if="event.odds && event.odds.length">
                  <div
                      :class="{
                    'betting-events__game-teams-grid': true,
                    'betting-events__game-teams-grid--grid-2': ((event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw ?? false : false) === false
                  }"
                  >
                    <span class="t2_regular betting-events__game-group-3-text"
                          v-text="event.team_home.name"
                          v-if="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home ?? false : false"/>
                    <span
                        class="t2_regular betting-events__game-group-3-text"
                        v-text="$t('Draw')"
                        v-if="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw ?? false : false"/>
                    <span class="t2_regular betting-events__game-group-3-text"
                          v-text="event.team_away.name"
                          v-if="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away ?? false : false"/>
                  </div>
                  <div
                      :class="{
                    'betting-events__game-teams-grid': true,
                    'betting-events__game-teams-grid--grid-2': !isEventHasDraw(event)
                  }">
                    <button
                        :class="{
                       'button-action-02 betting-events__game-button': true,
                       'button-action-02--active': checkCoupon(event.id, 1)
                    }"
                        v-if="isEventHasWinHome(event)"
                        v-text="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home ?? ' - ' : ''"
                        @click.stop="addCouponMethod({
                                        event: event.id,
                                        odd_id: getOddId(event),
                                        choice: 1,
                                        chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home : '',
                                        type: 'team_home'
                                    })"
                        :key="`odd_${event.id}_choice_1`"/>
                    <button
                        :class="{
                       'button-action-02 betting-events__game-button': true,
                       'button-action-02--active': checkCoupon(event.id, 3)
                    }"
                        v-if="isEventHasDraw(event)"
                        v-text="(event.odds && event.odds.length)? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw ?? ' - ' : ''"
                        @click.stop="addCouponMethod({
                                        event: event.id,
                                        odd_id: getOddId(event),
                                        choice: 3,
                                        chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw : '',
                                        type: 'draw'
                                    })"
                        :key="`odd_${event.id}_choice_3`"/>
                    <button
                        :class="{
                       'button-action-02 betting-events__game-button': true,
                       'button-action-02--active': checkCoupon(event.id, 2)
                    }"
                        v-if="isEventHasWinAway(event)"
                        v-text="(event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away ?? ' - ' : ''"
                        @click.stop="addCouponMethod({
                                        event: event.id,
                                        odd_id: getOddId(event),
                                        choice: 2,
                                        chance: event.odds && event.odds.length ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away : '',
                                        type: 'team_away'
                                    })"
                        :key="`odd_${event.id}_choice_2`"/>
                  </div>
                </div>
              </div>
            </div>


            <router-link
                v-if="$route.name === 'betting'"
                :to="{
                    name: 'betting-category',
                    params: {
                      category: 'sport',
                      subcategory: data.sport.slug
                    }}"
                class="flex-row t2_medium betting-events__more-btn">
              {{ $t('All events in the category') + ' ' + data.sport.name }}
            </router-link>
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
    ...mapMutations(["addActualFavourite", "addActualCoupon", "filterActualEvents", "updateSelectedEvent", "updateSport", "updateLive",]),
    ...mapActions(["fetchActualEvents", "fetchActualCoupons", 'fetchActualEventsByCountryTournament', 'fetchActualEventsBySearch']),
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
      this.$store.dispatch("getEventData", {id: data.id});
    },
    addCouponMethod(coupon) {
      if (!this.user) {
        this.showError(this.$t('Log in to place a bet'))
        return false;
      }

      this.addActualCoupon(coupon)
    },
    updateEventsData() {
      // if (this.getManualSearch) return;

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
        if(this.$route.name.indexOf('betting-search') !== -1) {
          let data = {};

          if(this.$route.name === 'betting-search-tournament') {
            data.type = 'tournament'
            data.id = this.$route.params.p_tournament
          }

          if(this.$route.name === 'betting-search-team') {
            data.type = 'team'
            data.name = this.$route.params.p_name
          }

          if(this.$route.name === 'betting-search-player') {
            data.type = 'player'
            data.name = this.$route.params.p_name
          }

          if(this.$route.name === 'betting-search-country') {
            data.type = 'country'
            data.name = this.$route.params.p_name
            data.sport = this.$route.params.p_sport
          }
          this.$store.dispatch("fetchActualEventsBySearch", data);
        }

        else if(this.$route.name === 'betting-category-tournament' && this.$route.params.country && this.$route.params.tournament) {
            this.$store.dispatch("fetchActualEventsByCountryTournament", {
                subcategory: this.$route.params.subcategory,
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
            // if(this.selectedEvent) {
            //     this.$store.dispatch("getEventData", {id: this.selectedEvent.id});
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
      if (event.odds && event.odds.length) {
        odd_id = event.odds.filter(item => item.market_name === 'Full time')[0].id
      }
      return odd_id
    },
    isEventHasDraw(event) {
      return (event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_draw ?? false : false
    },
    isEventHasWinHome(event) {
      return (event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_home ?? false : false
    },
    isEventHasWinAway(event) {
      return (event.odds && event.odds.length) ? event.odds.filter(item => item.market_name === 'Full time')[0].choice_away ?? false : false
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
    console.log('mounted')
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
