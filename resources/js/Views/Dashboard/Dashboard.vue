<template>
  <div class="d">
    <Nav v-if="windowWidth > 1180"/>
    <div class="dashboard">
      <div class="dashboard__left-bar" v-if="windowWidth > 1180"/>
      <div class="dashboard__content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/Dashboard/Nav.vue";
import {useWindowSize} from "vue-window-size";

export default {
  data() {
    return {
      key: 0
    }
  },
  components: {
    Nav
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