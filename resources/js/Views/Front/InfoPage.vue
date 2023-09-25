<template>
  <div class="flex-column info-page" v-if="display">
    <div class="container flex-column info-page__container">
      <h1 v-text="post.title" class="info-page__heading"/>
      <div class="flex-column info-page__content" v-html="post.content"/>
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