<template>
  <div class="cryptocurrencies">
    <div class="container cryptocurrencies__container">
      <h2 class="h1 cryptocurrencies__heading" v-text="$t('cryptocurrencies__heading')"/>

      <img src="../../../img/cryptocurrencies_list.svg" class="cryptocurrencies__screen cryptocurrencies__list" alt="" v-if="windowWidth > 768"/>
      <img src="../../../img/cryptocurrencies_list--mobile.svg" class="cryptocurrencies__screen cryptocurrencies__list" alt="" v-else/>
      <img src="../../../img/cryptocurrencies_screen.png" :alt="$t('cryptocurrencies__heading')"
           class="cryptocurrencies__screen cryptocurrencies__screen-img">
    </div>
  </div>
</template>

<script>
import {useWindowSize} from "vue-window-size";

export default {
  setup() {
    const {width, height} = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  }
}
</script>