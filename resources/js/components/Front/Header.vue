<template>
    <header class="header">
        <div class="header__row header__small-row">
            <div class="container header__small-row-container">
                <div class="header__language-switcher">
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
                <div class="t2_medium header__additional-links">
                    <div v-if="!user" @click="$store.dispatch('web3Login')" class="header-metamask-login">
                        <img src="../../../img/metamask-icon.svg" alt="">
                    </div>
                    <a href="https://coinsbit.io/trade/MARAN_USDT" class="header__additional-link header__exchange" target="_blank">
                        <img src="../../../img/header__coinsbit.svg" class="header__additional-link-icon"
                             alt="CoinsBit"/>
                        {{ $t('header__exchange') }}
                    </a>
                    <a href="https://t.me/maranbet_support" class="header__additional-link header__support"
                       target="_blank">
                        <img src="../../../img/support-header-icon.svg" class="header__additional-link-icon"
                             alt="Telegram"/>
                        {{ $t('header__support') }}
                    </a>
                </div>
            </div>
        </div>
        <div class="header__row header__big-row">
            <div class="container header__big-row-container">
                <router-link :to="{name: 'landing'}">
                    <img src="../../../img/header__logo.svg" class="header__logo" alt="Maran Bet"/>
                </router-link>

                <ul class="header__nav-menu">
                    <li>
                        <router-link
                            :to="{name: 'betting'}"
                            class="t1_medium header__nav-link header__nav-link-bets"
                            v-text="$t('header__nav-link-bets')"/>
                    </li>
                    <li>
                        <router-link
                            :to="{name: 'maran-token'}"
                            class="t1_medium header__nav-link header__nav-link-token"
                            v-text="$t('header__nav-link-token')"/>
                    </li>
                    <li>
                        <router-link
                            :to="{name: 'about-company'}"
                            class="t1_medium header__nav-link header__nav-link-about-company"
                            v-text="$t('header__nav-link-about-company')"/>
                    </li>
                    <li>
                        <router-link
                            :to="{name: 'sales'}"
                            class="t1_medium header__nav-link header__nav-link-sales"
                            v-text="$t('header__nav-link-sales')"/>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import ru_flag from "../../../img/flags/ru.svg"
import en_flag from "../../../img/flags/en.svg"
import ch_flag from "../../../img/flags/ch.svg"
import {mapActions, mapGetters} from "vuex";


export default {
    computed: {
        user() {
            return this.$store.getters.user;
        },
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
        let url_lang = this.$route.params.lang
        this.setLangIcon(url_lang)
    }
}
</script>