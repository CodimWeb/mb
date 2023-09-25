<template>
  <header class="dashboard-header">
    <div class="container container-fw flex-row dashboard-header__container">
      <router-link :to="{name: 'landing'}" class="betting-header__logo-box" title="Maran Bet">
        <img src="../../../img/header__logo.svg" class="betting-header__logo" alt="Maran Bet"/>
      </router-link>

      <div class="flex-row dashboard-header__buttons">
        <span class="flex-row t1_medium dashboard-header__button-user">
          {{ user.name }}
        </span>

        <span class="flex-row t1_medium dashboard-header__button-exit" @click="logout">
          {{ $t('Logout') }}
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push({ name: "betting" });
    },
  }
}
</script>
