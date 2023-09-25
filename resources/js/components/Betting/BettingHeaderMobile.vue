<template>
  <header class="betting-header-mobile">
    <div class="container container-fw betting-header-mobile__container">
      <router-link :to="{ name: 'landing' }" class="betting-header-mobile__box" title="Maran Bet">
        <img src="../../../img/header__logo.svg" class="betting-header-mobile__logo" alt="Maran Bet" />
      </router-link>

      <div class="flex-row header-mobile__buttons">
        <div v-if="!user" @click="$store.dispatch('web3Login')" class="header-metamask-login">
          <img src="../../../img/metamask-icon.svg" alt="">
        </div>
        <router-link v-else :to="{ name: 'dashboard' }" class="header-mobile__profile-btn" />
        <div @click="$emit('toggleMenu')" :class="{
          'header-mobile__menu-btn': true,
          'header-mobile__menu-btn--active': mobileMenuIsOpen
        }" />
      </div>

      <!--      <router-link :to="{name: 'login'}" class="betting-header-mobile__auth-icon" />-->
      <!-- <div
          :class="{
            'betting-header-mobile__burger-icon': true,
            'betting-header-mobile__burger-icon--active': mobileMenuIsOpen
          }"
          @click="$emit('toggleMenu')"
      /> -->
    </div>
  </header>
</template>

<script>
import {mapActions} from "vuex";

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  props: [
    'mobileMenuIsOpen'
  ],
  methods: {
        ...mapActions(["web3Login"]),
    },
}
</script>