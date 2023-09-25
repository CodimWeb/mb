<template>
  <div class="betting-categories" v-if="getLiveCategories && getLiveCategories.length">
    <router-link
        class="t1_medium betting-categories__item"
        :key="0"
        :to="{name: 'betting-live'}"
    >
      <span class="betting-categories__icon home-icon"></span>
      {{ $t('all') }}
    </router-link>
    <router-link
        class="t1_medium betting-categories__item"
        v-for="item in getLiveCategories"
        :key="item.id"
        :to="{name: 'betting-live-category', params: {
          category: 'sport_slug',
          subcategory: item.slug
        }}"
    >
      <span v-if="item.icon" :class="'betting-categories__icon ' + item.icon"></span>
      {{ $t(item.name) }}
    </router-link>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
    ...mapGetters(["getLiveCategories"]),
  },
  methods: {
    ...mapActions(["fetchLiveCategories"])
  },
  mounted() {
    // Выводим категории спорта
    this.$store.dispatch("fetchLiveCategories", {
      category: this.$route.params.sport_slug
    });
  },
}
</script>
