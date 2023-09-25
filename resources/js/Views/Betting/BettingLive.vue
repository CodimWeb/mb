<template>
  <div class="betting-page">
    <BettingBanner v-if="windowWidth > 768" />
    <BettingBannerMobile v-else />
    <BettingLiveGrid />
  </div>
</template>

<script>
import {useWindowSize} from 'vue-window-size';

import BettingBanner from "../../components/Betting/BettingBanner.vue";
import BettingBannerMobile from "../../components/Betting/BettingBannerMobile.vue";

import BettingLiveGrid from "../../components/Betting/BettingLiveGrid.vue";

export default {
  components: {
    BettingBannerMobile,
    BettingBanner,
    BettingLiveGrid
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
