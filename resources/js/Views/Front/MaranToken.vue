<template>
  <div class="flex-column maran-token-page">
    <div class="maran-token-page__banner"/>

    <div class="container maran-token-page__container">
      <div class="flex-column maran-token-page__content">

        <h1 class="h1 maran-token-page__heading" v-text="$t('maran-token-page__heading')"/>
        <span class="h3_semibold maran-token-page__description"
              v-text="$t('maran-token-page__description')"/>

        <div class="maran-token-page__grid">
          <div class="flex-column maran-token-page__grid-item">
            <img src="../../../img/maran-token-page/icon-01.svg" class="maran-token-page__item-icon"/>
            <div class="t1_regular maran-token-page__item-description" v-html="$t('maran-token-page__item-description-1')"/>
          </div>
          <div class="flex-column maran-token-page__grid-item">
            <img src="../../../img/maran-token-page/icon-02.svg" class="maran-token-page__item-icon"/>
            <div class="t1_regular maran-token-page__item-description" v-html="$t('maran-token-page__item-description-2')"/>
          </div>
          <div class="flex-column maran-token-page__grid-item">
            <img src="../../../img/maran-token-page/icon-03.svg" class="maran-token-page__item-icon"/>
            <div class="t1_regular maran-token-page__item-description" v-html="$t('maran-token-page__item-description-3')"/>
          </div>
          <div class="flex-column maran-token-page__grid-item">
            <img src="../../../img/maran-token-page/icon-04.svg" class="maran-token-page__item-icon"/>
            <div class="t1_regular maran-token-page__item-description" v-html="$t('maran-token-page__item-description-4')"/>
          </div>
        </div>

        <div class="flex-column maran-token-page__info">
          <div class="maran-token-page__info-grid">
            <div class="flex-column maran-token-page__info-item">
              <span class="t2_regular maran-token-page__info-title" v-text="$t('Title')"/>
              <span class="h3_semibold maran-token-page__info-description">MARAN</span>
            </div>
            <div class="flex-column maran-token-page__info-item">
              <span class="t2_regular maran-token-page__info-title" v-text="$t('Designation')"/>
              <span class="flex-row h3_semibold maran-token-page__info-description">
                <img src="../../../img/currencies/maran.svg" class="maran-token-page__info-icon" alt="MARAN"/>
                MARAN
              </span>
            </div>
            <div class="flex-column maran-token-page__info-item">
              <span class="t2_regular maran-token-page__info-title" v-text="$t('Token Type')"/>
              <span class="h3_semibold maran-token-page__info-description">ERC-20</span>
            </div>
            <div class="flex-column maran-token-page__info-item">
              <span class="t2_regular maran-token-page__info-title" v-text="$t('Total volume of the offer')"/>
              <span class="h3_semibold maran-token-page__info-description">100 000 000 000</span>
            </div>
          </div>
          <div class="maran-token-page__info-contract">
            <div class="flex-column maran-token-page__info-contract-container">
              <span class="t2_regular maran-token-page__info-title" v-text="$t('Contract address')"/>
              <span
                  class="h3_semibold maran-token-page__info-contract-row">0x5f9123d661459af6f398b6f1566f53222612541e</span>
            </div>
            <div class="maran-token-page__info-buttons">
              <div class="maran-token-page__info-button maran-token-page__info-button-copy" @click="copyWalletAddress()">
                <input
                    type="text"
                    value="0x5f9123d661459af6f398b6f1566f53222612541e"
                    v-on:focus="$event.target.select()"
                    ref="clone"
                    class="hidden_input"/>
              </div>
              <a
                  href="https://etherscan.io/address/0x5f9123d661459af6f398b6f1566f53222612541e"
                  class="maran-token-page__info-button maran-token-page__info-button-link"
                  target="_blank"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    copyWalletAddress() {
      this.$refs.clone.focus();
      document.execCommand('copy');
      this.showMessage(this.$t('The contract address has been copied'))
    },
    showMessage(text) {
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
    }
  }
}
</script>