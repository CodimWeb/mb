<template>
    <div class="buy-currency">
        <div class="container buy-currency__container">
            <h2 class="h1 buy-currency__heading" v-text="$t('buy-currency__heading')"/>

            <div class="buy-currency__grid">
                <div class="flex-column buy-currency__item">
                    <div class="flex-column buy-currency__item-layer-1" v-if="!layer">
                        <img src="../../../img/icon_buy_01.svg" class="buy-currency__icon" alt="swap"/>
                        <span class="h3_semibold buy-currency__item-title">Swap</span>

                        <div class="flex-row buy-currency__target">
                            <div
                                class="flex-row t2_semibold buy-currency__target-item"
                                v-text="$t('for players')"/>
                            <div
                                class="flex-row t2_semibold buy-currency__target-item"
                                v-text="$t('commission') + ' 0%'"/>
                        </div>

                        <span
                            class="flex-row t1_semibold buy-currency__currencies-title"
                            v-text="$t('Acceptable currencies for exchange')"
                        />

                        <div class="flex-row buy-currency__list">
                            <div class="flex-row buy-currency__list-item">
                                <img
                                    src="../../../img/coins/usdt-ghost.svg"
                                    class="buy-currency__coin"
                                    style="width: 28px; height: 28px"
                                    alt="tether"/>
                                USDT
                            </div>
                            <div class="flex-row buy-currency__list-item">
                                <img
                                    src="../../../img/coins/eth-ghost.svg"
                                    class="buy-currency__coin"
                                    style="width: 28px; height: 28px"
                                    alt="btc"/>
                                ETH
                            </div>
                            <!--              <div class="flex-row buy-currency__list-item">-->
                            <!--                +198-->
                            <!--              </div>-->
                        </div>
                    </div>

                    <span
                        v-if="layer"
                        class="flex-row t1_semibold buy-currency__currencies-title buy-currency__currencies-title--layer-2"
                        v-text="$t('Acceptable currencies for exchange')"
                    />

                    <div class="flex-column default-scrollbar buy-currency__item-layer-2" v-if="layer">
                        <div class="flex-row buy-currency__currencies-row buy-currency__currencies-row-new">
                            <div class="flex-row buy-currency__list-item buy-currency__list-item-new">
                                <img
                                    src="../../../img/coins/usdt-ghost.svg"
                                    class="buy-currency__coin"
                                    alt="USDT"/>
                                <span class="buy-currency__coin-name">USDT</span>
                            </div>
                        </div>
                        <div class="flex-row buy-currency__currencies-row buy-currency__currencies-row-new">
                            <div class="flex-row buy-currency__list-item buy-currency__list-item-new">
                                <img
                                    src="../../../img/coins/eth-ghost.svg"
                                    class="buy-currency__coin"
                                    alt="ETH"/>
                                <span class="buy-currency__coin-name">ETH</span>
                            </div>
                        </div>
                        <div class="flex-row buy-currency__currencies-row buy-currency__currencies-row-new">
                            <div class="flex-row buy-currency__list-item buy-currency__list-item-new">
                                <img
                                    src="../../../img/coins/link-ghost.svg"
                                    class="buy-currency__coin"
                                    alt="LINK"/>
                                <span class="buy-currency__coin-name">LINK</span>
                            </div>
                        </div>
                        <div class="flex-row buy-currency__currencies-row buy-currency__currencies-row-new">
                            <div class="flex-row buy-currency__list-item buy-currency__list-item-new">
                                <img
                                    src="../../../img/coins/uni-ghost.svg"
                                    class="buy-currency__coin"
                                    alt="UNI"/>
                                <span class="buy-currency__coin-name">UNI</span>
                            </div>
                        </div>
                        <div class="flex-row buy-currency__currencies-row buy-currency__currencies-row-new">
                            <div class="flex-row buy-currency__list-item buy-currency__list-item-new">
                                <img
                                    src="../../../img/coins/ftm-ghost.svg"
                                    class="buy-currency__coin"
                                    alt="FTM"/>
                                <span class="buy-currency__coin-name">FTM</span>
                            </div>
                        </div>
                    </div>

                    <span
                        class="t1_semibold buy-currency__item-show-all"
                        @click="changeLayer(!layer)"
                        v-text="layer ? $t('Hide all currencies'): $t('Show all currencies')"/>

                    <a v-if="!user"
                       class="fui-button buy-currency__button fui-button--sm"
                       v-text="$t('buy-currency__button')"
                       @click.prevent="$store.dispatch('web3Login')"
                    />
                    <router-link v-else
                       class="fui-button buy-currency__button fui-button--sm"
                       v-text="$t('buy-currency__button')"
                       :to="{name: 'dashboard'}"
                    />

<!--                    <button v-else-->
<!--                            class="fui-button buy-currency__button fui-button&#45;&#45;sm"-->
<!--                            @click="$store.dispatch('web3Login')">{{ $t('buy-currency__button') }}</button>-->

                </div>

                <div class="flex-column buy-currency__item">
                    <img src="../../../img/icon_buy_02.svg" class="buy-currency__icon" alt="coinsbit"/>
                    <span class="h3_semibold buy-currency__item-title">Exchange Coinsbit</span>

                    <div class="flex-row buy-currency__target">
                        <div
                            class="flex-row t2_semibold buy-currency__target-item"
                            v-text="$t('for traders')"/>
                        <div
                            class="flex-row t2_semibold buy-currency__target-item"
                            v-text="$t('commission') + ' 0%'"/>
                    </div>

                    <span
                        class="flex-row t1_semibold buy-currency__currencies-title"
                        v-text="$t('Available currencies for purchase')"
                    />

                    <div class="flex-row buy-currency__list">
                        <div class="flex-row buy-currency__list-item">
                            <img
                                src="../../../img/coins/usdt-ghost.svg"
                                class="buy-currency__coin"
                                style="width: 28px; height: 28px"
                                alt="tether"/>
                            USDT
                        </div>
                        <div class="flex-row buy-currency__list-item">
                            <img
                                src="../../../img/coins/eth-ghost.svg"
                                class="buy-currency__coin"
                                style="width: 28px; height: 28px"
                                alt="btc"/>
                            ETH
                        </div>
                        <!--            <div class="flex-row buy-currency__list-item">-->
                        <!--              +198-->
                        <!--            </div>-->
                    </div>

                    <a href="https://coinsbit.io/trade/MARAN_USDT"
                       class="fui-button buy-currency__button buy-currency__mt fui-button--sm"
                       target="_blank"
                       v-text="$t('Go to the exchange')"/>
                </div>
            </div>
        </div>
    </div>
    <div class="buy-currency__banner">
        <img src="../../../img/buy-currency-banner.jpg" alt="">
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    computed: {
        user() {
            return this.$store.getters.user;
        },
    },
    data() {
        return {
            layer: 0
        }
    },
    methods: {
        ...mapActions(["web3Login"]),
        changeLayer(layer) {
            this.layer = layer
        }
    }
}
</script>
