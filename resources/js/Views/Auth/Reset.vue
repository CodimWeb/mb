<template>
  <div class="flex-column auth-page">
    <div class="flex-column auth-page__container">
      <div class="auth-page__header">
        <h1 class="h3_semibold auth-page__heading" v-text="$t('Reset password')"/>
      </div>
      <Errors
          type="danger"
          v-if="errors"
          :content="errors"
          @close="errors = null"
      />
      <div class="auth-page__success" v-if="success_message.length">
        {{ success_message }}
      </div>
      <form @submit.prevent="reset" v-if="!busy" class="auth-page__form">
        <div
            class="input-auth-group"
            @click="$refs.password.focus()"
        >
          <input
              type="text"
              :class="{
                'input-auth': true,
                'auth-page__input': true,
                'input-auth--filled': filled.password
              }"
              ref="password"
              v-model="password"
              autocomplete="off"
              @focusout="checkFilled('password')"
          />
          <div class="input-auth-name" v-text="$t('Password')"/>
        </div>
        <div
            class="input-auth-group"
            @click="$refs.password_confirmation.focus()"
        >
          <input
              type="text"
              :class="{
                'input-auth': true,
                'auth-page__input': true,
                'input-auth--filled': filled.password_confirmation
              }"
              ref="password_confirmation"
              v-model="password_confirmation"
              autocomplete="off"
              @focusout="checkFilled('password_confirmation')"
          />
          <div class="input-auth-name" v-text="$t('Password confirmation')"/>
        </div>
        <button class="betting-button betting-button-big auth-page__button" v-text="$t('Reset Password')"/>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Errors from "../../components/Auth/Errors.vue";

export default {
  components: {
    Errors
  },
  data() {
    return {
      password: '',
      password_confirmation: '',
      filled: {
        password: false,
        password_confirmation: false
      },
      busy: false,
      errors: null,
      success_message: ''
    }
  },
  methods: {
    checkFilled(id) {
      if (id === 'password') {
        this.filled.password = this.password.length > 0;
      }
      if (id === 'password_confirmation') {
        this.filled.password_confirmation = this.password_confirmation.length > 0;
      }
    },
    async reset() {
      this.busy = true;
      this.errors = null
      this.success_message = ''
      await axios.post('/api/reset-password', {
        'email': this.$route.query.email,
        'token': this.$route.params.token,
        'password': this.password,
        'password_confirmation': this.password_confirmation
      }).then((res) => {
        this.success_message = this.$t('Redirecting')
        // setTimeout(() => {
        //   this.$router.push({name: 'login'})
        // }, 1000)
      }).catch((err) => {
        this.errors = err.response.data
      })
      this.busy = false;
    }
  }
}
</script>
