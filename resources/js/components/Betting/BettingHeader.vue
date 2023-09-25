<template>
  <header class="betting-header">
    <div class="container container-fw betting-header__container">
      <router-link :to="{name: 'landing'}" class="betting-header__logo-box" title="Maran Bet">
        <img src="../../../img/header__logo.svg" class="betting-header__logo" alt="Maran Bet" v-if="windowWidth > 992"/>
        <img src="../../../img/header__logo--small.svg" class="betting-header__logo" alt="Maran Bet" v-else/>
      </router-link>

      <div class="betting-header__menu">
        <router-link
            class="flex-row t1_medium betting-header__link"
            :to="{name: 'betting'}"
            v-text="$t('Sport')"/>
        <router-link
            class="flex-row t1_medium betting-header__link betting-header__link--live"
            :to="{name: 'betting-live'}"
            v-text="'LIVE'"/>
        <router-link
            class="flex-row t1_medium betting-header__link"
            :to="{name: 'esports'}"
            v-text="$t('Esports')"/>
        <!--        <router-link-->
        <!--            class="flex-row t1_medium betting-header__link"-->
        <!--            to="#"-->
        <!--            v-text="$t('Crypto bets')"/>-->
        <router-link
            class="flex-row t1_medium betting-header__link"
            :to="{name: 'maran-token'}"
            v-text="$t('MARAN token')"/>
        <router-link
            class="flex-row t1_medium betting-header__link"
            :to="{name: 'results'}"
            v-text="$t('Results')"/>
      </div>

      <div class="header__language-switcher betting-header__language-switcher">
        <div class="t2_medium header__language-selected" @click="toggleLanguagePanel">
          <img :src="language.flag" class="header__language-flag"/>
          {{ language.name }}
          <svg
              :class="{
                  'header__language-carret': true,
                  'header__language-carret--reverse': languagePanelIsOpen
                }"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
            <path
                d="M10.8047 6.5286C10.5444 6.26825 10.1223 6.26825 9.86193 6.5286L8 8.39052L6.13807 6.5286C5.87772 6.26825 5.45561 6.26825 5.19526 6.5286C4.93491 6.78894 4.93491 7.21105 5.19526 7.4714L7.5286 9.80474C7.78894 10.0651 8.21105 10.0651 8.4714 9.80474L10.8047 7.4714C11.0651 7.21106 11.0651 6.78895 10.8047 6.5286Z"/>
          </svg>
        </div>

        <div :class="{ 'header__language-menu': true, 'header__language-menu--open': languagePanelIsOpen }"
             v-if="languages && languages.length">
          <router-link
              :to="{name: $route.params.name, params: {lang: item.slug}}"
              class="t2_medium header__language-item"
              v-for="item in languages"
              :key="item.slug"
              @click="selectLanguage(item.slug)">
            <img :src="item.flag" class="header__language-flag"/>
            {{ item.name }}
          </router-link>
        </div>
      </div>

      <div class="flex-row betting-header__user" v-if="user">
        <router-link :to="{name: 'dashboard'}" class="flex-row t1_medium betting-header__user-link">
            {{ getActualBalance.real_balance }}
            <span v-if="getActualBalance.bonus">&nbsp;(+{{ getActualBalance.bonus }})</span>
          <img src="../../../img/currencies/maran.svg" class="betting-header__maran-icon"/>
        </router-link>
        <router-link :to="{name: 'dashboard'}" class="flex-row t1_medium betting-header__user-link">
          {{ user.name }}
        </router-link>
      </div>
<!--      <div class="betting-header__login-routes" v-else>-->
<!--        <router-link :to="{name: 'login'}" class="t1_medium betting-header__login" v-text="$t('Sign in')"/>-->
<!--        <router-link :to="{name: 'register'}" class="betting-button betting-header__register" v-text="$t('Register')"/>-->
<!--      </div>-->
      <div class="betting-header__login-routes" v-else>
        <button v-if="!user" class="betting-button betting-button-big auth-metamask-page__button center" @click="$store.dispatch('web3Login')">
          {{$t('Connect via MetaMask')}}
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {useWindowSize} from "vue-window-size";
import ru_flag from "../../../img/flags/ru.svg";
import en_flag from "../../../img/flags/en.svg";
import ch_flag from "../../../img/flags/ch.svg";

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
    ...mapGetters(["getActualBalance"]),
  },
  data() {
    return {
      language: {
        slug: "ru",
        name: "RU",
        flag: ru_flag
      },
      languages: [
        {
          slug: "ru",
          name: "RU",
          flag: ru_flag
        },
        {
          slug: "en",
          name: "EN",
          flag: en_flag
        },
        {
          slug: "ch",
          name: "CH",
          flag: ch_flag
        },
      ],
      languagePanelIsOpen: false,
    }
  },
  methods: {
    ...mapActions(["web3Login"]),
    toggleLanguagePanel() {
      this.languagePanelIsOpen = !this.languagePanelIsOpen
    },
    setLangIcon(slug) {
      this.languages.forEach(item => {
        if (item.slug === slug) {
          this.language = item
        }
      })
    },
    selectLanguage(slug) {
      this.setLangIcon(slug)
      this.toggleLanguagePanel()
      this.$emit('changeLocation', slug)


      setTimeout(() => location.reload(), 500)
    },
  },
  mounted() {
    if (this.user) {
      this.$store.dispatch("fetchActualBalance");
    }
    let url_lang = this.$route.params.lang
    this.setLangIcon(url_lang)
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
