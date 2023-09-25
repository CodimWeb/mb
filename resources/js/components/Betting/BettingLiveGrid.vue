<template>
  <div class="betting-grid">
    <!-- categories for mobile or tablets -->
    <BettingTabletCategories class="container container-fw" v-if="windowWidth <= 1280" />
    <div class="container container-fw betting-grid__container">
      <div class="betting-grid__categories" v-if="windowWidth > 1280">
        <BettingLiveCategories />
      </div>
      <div class="betting-grid__content">
        <BettingEvents v-if="windowWidth > 768" />
        <BettingEventsMobile v-else />
      </div>
      <div class="betting-grid__functions" v-if="windowWidth >= 992">
        <BettingCoupons />
      </div>
    </div>

    <!-- betting container mobile -->
    <BettingCouponsMobile v-if="windowWidth < 992" />
  </div>
</template>

<script>
import {useWindowSize} from 'vue-window-size';

import BettingLiveCategories from "./BettingLiveCategories.vue";
import BettingEvents from "./BettingEvents.vue";
import BettingEventsMobile from './BettingEventsMobile.vue';
import BettingCoupons from "./BettingCoupons.vue";
import BettingTabletCategories from "./BettingTabletsCategories.vue";
import BettingCouponsMobile from "./BettingCouponsMobile.vue";

export default {
  components: {
    BettingCouponsMobile,
    BettingCoupons,
    BettingLiveCategories,
    BettingEvents,
    BettingEventsMobile,
    BettingTabletCategories
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