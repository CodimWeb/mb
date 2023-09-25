<template>
  <div class="dashboard-main">
    <h1 class="h3_semibold dashboard__heading" v-text="$t('Account')"/>

    <!--    для верификации почты -->
    <!--    <p class="block h4_medium">Email address</p>-->
    <!--    <div class="flex-column" v-if="!user.email_verified_at">-->
    <!--      <span class="h-6" style="color: red" v-text="$t('You Email address is not verified')"/>-->
    <!--    </div>-->

    <p>&nbsp;</p>

    <div class="flex-row dashboard-main__actions">
      <div class="flex-row dashboard-main__email-container">
        <div class="input-auth-group">
          <input
              type="text"
              :class="{
                'input-auth': true,
                'dashboard-main__promo-input': true,
                'input-auth--filled': user.email.indexOf('@metamask.io') === -1
              }"
              v-model="email"
              ref="email"
          />
          <span class="input-auth-name" @click="$refs.email.focus()" v-text="$t('Enter email')"/>
        </div>
        <button class="betting-button dashboard-main__email-button" v-if="user.email.indexOf('@metamask.io') !== -1" @click="addEmail()"
                v-text="$t('Add email')"/>
<!--        кнопка верификации пока не нужна-->
<!--        <button class="betting-button dashboard-main__email-button" v-if="!user.email_verified_at && user.email !== ''"-->
<!--                @click="sendVerificationEmail()" v-text="$t('Verify')"/>-->
      </div>
    </div>

    <p>&nbsp;</p>
    <p class="block h4_medium">{{ $t('Wallet address') }}</p>
    <div class="flex-column" v-if="!user.wallet">
      <span class="h-6" style="color: red" v-text="$t('Please add your wallet address')"/>
    </div>
    <p>&nbsp;</p>

    <div class="flex-row dashboard-main__actions">
      <div class="flex-row dashboard-main__wallet-container">
        <div class="input-auth-group">
          <input
              type="text"
              :class="{
                'input-auth': true,
                'dashboard-main__promo-input': true,
                'input-auth--filled': user.wallet !== null && user.wallet !== ''
              }"
              v-model="wallet"
              ref="wallet"
          />
          <span class="input-auth-name" @click="$refs.wallet.focus()" v-text="$t('Enter wallet')"/>
        </div>
        <button class="betting-button dashboard-main__wallet-button" @click="walletSubmit()" v-text="$t('Save')"/>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/Dashboard/Nav.vue";
import {mapGetters} from "vuex";
import {useWindowSize} from "vue-window-size";
import axios from "axios";

export default {
  data() {
    return {
      email: null,
      wallet: null,
      errorEmail: ''
    }
  },
  methods: {
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
    showSuccess(text) {
      this.$toast.success(text, {
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
    sendVerificationEmail() {
      axios.post('/api/verify-email', {email: this.email})
          .then((res) => {
            if (res.data.success === false) {
              this.showError("Something went wrong")
            } else {
              this.showSuccess("Email was sent successfully")
            }

            setTimeout(function () {
              window.location.reload();
            }, 3000);
          })
          .catch((err) => {
            this.showError("Error")
            if (err.statusCode === 401) {
              this.showError("Please, re-auth first")
            }

            setTimeout(function () {
              window.location.reload();
            }, 3000);
          })
    },
    walletSubmit() {
      if (this.wallet === null || !this.wallet.length) {
        this.showError("Input your wallet address")
        return false;
      }

      axios.post('/api/wallet/submit', {wallet: this.wallet})
          .then((res) => {
            if (res.data.success === false) {
              this.showError("Something went wrong")
            } else {
              this.showSuccess("Wallet address was added successfully")
            }

            setTimeout(function () {
              window.location.reload();
            }, 3000);
          })
          .catch((err) => {
            this.showError("Error")
            if (err.statusCode === 401) {
              this.showError("Please, re-auth first")
            }

            setTimeout(function () {
              window.location.reload();
            }, 3000);
          })
    },
    addEmail() {
      if(this.email === '') {
        this.errorEmail = 'Enter email'
        this.showError(this.errorEmail)
      }
      else {
        let re = /\S+@\S+\.\S+/;
        if(!re.test(this.email)) {
          this.errorEmail = 'Invalid email'
          this.showError(this.errorEmail)
        }
        else {
          axios.post('/api/add-email', {email: this.email}).then((res) => {
            this.user.email = this.email
          })
          .catch((err) => {
            console.log(err)
            this.showError(err.response.data.message)
          })
        }
      }

    }
  },
  components: {
    Nav,
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    ...mapGetters([]),
  },
  mounted() {
    if (this.user) {
      this.email = this.user.email.indexOf('@metamask.io') === -1 ? this.user.email : '';
      this.wallet = this.user.wallet;
    }
  },
  setup() {
    const {width, height} = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
}
</script>
