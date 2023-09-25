<template>
  <div class="app_layer">
    <template v-if="$route.meta.header === 'landing'">
      <Header
          :key="'Header' + key"
          @changeLocation="changeLoc"
          v-if="windowWidth >= 920"/>
      <template v-else>
        <HeaderMobile
            :key="'HeaderMobile' + key"
            @changeLocation="changeLoc"
            :mobileMenuIsOpen="mobileMenuIsOpen"
            @toggle-menu="toggleMobileMenu"
            v-body-scroll-lock="mobileMenuIsOpen"/>
        <HeaderMobileNav
            :key="'HeaderMobileNav' + key"
            v-if="mobileMenuIsOpen"/>
      </template>
    </template>

    <template v-if="$route.meta.header === 'dashboard'">
      <DashboardHeader
          :key="'DashboardHeader' + key"
          v-if="windowWidth >= 1180"/>
      <template v-else>
        <DashboardHeaderMobile
            :key="'DashboardHeaderMobile' + key"
            @toggle-menu="toggleMobileMenu"
            :mobileMenuIsOpen="mobileMenuIsOpen"
            v-body-scroll-lock="mobileMenuIsOpen"/>
        <DashboardNavMobile
            :key="'DashboardNavigationMobile' + key"
            v-if="mobileMenuIsOpen"/>
      </template>
    </template>

    <template v-if="$route.meta.header === 'betting'">
      <BettingHeader :key="'BettingHeader' + key" v-if="windowWidth >= 920"/>
      <template v-else>
        <BettingHeaderMobile
            :mobileMenuIsOpen="mobileMenuIsOpen"
            @toggle-menu="toggleMobileMenu"
            :key="'BettingHeaderMobile' + key"
            v-body-scroll-lock="mobileMenuIsOpen"/>
        <BettingMobileNav
            v-if="mobileMenuIsOpen"
            :key="'BettingMobileNav' + key"
            @toggle-menu="toggleMobileMenu"/>
      </template>
    </template>
    <template v-if="$route.meta.header === 'auth'">
      <LoginHeader :key="'AuthHeader' + key"/>
    </template>

    <router-view></router-view>

    <div v-if="$route.meta.header !== 'dashboard'">
      <Footer :key="'Footer' + key"/>
    </div>
  </div>
</template>

<script>
import {loadLanguageAsync} from 'laravel-vue-i18n';
import {isLoaded} from 'laravel-vue-i18n';
import {useWindowSize} from "vue-window-size";

import Header from '../components/Front/Header.vue';
import HeaderMobile from '../components/Front/HeaderMobile.vue';
import HeaderMobileNav from '../components/Front/HeaderMobileNav.vue';
import Footer from "../components/Front/Footer.vue";
import BettingHeader from "../components/Betting/BettingHeader.vue";
import BettingHeaderMobile from '../components/Betting/BettingHeaderMobile.vue';
import BettingMobileNav from '../components/Betting/BettingMobileNav.vue';
import LoginHeader from "../components/Auth/Header.vue";

import DashboardHeader from "../components/Dashboard/Header.vue";
import DashboardHeaderMobile from "../components/Dashboard/HeaderMobile.vue";
import DashboardNavMobile from "../components/Dashboard/NavMobile.vue";

export default {
  components: {
    BettingHeader,
    BettingHeaderMobile,
    BettingMobileNav,
    LoginHeader,
    Header,
    HeaderMobile,
    HeaderMobileNav,
    Footer,
    DashboardHeader,
    DashboardHeaderMobile,
    DashboardNavMobile
  },


  computed: {
    user() {
      return this.$store.getters.user;
    },
  },

  data() {
    return {
      key: 0,
      navVisible: false,
      mobileMenuIsOpen: false,
      userInfo: {
        balance: null
      },
      update_balance_var: null
    }
  },

  methods: {
    isNavVisible() {
      this.navVisible = true

      let pages = ['login', 'register', 'recovery']
      pages.forEach((item) => {
        if (item === this.$route.name) {
          this.navVisible = false
        }
      })
    },
    changeLoc(loc) {
      loadLanguageAsync(loc)
    },
    // applyLoc(loc) {
    //   this.intervalid1 = setInterval(function () {
    //     if (isLoaded(loc)) {
    //       this.key += 1
    //       this.$forceUpdate()
    //       clearInterval(this.intervalid1)
    //     }
    //   }.bind(this), 500);
    // },
    toggleMobileMenu() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen
    },
    update_balance() {
      this.update_balance_var = setInterval(() => {
        if (this.user) {
          this.$store.dispatch("fetchActualBalance");
        }
      }, 5000)
    }
  },

  mounted() {
    this.isNavVisible()
    let url_lang = this.$route.params.lang
    loadLanguageAsync(url_lang)
    // this.applyLoc(url_lang)
    this.update_balance()
  },

  unmounted() {
    clearInterval(this.update_balance_var)
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