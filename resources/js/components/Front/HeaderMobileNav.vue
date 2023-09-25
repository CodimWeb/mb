<template>
  <div class="header-mobile-nav">
    <div class="container container-fw flex-column header-mobile-nav__menu" v-if="!languagePanelIsOpen">
      <router-link
          :to="{name: 'betting'}"
          class="h3_medium_m header-mobile-nav__item"
          v-text="$t('header__nav-link-bets')"/>
      <router-link
          :to="{name: 'maran-token'}"
          class="h3_medium_m header-mobile-nav__item"
          v-text="$t('header__nav-link-token')"/>
      <router-link
          :to="{name: 'about-company'}"
          class="h3_medium_m header-mobile-nav__item"
          v-text="$t('header__nav-link-about-company')"/>
      <router-link
          :to="{name: 'sales'}"
          class="h3_medium_m header-mobile-nav__item"
          v-text="$t('header__nav-link-sales')"/>

      <div class="betting-mobile-nav__divider"/>

      <!-- logout button -->
      <a
          v-if="user"
          href="#"
          class="h3_medium_m header-mobile-nav__item"
          @click="logout"
          v-text="$t('Logout')"/>
      <a
          href="https://t.me/maranbet_support"
          class="h3_medium_m header-mobile-nav__item"
          v-text="$t('header__support')"
          target="_blank"
      />
      <button v-if="!user" class="betting-button betting-button-big auth-metamask-page__button center" style="margin-bottom: 25px" @click="$store.dispatch('web3Login')">
        {{$t('Connect via MetaMask')}}
      </button>

      <div class="betting-mobile-nav__divider"/>

    </div>
    <div class="container container-fw header-mobile-nav__language-container" v-else>
      <div class="header-mobile-nav__languages-list">
        <router-link
            v-for="item in languages"
            :to="{'name': $route.params.name, params: {lang: item.slug}}"
            :key="item.slug"
            class="h3_medium betting-mobile-nav__item"
            @click="selectLanguage(item.slug)">
          <img :src="item.flag" :alt="language.name" class="betting-mobile-nav__language-flag"/>
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <div class="container container-fw header-mobile-nav__language-select-container">
      <div
          class="flex-row h3_medium_m header-mobile-nav__language-select"
          @click="toggleLanguagePanel"
          v-if="!languagePanelIsOpen">
        <img :src="language.flag" :alt="language.name" class="betting-mobile-nav__language-flag"/>
        {{ language.name }}
      </div>
    </div>
  </div>
</template>

<script>
import ru_flag from "../../../img/flags/ru.svg";
import en_flag from "../../../img/flags/en.svg";
import ch_flag from "../../../img/flags/ch.svg"
import {isLoaded, loadLanguageAsync} from "laravel-vue-i18n";
import {mapActions} from "vuex";

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    }
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
      loadLanguageAsync(slug)
      this.setLangIcon(slug)
      this.toggleLanguagePanel()
      this.$emit('toggleMobileMenu')

      let langInterval = setInterval(() => {
        if(isLoaded(slug)) {
          this.$router.go(0)
          clearInterval(langInterval)
        }
      }, 200)
    },
    async logout() {
      await this.$store.dispatch("logout");
      // this.$router.push({ name: "login" });
      this.$router.push({ name: "betting" });
    },
  },
  mounted() {
    let url_lang = this.$route.params.lang
    this.setLangIcon(url_lang)
  }
}
</script>
