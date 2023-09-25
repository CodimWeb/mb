<template>
  <div class="flex-column dashboard-nav">

    <div class="flex-column dashboard-nav__menu">
        <router-link :to="{name: 'panel'}" class="flex-row t1_medium dashboard-nav__item">
            Панель
        </router-link>
        <router-link :to="{name: 'panel-promocodes'}" class="flex-row t1_medium dashboard-nav__item">
            Промокоды
        </router-link>
        <router-link :to="{name: 'panel-statistic-promocodes'}" class="flex-row t1_medium dashboard-nav__item">
            Статистика промокоды
        </router-link>
        <router-link :to="{name: 'statistic-tokens'}" class="flex-row t1_medium dashboard-nav__item">
            Статистика токенов
        </router-link>
        <router-link :to="{name: 'statistic-users-registration'}" class="flex-row t1_medium dashboard-nav__item">
            Статистика регистраций
        </router-link>
        <router-link :to="{name: 'statistic-bets'}" class="flex-row t1_medium dashboard-nav__item">
            Статистика ставок
        </router-link>
        <router-link :to="{name: 'statistic-losses'}" class="flex-row t1_medium dashboard-nav__item">
            Статистика проигрышей
        </router-link>
        <router-link :to="{name: 'statistic-wins'}" class="flex-row t1_medium dashboard-nav__item">
            Статистика выигрышей
        </router-link>
        <router-link :to="{name: 'statistic-users-rating'}"
                     class="flex-row t1_medium dashboard-nav__item"
                     :class="{'router-link-exact-active': $route.name === 'statistic-users-rating'}"
        >
            Рейтинг пользователей
        </router-link>
        <router-link :to="{name: 'statistic-withdraw'}" class="flex-row t1_medium dashboard-nav__item">
            Статистика вывода
        </router-link>
<!--      <router-link :to="{name: 'panel-replenishment'}" class="flex-row t1_medium dashboard-nav__item">-->
<!--        Пополнения-->
<!--      </router-link>-->
      <router-link :to="{name: 'panel-withdraw'}" class="flex-row t1_medium dashboard-nav__item">
        Вывод
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
