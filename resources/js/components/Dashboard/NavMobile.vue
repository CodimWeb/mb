<template>
  <div class="flex-column dashboard-nav-mobile">
    <div class="container container-fw dashboard-nav-mobile__container">
      <div class="flex-column dashboard-nav-mobile__list">
        <router-link
            :to="{name: 'dashboard'}"
            class="flex-row h3_medium_m dashboard-nav-mobile__item"
            v-text="$t('Account')"/>
        <router-link
            :to="{name: 'dashboard-wallet'}"
            class="flex-row h3_medium_m dashboard-nav-mobile__item"
            v-text="$t('Wallet')"/>
        <router-link
            :to="{name: 'dashboard-history'}"
            class="flex-row h3_medium_m dashboard-nav-mobile__item"
            v-text="$t('History')"/>
<!--        <router-link-->
<!--            :to="{name: 'dashboard-help'}"-->
<!--            class="flex-row h3_medium_m dashboard-nav-mobile__item"-->
<!--            v-text="$t('Help')"/>-->
        <router-link
            :to="{name: 'dashboard-results'}"
            class="flex-row h3_medium_m dashboard-nav-mobile__item"
            v-text="$t('Results')"/>
        <router-link
            :to="{name: 'dashboard-results'}"
            class="flex-row h3_medium_m dashboard-nav-mobile__item"
            v-text="$t('Favourites')"/>

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

          <router-link
              v-if="user.is_admin"
              :to="{name: 'panel'}"
              class="flex-row h3_medium_m dashboard-nav-mobile__item"
              v-text="$t('Admin panel')"/>

        <div class="betting-mobile-nav__divider"/>

      </div>

      <div class="flex-row h3_medium_m dashboard-nav-mobile__language-switcher" @click="toggleLanguagePanel">
        <img :src="language.flag" class="dashboard-nav-mobile__language-flag" :alt="language.name">
        {{ language.name }}
      </div>

      <div class="betting-mobile-nav__language-panel" v-if="languagePanelIsOpen">
        <div class="container container-fw betting-mobile-nav__container">
          <span class="betting-mobile-nav__language-item" v-if="languages && languages.length">
            <router-link
                v-for="item in languages"
                :to="{name: $route.params.name, params: {lang: item.slug}}"
                :key="item.slug"
                class="flex-row h3_medium_m betting-mobile-nav__item"
                @click="selectLanguage(item.slug)">
              <img :src="item.flag" class="betting-mobile-nav__language-flag" alt=""/>
              {{ item.name }}
            </router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ru_flag from "../../../img/flags/ru.svg";
import en_flag from "../../../img/flags/en.svg";
import {isLoaded, loadLanguageAsync} from "laravel-vue-i18n";
import ch_flag from "../../../img/flags/ch.svg";

export default {
  props: ['mobileMenuIsOpen'],
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
      this.$emit('changeLocation', slug)


      let langInterval = setInterval(() => {
        if(isLoaded(slug)) {
          this.$router.go(0)
          clearInterval(langInterval)
        }
      }, 200)
    },
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push({ name: "betting" });
    },
  },
  mounted() {
    let url_lang = this.$route.params.lang
    this.setLangIcon(url_lang)
  }
}
</script>
