<template>
  <div class="betting-banner">
    <img
        src="../../../img/betting/betting-banner.jpg"
        class="betting-banner__image"
        alt=""/>
    <div class="container container-fw betting-banner__container">
      <h2 class="h2 betting-banner__heading" v-text="$t('Bonuses for new users!')"/>
      <span class="h4_regular betting-banner__description"
            v-text='$t("Use the promo code \"START\" when registering and get a 50 000 MARAN bonus to your account")'/>
<!--      <router-link :to="getBannerLink()" class="betting-button betting-button-big betting-banner__button" v-text="getBannerText()"/>-->
      <router-link
          v-if="user"
          :to="{name: 'dashboard'}"
          v-text="this.$t('Get bonus')"
          class="betting-button betting-button-big betting-banner-mobile__button" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },

  methods: {
    getBannerLink() {
      let btn_link;

      if(this.user) {
        btn_link = {
          name: 'dashboard'
        }
      }else {
        btn_link = {
          name: 'register'
        }
      }

      return btn_link;
    },
    getBannerText() {
      let btn_text;

      if(this.user) {
        btn_text = this.$t('Use a promo code')
      }else {
        btn_text = this.$t('Register')
      }

      return btn_text
    }
  }
}
</script>