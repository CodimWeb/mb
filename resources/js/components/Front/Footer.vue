<template>
  <footer class="footer">
    <div
        :class="{
          'container': true,
          'container-fw': this.$route.name !== 'landing',
          'footer__container': true
        }"
    >
      <div class="footer__column">
        <span class="h4_bold footer__column-heading footer__app-heading" v-text="$t('footer__app-heading')"/>

        <div class="footer__apps">
          <div class="footer__app-icon">
            <img src="../../../img/google-play.svg" alt="Google Play"/>
          </div>
          <div class="footer__app-icon">
            <img src="../../../img/app-store.svg" alt="App Store"/>
          </div>
        </div>

        <span class="footer__copy footer__copy--desktop t1_regular">© MARAN Global INC. {{ new Date().getFullYear() }}</span>
      </div>
      <div class="footer__column">
        <span class="h4_bold footer__column-heading footer__column-heading-info"
              v-text="$t('footer__column-heading-info')"/>
        <div
            class="footer__menu"
            v-if="menu_info && menu_info.length"
        >
          <router-link
              class="t1_regular footer__menu-item"
              v-for="item in menu_info"
              :key="item.id"
              v-text="item.title"
              :to="item.link"
          />
        </div>
      </div>
      <div class="footer__column">
        <span class="h4_bold footer__column-heading footer__column-heading-docs"
              v-text="$t('footer__column-heading-docs')"/>
        <div
            class="footer__menu"
            v-if="menu_documentation && menu_documentation.length"
        >
          <a v-if="!user" style="cursor: pointer" @click.prevent="$store.dispatch('web3Login')" class="t1_regular footer__menu-item">
            SWAP
          </a>
          <router-link v-else
                       class="t1_regular footer__menu-item"
                       v-text="SWAP"
                       :to="{name: 'dashboard'}"
          />
          <router-link
              class="t1_regular footer__menu-item"
              v-for="item in menu_documentation"
              :key="item.id"
              v-text="item.title"
              :to="item.link"
          />
        </div>
      </div>
      <div class="footer__column">
        <span class="h4_bold footer__column-heading footer__column-heading-socials"
              v-text="$t('footer__column-heading-socials')"/>

        <div class="footer__socials">
          <!-- <a :href="socials.vk" target="blank" class="fui-social fui-vk footer__social-icon"/> -->
          <a :href="socials.facebook" target="blank" class="fui-social fui-facebook footer__social-icon"/>
          <a :href="socials.instagram" target="blank" class="fui-social fui-instagram footer__social-icon"/>
          <a :href="socials.telegram" target="blank" class="fui-social fui-telegram footer__social-icon"/>
        </div>
        <span class="footer__copy footer__copy--mobile t1_regular">© MARAN Global INC. {{ new Date().getFullYear() }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
import {mapActions} from "vuex";

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  data() {
    return {
      socials: {
        vk: 'https://vk.com/',
        facebook: 'https://www.facebook.com/MaranBet-250439506864989/',
        instagram: 'https://www.instagram.com/maran_global/',
        telegram: 'https://t.me/maranbet_news'
      },
      menu_info: [
        {
          id: 0,
          title: this.$t('Maran Token'),
          link: {name: "maran-token"}
        },
        {
          id: 1,
          title: this.$t('Promotions'),
          link: {name: "sales"}
        },
        {
          id: 2,
          title: this.$t('About company'),
          link: {name: 'about-company'}
        },
        {
          id: 3,
          title: this.$t('Rules of the game'),
          link: {name: 'info-page', params: {slug: 'rules-of-the-game'}}
        }
      ],
      menu_documentation: [
        // {
        //   "id": 0,
        //   "title": "SWAP",
        //   "link": {name: 'dashboard'}
        // },
        {
          "id": 1,
          "title": this.$t("Terms of Use"),
          "link": {name: 'info-page', params: {slug: 'terms-of-use'}}
        },
        {
          "id": 2,
          "title": this.$t("Privacy Policy"),
          "link": {name: 'info-page', params: {slug: 'privacy-policy'}}
        },
        // {
        //   "id": 3,
        //   "title": "How do I get MARAN?",
        //   "link": "/get-maran-token/"
        // }
      ],
    }
  },
  methods: {
    ...mapActions(["web3Login"]),
  },
  mounted() {
    // this.menu_info = this.$t('footer__menu-info');
    // this.menu_documentation = this.$t('footer__menu-documentation');
  },
}
</script>