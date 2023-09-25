<template>
  <div class="flex-column about-company">
    <Banner />
    <Mission />
    <Security />
    <Advantages />
    <Participation />
    <Plan />
  </div>
</template>


<script>
import Banner from "../../components/Front/AboutCompany/Banner.vue";
import Mission from "../../components/Front/AboutCompany/Mission.vue";
import Security from "../../components/Front/AboutCompany/Security.vue";
import Advantages from "../../components/Front/AboutCompany/Advantages.vue";
import Participation from "../../components/Front/AboutCompany/Participation.vue";
import Plan from "../../components/Front/AboutCompany/Plan.vue";

export default {
  components: {
    Banner,
    Mission,
    Security,
    Advantages,
    Participation,
    Plan
  }
}
</script>