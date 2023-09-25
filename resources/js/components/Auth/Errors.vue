<template>
  <div class="t1_regular auth-pages-error">
    <span v-if="!content.errors">
      {{ content.message }}
    </span>
    <ul v-else>
      <li v-for="e in content.errors" :key="e.index">
        {{ e[0] }}
      </li>
    </ul>
    <div class="auth-pages-error__close" @click="$emit('close')"></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success'
    },
    content: {
      type: Object,
      default: ''
    }
  }

}
</script>