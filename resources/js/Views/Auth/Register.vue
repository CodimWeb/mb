<template>
  <div class="flex-column auth-page">
    <div class="flex-column auth-page__container">
      <div class="auth-page__header">
        <h1 class="h3_semibold auth-page__heading" v-text="$t('Register')"/>
      </div>
      <Errors
          type="danger"
          v-if="errors"
          :content="errors"
          @close="errors = null"
      />
      <form @submit.prevent="register" class="auth-page__form">
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

        <div
            class="input-auth-group"
            @click="$refs.name.focus()"
        >
          <input
              type="text"
              :class="{
                'input-auth': true,
                'auth-page__input': true,
                'input-auth--filled': filled.name
              }"
              ref="name"
              v-model="name"
              autocomplete="off"
              @focusout="checkFilled('name')"
          />
          <div class="input-auth-name" v-text="$t('Nickname')"/>
        </div>

        <div
            class="input-auth-group"
            @click="$refs.password.focus()"
        >
          <input
              type="password"
              :class="{
                'input-auth': true,
                'auth-page__input': true,
                'input-auth--filled': filled.password
              }"
              ref="password"
              v-model="password"
              autocomplete="off"
              @focusout="checkFilled('password')"
              :disabled="busy"
          />
          <div
              class="input-auth-name"
              v-text="$t('Password')"/>
        </div>

        <div
            class="input-auth-group"
            @click="$refs.password_confirmation.focus()"
        >
          <input
              type="password"
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
          <div class="input-auth-name" v-text="$t('Repeat the password')"/>
        </div>

        <div class="t3_regular auth-page__instructions"
             v-text="$t('The password must contain numbers, special characters, as well as capital letters, and be at least 8 characters.')"/>
        <button class="betting-button betting-button-big auth-page__button" v-text="$t('Create an account')"/>
      </form>
      <div class="flex-row auth-page__links">
        <span class="t2_regular auth-page__link-text" v-text="$t('Already have an account?')"/>
<!--        <router-link-->
<!--            class="t2_regular auth-page__link"-->
<!--            :to="{name: 'login'}"-->
<!--            v-text="$t('Sign in')"/>-->
      </div>
    </div>
  </div>
</template>

<script>
import Errors from "../../components/Auth/Errors.vue";
export default {
  components: {Errors},
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: null,
      busy: false,
      filled: {
        email: false,
        password: false,
        password_confirmation: false,
        nickname: false
      }
    };
  },
  methods: {
    checkFilled(id) {
      if (id === 'email') {
        this.filled.email = this.email.length > 0;
      }
      if (id === 'password') {
        this.filled.password = this.password.length > 0;
      }
      if (id === 'password_confirmation') {
        this.filled.password_confirmation = this.password_confirmation.length > 0;
      }
      if (id === 'name') {
        this.filled.name = this.name.length > 0;
      }
    },
    async register() {
      this.busy = true;
      this.errors = null;
      this.success = "";

      if(this.password !== this.password_confirmation) {
        this.showError(this.$t('Passwords don\'t match'))
        return false
      }

      try {
        await this.$store.dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        }).then(() => {
          this.busy = false;
          this.$router.push({
            name: "dashboard",
            params: {
              lang: this.$route.params.lang
            }
          });
        });
      } catch (e) {
        console.log(e.data)
        this.errors = e.data;
        this.busy = false;
      }
    },
    showError(text) {
      this.$toast.error(text, {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
  },
}
</script>