<template>
  <div class="sales-category" v-if="display">
    <div class="container sales-category__container">
      <h1 class="h2 sales-category__heading" v-text="$t('Promotions')"/>

      <div class="flex-column sales-category__catalog" v-if="promotions.length">

        <div class="sales-category__item" v-for="item in promotions">
          <div class="sales-category__preview">
            <img
                src="../../../img/sales/1.png"
                :alt="item.title"/>
          </div>
          <div class="flex-column sales-category__content">
            <div
                class="t3_regular sales-category__item-date"
                v-text="'c 14.07.2021 до 31.08.2021'"/>
            <div
                class="h3_semibold sales-category__item-title"
                v-text="item.title"/>
            <div
                class="t1_regular sales-category__item-description"
                v-text="item.excerpt"/>
            <router-link
                :to="{name: 'sales-item', params: {slug: item.slug}}"
                class="betting-button"
                v-text="$t('More')"/>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promotions: [],
      display: true
    }
  },
  methods: {
    getData() {
      axios
          .get(`/api/actual/category/list/?language=${this.$route.params.lang}&category=promotions`)
          .then((res) => {
            this.promotions = res.data
          })
          .catch((err) => {
            this.display = false
          })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
