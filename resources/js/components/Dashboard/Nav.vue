<template>
  <div class="flex-column dashboard-nav">
    <div class="flex-column dashboard-nav__balance">
      <span class="t3_regular dashboard-nav__balance-text" v-text="$t('My balance')"/>
      <span class="flex-row h4_bold dashboard-nav__balance-value">
            {{ getActualBalance.real_balance }}
            <span v-if="getActualBalance.bonus">&nbsp;(+{{ getActualBalance.bonus }})</span>
      </span>
    </div>
    <div class="flex-column dashboard-nav__menu">
      <router-link :to="{name: 'dashboard'}" class="flex-row t1_medium dashboard-nav__item">
        <div class="dashboard-nav__icon dashboard-nav__icon-results"/>
        {{ $t('Account') }}
      </router-link>
      <router-link :to="{name: 'dashboard-wallet'}" class="flex-row t1_medium dashboard-nav__item">
        <div class="dashboard-nav__icon dashboard-nav__icon-wallet"/>
        {{ $t('Wallet') }}
      </router-link>
      <router-link :to="{name: 'dashboard-history'}"
                   class="flex-row t1_medium dashboard-nav__item"
                   :class="{'router-link-exact-active': $route.name === 'dashboard-history'}"
      >
        <div class="dashboard-nav__icon dashboard-nav__icon-history"/>
        {{ $t('History') }}
      </router-link>
<!--      <router-link :to="{name: 'dashboard-help'}" class="flex-row t1_medium dashboard-nav__item">-->
<!--        <div class="dashboard-nav__icon dashboard-nav__icon-help"/>-->
<!--        {{ $t('Help') }}-->
<!--      </router-link>-->
      <router-link :to="{name: 'dashboard-results'}"
                   class="flex-row t1_medium dashboard-nav__item"
                   :class="{'router-link-exact-active': $route.name === 'dashboard-results'}"
      >
        <div class="dashboard-nav__icon dashboard-nav__icon-results"/>
        {{ $t('Results') }}
      </router-link>
      <router-link :to="{name: 'dashboard-favourites'}" class="flex-row t1_medium dashboard-nav__item">
        <div class="dashboard-nav__icon dashboard-nav__icon-favorites"/>
        {{ $t('Favourites') }}
      </router-link>
      <a
          href="https://t.me/maranbet_support"
          class="flex-row t1_medium dashboard-nav__item"
          target="_blank"
      >
        <div class="dashboard-nav__icon dashboard-nav__icon-telegram"/>
        {{ $t('header__support') }}
      </a>

        <router-link v-if="user.is_admin" :to="{name: 'panel'}" target="_blank" class="flex-row t1_medium dashboard-nav__item">
            <div class="dashboard-nav__icon dashboard-nav__icon-results"/>
            {{ $t('Admin panel') }}
        </router-link>
    </div>
    <router-link :to="{name: 'betting'}" class="flex-row t1_medium dashboard-nav__back" v-text="$t('Back to betting')"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
    ...mapGetters(["getActualBalance"]),
  },
  mounted() {
    if (this.user) {
      this.$store.dispatch("fetchActualBalance");
    }
  }
}
</script>