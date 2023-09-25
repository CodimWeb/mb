<template>
    <div class="web3-banner">
        <img
            src="../../../img/web3-tech.jpg"
            class="web3-banner__image"
            alt=""/>
        <div class="web3-banner__content">
            <button v-if="!user" class="betting-button betting-button-icon betting-button-big auth-metamask-page__button center" @click="$store.dispatch('web3Login')">
                <img src="../../../img/metamask-icon.svg" alt="">
                {{$t('Connect via MetaMask')}}
            </button>
            <p class="web3-banner__text">
                <span>{{$t('web3-title')}}</span>
                <br>
                {{$t('web3-subtitle')}}
            </p>
        </div>
    </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    computed: {
        user() {
            return this.$store.getters.user;
        },
    },
    methods: {
        ...mapActions(["web3Login"]),
    }
}
</script>
