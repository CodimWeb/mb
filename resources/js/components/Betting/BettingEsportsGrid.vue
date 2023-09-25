<template>
  <div class="betting-grid">
    <div class="container container-fw betting-esports-grid__container">
      <div class="betting-grid__content">
        <BettingEsportsEvents />
      </div>
    </div>
  </div>
</template>

<script>
import {useWindowSize} from 'vue-window-size';

import BettingEsportsEvents from "./BettingEsportsEvents.vue";

export default {
  components: {
    BettingEsportsEvents
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