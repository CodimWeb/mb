<template>
  <header class="header-mobile">
    <div class="container container-fw flex-row header-mobile__container">
      <router-link :to="{ name: 'landing' }">
        <img src="../../../img/header__logo.svg" class="header-mobile__logo" alt="Maran Bet" />
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

      <!-- <div
          :class="{
            'header-mobile__menu': true,
            'header-mobile__menu--active': mobileMenuIsOpen
          }"
          @click="$emit('toggleMenu')"/> -->
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

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
