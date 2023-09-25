<template>
  <div class="betting-grid">
    <!-- categories for mobile or tablets -->
    <BettingSearch/>
    <BettingTabletCategories class="container container-fw" v-if="windowWidth <= 1280"/>
    <div class="container container-fw betting-grid__container">
      <div class="betting-grid__categories" v-if="windowWidth > 1280">
        <BettingCategories/>
        <BettingCountries :key="$route.params.subcategory"/>
      </div>
      <div class="betting-grid__content">
        <BettingEvents v-if="windowWidth > 768" :key="$route.path"/>
        <BettingEventsMobile v-else/>
      </div>
      <div class="betting-grid__functions" v-if="windowWidth >= 992" :key="$route.path">
        <BettingCoupons :key="$route.params.subcategory"/>
      </div>
    </div>

    <!-- betting container mobile -->
    <BettingCouponsMobile v-if="windowWidth < 992"/>
    
  </div>
</template>

<script>
import {useWindowSize} from 'vue-window-size';

import BettingSearch from './BettingSearch.vue';
import BettingCategories from "./BettingCategories.vue";
import BettingEvents from "./BettingEvents.vue";
import BettingEventsMobile from './BettingEventsMobile.vue';
import BettingCoupons from "./BettingCoupons.vue";
import BettingTabletCategories from "./BettingTabletsCategories.vue";
import BettingCouponsMobile from "./BettingCouponsMobile.vue";
import BettingCountries from "./BettingCountries.vue"

export default {
  components: {
    BettingSearch,
    BettingCouponsMobile,
    BettingCoupons,
    BettingCategories,
    BettingEvents,
    BettingEventsMobile,
    BettingTabletCategories,
    BettingCountries
  },
  setup() {
    const {width, height} = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  }
}
</script>