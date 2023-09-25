<template>
  <div class="betting-banner-mobile">
    <img src="../../../img/betting/betting-banner__mobile.png" class="betting-banner-mobile__image" alt="" />
    <div class="container container-fw betting-banner-mobile__container">
      <h2 class="h3_semibold betting-banner-mobile__heading" v-text="$t('Bonuses for new users!')" />
      <p class="t2_regular betting-banner-mobile__description" v-text='$t("Use the promo code \"START\" when registering and get a 50 000 MARAN bonus to your account")'/>

<!--      <router-link-->
<!--          :to="getButtonLink()"-->
<!--          v-text="getButtonText()"-->
<!--          class="betting-button betting-button-big betting-banner-mobile__button" />-->
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
    // getButtonLink() {
    //   let link;
    //
    //   if(!this.user) {
    //     link = {name: 'register'}
    //   } else {
    //     link = {name: 'dashboard'}
    //   }
    //
    //   return link
    // },
    getButtonText() {
      let text;

      if(!this.user) {
        text = this.$t('Register')
      } else {
        text = this.$t('Get bonus')
      }

      return text
    }
  }
}
</script>