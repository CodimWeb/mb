<template>
  <div class="betting-page">
    <BettingBanner v-if="windowWidth > 768" />
    <BettingBannerMobile v-else />
    <BettingGrid />
  </div>
</template>

<script>
import {useWindowSize} from 'vue-window-size';

import BettingBanner from "../../components/Betting/BettingBanner.vue";
import BettingBannerMobile from "../../components/Betting/BettingBannerMobile.vue";

import BettingGrid from "../../components/Betting/BettingGrid.vue";

export default {
  components: {
    BettingBannerMobile,
    BettingBanner,
    BettingGrid
  },
  setup() {
    const {width, height} = useWindowSize();

    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
}
</script>
