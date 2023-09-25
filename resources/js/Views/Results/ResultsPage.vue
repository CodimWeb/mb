<template>
  <div class="results-page">
    <div class="container container-fw results-page__container">
      <div class="results-page__grid">
        <div class="flex-column" v-if="windowWidth >= 992">
          <ResultsCategories/>
        </div>
        <div>
          <ResultsEvents v-if="windowWidth >= 768" />
          <ResultsEventsMobile v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useWindowSize} from "vue-window-size";

import ResultsCategories from '../../components/Results/ResultsCategories.vue';
import ResultsEvents from '../../components/Results/ResultsEvents.vue';
import ResultsEventsMobile from '../../components/Results/ResultsEventsMobile.vue';

export default {
  components: {
    ResultsCategories,
    ResultsEvents,
    ResultsEventsMobile
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