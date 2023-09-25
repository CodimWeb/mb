<template>
  <div class="front-page">
    <BannerFront />
    <FastStart />
    <Disciplines />
    <div class="mobile-reverse">
        <BannerWeb3 />
        <Advantages />
    </div>
    <CryptoCurrencies />
    <PoweredBy />
    <BuyCurrency />
    <Faq />
  </div>
</template>

<script>
  import BannerFront from "../../components/Front/BannerFront.vue";
  import FastStart from '../../components/Front/FastStart.vue';
  import Disciplines from "../../components/Front/Disciplines.vue";
  import BannerWeb3 from "@/js/components/Front/BannerWeb3.vue";
  import Advantages from "../../components/Front/Advantages.vue";
  import CryptoCurrencies from "../../components/Front/CryptoCurrencies.vue";
  import PoweredBy from "@/js/components/Front/PoweredBy.vue";
  import BuyCurrency from "../../components/Front/BuyCurrency.vue";
  import Faq from "../../components/Front/Faq.vue";

  export default {
    components: {
      BannerFront,
      FastStart,
      Disciplines,
      BannerWeb3,
      Advantages,
      CryptoCurrencies,
      PoweredBy,
      BuyCurrency,
      Faq,
    },
  }
</script>
