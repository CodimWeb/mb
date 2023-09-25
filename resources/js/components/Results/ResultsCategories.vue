<template>
  <div class="flex-column results-page-left-column" v-if="getActualSports">
    <!-- <router-link
        :to="{name: 'results'}"
        key="0"
        class="flex-row results-page-left-column__item"
    >
      <span class="betting-categories__icon home-icon"/>
      {{ $t('all') }}
    </router-link> -->
    <router-link
        v-for="sport in getActualSports"
        :key="sport.id"
        :to="{name: 'results-category', params: {category: sport.slug}}"
        class="flex-row results-page-left-column__item"
        :class="{'router-link-exact-active': !$route.params.category && sport.slug == 'football'}"
        
    >
      <span :class="'betting-categories__icon ' + sport.icon"/>
      {{ $t(sport.name) }}
    </router-link>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(["getActualSports"]),
  },
  mounted() {
    let category = this.$route.params.category ? this.$route.params.category : 'football';
    console.log('params =', this.$route.params.category)

    this.$store.dispatch("fetchActualSports", category);
  },
}
</script>
