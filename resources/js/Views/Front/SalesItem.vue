<template>
  <div class="sales-item" v-if="display">
    <div class="container flex-column sales-item__container">
      <img src="../../../img/sales/single-banner.png" class="sales-item__banner"/>

      <div class="t2_regular sales-item__date">c 14.07.2021 до 31.08.2021</div>
      <h1 class="h2 sales-item__title" v-text="post.title"/>
      <div class="sales-item__content" v-html="post.content"/>

      <div class="flex-row sales-item__after-content">
        <router-link :to="{name: 'sales'}" class="t1_regular sales-item__link" v-text="$t('Promotions')"/>
        <span class="flex-row t1_regular sales-item__share" v-text="$t('Share')"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        content: ''
      },
      display: true
    }
  },
  methods: {
    getData() {
      axios
          .get(`/api/actual/category/get/${this.$route.params.slug}/?language=${this.$route.params.lang}`)
          .then((res) => {
            this.post = res.data
            this.display = true
          })
          .catch((err) => {
            this.display = false
          })
    }
  },
  mounted() {
    this.getData()
  },
  watch: {
    '$route.path'() {
      this.getData()
    }
  }
}
</script>