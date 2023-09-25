<template>
  <div class="flex-column dashboard-help" v-if="display">
    <h1
        class="h3_semibold dashboard__heading"
        v-text="$t('Help')"/>
    <div
        class="flex-column dashboard-help__list"
        v-if="data.length">
      <div
          class="dashboard-help__item"
          v-for="item in data" :key="item.id">
        <div
            class="dashboard-help__grid"
            @click="toggleQuestion(item.id)">
          <div
              class="flex-column dashboard-help__question h4_medium"
              v-text="item.title"/>
          <div :class="{
            'dashboard-help__icon': true,
            'dashboard-help__icon-active': item.active
          }"/>
          <div
              class="t1_regular dashboard-help__request"
              v-text="item.content"
              v-if="item.active"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      display: true
    }
  },
  methods: {
    makeQuestions() {
      this.data.forEach((item) => {
        item.active = false
      })
    },
    toggleQuestion(id) {
      this.data.forEach((item) => {
        if (id === item.id) {
          item.active = !item.active
        }
      })
    },
    async getQuestions() {
      await axios
          .get(`/api/actual/category/list/?language=${this.$route.params.lang}&category=dashboard-faq`)
          .then((res) => {
            this.data = res.data
            this.makeQuestions()
            this.display = true
          })
          .catch((err) => {
            this.display = false
          })
    }
  },
  mounted() {
    this.getQuestions()
  }
}
</script>