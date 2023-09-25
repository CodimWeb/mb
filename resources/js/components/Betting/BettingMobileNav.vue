<template>
  <div class="betting-mobile-nav">
    <div class="container container-fw betting-mobile-nav__container">
      <div class="flex-column" v-if="!languagePanelIsOpen">
        <router-link
            class="h3_medium betting-mobile-nav__item"
            :to="{name: 'betting'}"
            v-text="$t('Sport')"
        />
        <router-link
            class="h3_medium betting-mobile-nav__item"
            :to="{name: 'betting-live'}"
            v-text="'LIVE'"
        />
        <router-link
            class="h3_medium betting-mobile-nav__item"
            :to="{ name: 'betting-category', params: { category: 'sports', subcategory: 'esports' } }"
            v-text="$t('Esports')"/>
        <!--      <router-link-->
        <!--          class="h3_medium betting-mobile-nav__item"-->
        <!--          :to="{ name: 'betting-category', params: { category: 'sports', subcategory: 'crypto' } }"-->
        <!--          v-text="$t('Crypto bets')"/>-->
        <router-link
            class="h3_medium betting-mobile-nav__item"
            :to="{name: 'maran-token'}"
            v-text="$t('MARAN token')"/>
        <router-link
            class="h3_medium betting-mobile-nav__item"
            :to="{name: 'results'}"
            v-text="$t('Results')"/>

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

        <div class="betting-mobile-nav__divider"/>

        <div class="h3_medium flex-row betting-mobile-nav__language-switcher-btn" @click="toggleLanguagePanel">
          <img :src="language.flag" class="betting-mobile-nav__language-flag" :alt="language.name">
          {{ language.name }}
        </div>
      </div>
    </div>

    <div class="betting-mobile-nav__language-panel" v-if="languagePanelIsOpen">
      <div class="container container-fw betting-mobile-nav__container">
      <span class="betting-mobile-nav__language-item" v-if="languages && languages.length">
        <router-link
            v-for="item in languages"
            :to="{'name': $route.params.name, params: {lang: item.slug}}"
            :key="item.slug"
            class="h3_medium betting-mobile-nav__item"
            @click="selectLanguage(item.slug)">
          <img :src="item.flag" class="betting-mobile-nav__language-flag" :alt="item.name"/>
          {{ item.name }}
        </router-link>
      </span>
      </div>
    </div>

  </div>
</template>

<script>
import ru_flag from "../../../img/flags/ru.svg";
import en_flag from "../../../img/flags/en.svg";
import {isLoaded, loadLanguageAsync} from 'laravel-vue-i18n';
import ch_flag from "../../../img/flags/ch.svg";

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
А
      let langInterval = setInterval(() => {
        if (isLoaded(slug)) {
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