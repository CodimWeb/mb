<template>
  <div class="flex-column auth-page">
    <div class="flex-column auth-page__container">
      <div class="auth-page__header">
        <h1 class="h3_semibold auth-page__heading" v-text="$t('Personal account')"/>
      </div>
      <Errors
          type="danger"
          v-if="errors"
          :content="errors"
          @close="errors = null"
      />
      <form @submit.prevent="login" class="auth-page__form">
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
          <div class="input-auth-name" v-text="$t('Your e-mail')" />
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
          />
          <div class="input-auth-name" v-text="$t('Password')"/>
        </div>
        <button class="betting-button betting-button-big auth-page__button" v-text="$t('Sign in')"/>
      </form>
      <button class="betting-button betting-button-big auth-metamask-page__button center"
              style="margin: 5px auto;"
              v-text="$t('Log in with MetaMask')"
              @click="$store.dispatch('web3Login')" />
      <div class="flex-row auth-page__links">
<!--        <router-link-->
<!--            class="t2_regular auth-page__link"-->
<!--            :to="{name: 'register'}"-->
<!--            v-text="$t('Register')"/>-->
<!--        <router-link-->
<!--            class="t2_regular auth-page__link"-->
<!--            :to="{name: 'recovery'}"-->
<!--            v-text="$t('Password Recovery')"/>-->
      </div>
    </div>
  </div>
</template>

<script>
import Errors from "../../components/Auth/Errors.vue";
import {ethers} from "ethers";
import {mapActions} from "vuex";

export default {
  components: {
    Errors
  },
  data() {
    return {
      email: "",
      password: "",
      errors: null,
      busy: false,
      filled: {
        email: false,
        password: false
      }
    }
  },
  methods: {
    ...mapActions(["web3Login"]),
    checkFilled(id) {
      if (id === 'email') {
        this.filled.email = this.email.length > 0;
      }
      if (id === 'password') {
        this.filled.password = this.password.length > 0;
      }
    },
    async login() {
      this.busy = true;
      this.errors = null;
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        })

        if (this.$store.getters.user.role === 5) {
          this.$router.push({name: "panel"});
        } else {
          this.$router.push({name: "betting"});
        }

      } catch (e) {
        this.errors = e.data;
      }
      this.busy = false;
    },
  },
}
</script>