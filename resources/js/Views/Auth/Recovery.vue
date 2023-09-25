<template>
  <div class="flex-column auth-page">
    <div class="flex-column auth-page__container">
      <div class="auth-page__header">
        <h1 class="h3_semibold auth-page__heading" v-text="$t('Password Recovery')"/>
      </div>
      <div class="auth-page__success" v-if="success_message.length">
        {{ success_message }}
      </div>
      <Errors
          type="danger"
          v-if="errors"
          :content="errors"
          @close="errors = null"
      />
      <form @submit.prevent="recover" class="auth-page__form" v-if="!busy && !success_message.length">
        <div
            class="input-auth-group"
            @click="$refs.email.focus()"
        >
          <input
              type="text"
              :class="{
                'input-auth': true,
                'auth-page__input': true,
                'input-auth--filled': filled.email
              }"
              ref="email"
              v-model="email"
              autocomplete="off"
              @focusout="checkFilled('email')"
          />
          <div class="input-auth-name" v-text="$t('Your e-mail')"/>
        </div>
        <button class="betting-button betting-button-big auth-page__button" v-text="$t('Recover Password')"/>
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
      email: '',
      filled: {
        email: false
      },
      busy: false,
      errors: null,
      success_message: ''
    }
  },
  methods: {
    checkFilled(id) {
      if (id === 'email') {
        this.filled.email = this.email.length > 0;
      }
    },
    async recover() {
      this.busy = true;
      this.errors = null
      this.success_message = ''
      await axios.post('/api/forgot-password', {'email': this.email})
          .then((res) => {
            this.success_message = this.$t("We have sent the password recovery instructions to your Email")
          })
          .catch((err) => {
            this.errors = err.response.data
          })
      this.busy = false;
    }
  }
}
</script>
