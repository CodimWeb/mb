<template>
  <div class="dashboard-withdraw-funds">
    <div class="dashboard-withdraw-funds__overlay" @click="$emit('toggleWithdraw')"/>
    <div class="flex-column dashboard-withdraw-funds__window">
      <div class="dashboard-withdraw-funds__close" @click="$emit('toggleWithdraw')"/>
      <div class="flex-column dashboard-withdraw-funds__success" v-if="success">
        <div
            class="flex-row h3_medium dashboard-withdraw-funds__success-heading"
            v-text="$t('The withdrawal request has been sent')"
        />
        <div
            class="flex-row t1_regular dashboard-withdraw-funds__success-text"
            v-text="$t('The funds will be transferred to your wallet within one business day')"
        />
        <img
            src="../../../img/withdraw-funds-success.svg"
            :alt="$t('The withdrawal request has been sent')"
            class="dashboard-withdraw-funds__success-image">
        <button
            class="betting-button dashboard-withdraw-funds__success-button"
            v-text="$t('Close')"
            @click="$emit('toggleWithdraw')"/>
      </div>
      <div class="flex-column dashboard-withdraw-funds__step" v-else>
        <span class="h4_bold dashboard-withdraw-funds__heading" v-text="$t('Withdrawal of funds')"/>
        <div class="input-auth-group dashboard-withdraw-funds__input-group">
          <input type="number"
                 :class="{
                'input-auth': true,
                'input-auth--filled': filled.amount
              }"
                 v-model="amount"
                 ref="amount"
                 min="1"
                 step="0.01"
                 @focusout="checkFilled('amount')"/>
          <div class="input-auth-name" v-text="$t('Withdrawal amount') + ' (MARAN)'" @click="$refs.amount.focus()"/>
        </div>
        <div class="input-auth-group dashboard-withdraw-funds__input-group">
          <input type="text"
                 :class="{
                'input-auth': true,
                'input-auth--filled': filled.wallet
             }"
                 ref="wallet"
                 v-model="wallet"
                 @focusout="checkFilled('wallet')"/>
          <div class="input-auth-name" v-text="$t('Wallet for withdrawal') + ' (MARAN)'" @click="$refs.wallet.focus()"/>
        </div>
        <div class="flex-row dashboard-withdraw-funds__submit-row">
          <button
              class="betting-button dashboard-withdraw-funds__submit-button"
              v-text="$t('Withdraw funds')"
              @click="sendOrder"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: null,
      wallet: '',
      filled: {
        amount: false,
        wallet: false
      },
      success: false
    }
  },
  methods: {
    checkFilled(field) {
      if (field === 'wallet') {
        this.filled.wallet = this.wallet.length;
      }
      if (field === 'amount') {
        this.filled.amount = this.amount >= 1;

        if (this.amount < 1) {
          this.amount = null
          this.showError(this.$t('The minimum withdrawal amount is 1 MARAN'))
        }
      }
    },
    sendOrder() {
      if (!this.filled.amount || !this.filled.wallet) {
        this.showError($t('Check that the fields are filled in correctly'))
        return false
      }

      axios.post(`/api/actual/withdraw-funds/new`, {
        sum: this.amount,
        wallet: this.wallet
      }).then((res) => {
        this.success = !this.success
        this.$store.dispatch("fetchActualBalance");
      }).catch((err) => {
        this.showError($t('An error occurred while submitting the form'))
      })
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
  }
}
</script>