<template>
    <div class="betting-coupons-mobile">

        <div class="betting-coupons-mobile__coupon-container" v-if="getSelectedEvent">
            <div class="betting-coupon-mobile-wrapper">
                <div class="betting-coupon-mobile-wrapper__closer" @click="setSelectedEventNull()"></div>
                <div class="betting-coupon-mobile__event-info-teams">

                    <div class="betting-coupon-mobile__event-info-team">
                        <div class="event-info-team__name" v-text="getSelectedEvent.team_home.name" />
                        <div class="betting-coupon-mobile__event-info-match__team-logo team-home">
                            <img v-if="getSelectedEvent.team_home.logo !== null"
                                :src="'/storage/logos/' + getSelectedEvent.team_home.logo" class="event-info-team__logo" />
                        </div>
                    </div>

                    <div class="betting-coupon-mobile__event-info-team">
                        <div v-if="getSelectedEvent.start_stamp * 1000 > new Date().getTime()"
                            class="betting-coupon-mobile__event-info-match__center">
                            <div class="betting-coupon-mobile__event-info-match-time">{{
                                get_local_time_no_date(getSelectedEvent.start_stamp * 1000) }}</div>
                            <div class="betting-coupon-mobile__event-info-match-date">{{
                                get_local_date(getSelectedEvent.start_stamp *
                                    1000) }}</div>
                            <div class="betting-coupon-mobile__event-info-match-timer">
                                {{ countdownDisplayTime }}
                            </div>
                        </div>
                        <div v-else class="betting-coupon-mobile__event-info-match__center">
                            <div class="betting-coupon-mobile__event-info-match-time">{{
                                get_local_time_no_date(getSelectedEvent.start_stamp * 1000) }}</div>
                            <div class="betting-coupon-mobile__event-info-match-date">{{ $t('Today') }}</div>
                            <div class="betting-coupon-mobile__event-info-match-score">{{ getSelectedEvent.score_home }} -
                                {{
                                    getSelectedEvent.score_away }}</div>
                        </div>
                    </div>

                    <div class="betting-coupon-mobile__event-info-team">
                        <div class="event-info-team__name" v-text="getSelectedEvent.team_away.name" />
                        <div class="betting-coupon-mobile__event-info-match__team-logo team-away">
                            <img v-if="getSelectedEvent.team_away.logo !== null"
                                :src="'/storage/logos/' + getSelectedEvent.team_away.logo" class="event-info-team__logo" />
                        </div>
                    </div>
                </div>

                <div v-if="getSelectedEvent.odds && getSelectedEvent.odds.market_name === 'Full time'" :class="{
                    'betting-coupon-mobile__event-bets': true,
                    'betting-events-mobile__game-grid-2': true,
                    'betting-events-mobile__game-grid-2--half': !isEventHasDraw(getSelectedEvent)
                }">
                    <div>
                        <div :class="{
                            'button-action-02 betting-events-mobile__game-button': true,
                            'button-action-02--active': checkCoupon(getSelectedEvent.id, 1)
                        }" @click.stop="addCouponMethod({
    event: getSelectedEvent.id,
    odd_id: getOddId(getSelectedEvent),
    choice: 1,
    chance: getSelectedEvent.odds ? getSelectedEvent.odds.choice_home : '',
    type: 'team_home'
})" :key="`odd_${getSelectedEvent.id}_choice_1`">
                            <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('T1')" />
                            <div class="flex-row betting-events-mobile__game-button--right-part"
                                v-text="getSelectedEvent.odds ? getSelectedEvent.odds.choice_home : ' - '" />
                        </div>
                    </div>
                    <div v-if="isEventHasDraw(getSelectedEvent)">
                        <div :class="{
                            'button-action-02 betting-events-mobile__game-button': true,
                            'button-action-02--active': checkCoupon(getSelectedEvent.id, 3)
                        }" @click="addCouponMethod({
    event: getSelectedEvent.id,
    odd_id: getOddId(getSelectedEvent),
    choice: 3,
    chance: getSelectedEvent.odds ? getSelectedEvent.odds.choice_home : '',
    type: 'draw'
})" :key="`odd_${getSelectedEvent.id}_choice_3`">
                            <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('X')" />
                            <div class="flex-row betting-events-mobile__game-button--right-part"
                                v-text="getSelectedEvent.odds ? getSelectedEvent.odds.choice_draw : ' - '" />
                        </div>
                    </div>
                    <div>
                        <div :class="{
                            'button-action-02 betting-events-mobile__game-button': true,
                            'button-action-02--active': checkCoupon(getSelectedEvent.id, 2)
                        }" @click="addCouponMethod({
    event: getSelectedEvent.id,
    odd_id: getOddId(getSelectedEvent),
    choice: 2,
    chance: getSelectedEvent.odds ? getSelectedEvent.odds.choice_away : '',
    type: 'team_away'
})" :key="`odd_${getSelectedEvent.id}_choice_2`">
                            <div class="flex-row betting-events-mobile__game-button--left-part" v-text="$t('T2')" />
                            <div class="flex-row betting-events-mobile__game-button--right-part"
                                v-text="getSelectedEvent.odds ? getSelectedEvent.odds.choice_away : ' - '" />
                        </div>
                    </div>
                </div>

                <div class="betting-coupon-mobile__event-bets">
                    <div class="betting-coupon-mobile__event-bets__results">
                        <div class="betting-coupon-mobile__event-bets__results__section team">
                            <img v-if="getSelectedEvent.team_home.logo !== null"
                                :src="'/storage/logos/' + getSelectedEvent.team_home.logo" class="event-info-team__logo" />
                        </div>
                        <div class="betting-coupon-mobile__event-bets__results__section last_results">
                            <div class="betting-coupons__event-info-results">
                                <span v-for="result in getSelectedEvent.team_home.last_results" :key="result"
                                    class="betting-coupons__event-info-result-type" :class="{
                                        'win': result == 'W',
                                        'lose': result == 'L',
                                        'draw': result == 'D',
                                    }">
                                    {{ result }}
                                </span>
                            </div>
                        </div>
                        <div class="betting-coupon-mobile__event-bets__results__section points">
                        </div>
                    </div>
                    <div class="betting-coupon-mobile__event-bets__results">
                        <div class="betting-coupon-mobile__event-bets__results__section team">
                            <img v-if="getSelectedEvent.team_away.logo !== null"
                                :src="'/storage/logos/' + getSelectedEvent.team_away.logo" class="event-info-team__logo" />
                        </div>
                        <div class="betting-coupon-mobile__event-bets__results__section last_results">
                            <div class="betting-coupons__event-info-results">
                                <span v-for="result in getSelectedEvent.team_away.last_results" :key="result"
                                    class="betting-coupons__event-info-result-type" :class="{
                                        'win': result == 'W',
                                        'lose': result == 'L',
                                        'draw': result == 'D',
                                    }">
                                    {{ result }}
                                </span>
                            </div>
                        </div>
                        <div class="betting-coupon-mobile__event-bets__results__section points">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- кнопки для активации вкладок -->
        <div class="betting-coupons-mobile__static-buttons" v-if="!bettingCouponsIsVisible">
            <div v-text="$t('bet slip') + ` (${countCoupons()})`" @click="toggleTabAndSetVisible('coupons')"
                class="t1_semibold betting-button-mobile__control-btn" />
            <div v-text="$t('my bets') + ` (${countBets()})`" @click="toggleTabAndSetVisible('bets')"
                class="t1_semibold betting-button-mobile__control-btn" />
        </div>

        <!-- окно -->
        <div class="flex-column betting-coupons-mobile__container" v-if="bettingCouponsIsVisible">
            <!-- управление вкладками -->
            <div class="betting-coupons-mobile__window-buttons">
                <div v-text="$t('bet slip') + ` (${countCoupons()})`" @click="toggleTab('coupons')" :class="{
                    't1_semibold': true,
                    'betting-button-mobile__control-btn': true,
                    'betting-button-mobile__control-btn--active': tab === 'coupons'
                }" />
                <div v-text="$t('my bets') + ` (${countBets()})`" @click="toggleTab('bets')" :class="{
                    't1_semibold': true,
                    'betting-button-mobile__control-btn': true,
                    'betting-button-mobile__control-btn--active': tab === 'bets'
                }" />
            </div>

            <!-- купоны -->
            <div class="betting-coupons-mobile__tab default-scrollbar" v-if="tab === 'coupons' && getActualCoupons">
                <div class="flex-column betting-coupons__list" v-if="status.couponsStatus && getActualCoupons.length">
                    <div class="flex-column betting-coupons__item" v-for="(coupon, index) in getActualCoupons"
                        :key="coupon.id">
                        <div class="flex-row betting-coupons__item-row">
                            <span class="t3_regular betting-coupons__item-teams"
                                v-text="coupon.event.team_home.name + ' — ' + coupon.event.team_away.name" />
                            <div class="t3_regular betting-coupons_item-date"
                                v-text="get_local_time(coupon.event.start_stamp * 1000)" />
                        </div>
                        <div class="betting-coupons__item-grid">
                            <div class="betting-coupons__item-k">
                                <div class="betting-button betting-coupons__item-btn" v-text="coupon.chance" />
                            </div>
                            <div class="flex-column betting-coupons__item-winner">
                                <span class="t2_semibold betting-coupons__item-winner-name" v-text="showWinner(coupon)" />
                                <span class="t3_regular" v-text="$t('Winner')" />
                            </div>
                            <div class="betting-coupons__item-remove">
                                <button class="betting-coupons__item-remove-btn" @click="removeCouponMethod(index)" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="betting-coupons__no-coupons" v-else>
                    <img src="../../../img/no-coupons.svg" class="betting-coupons__no-coupons-image"
                        :alt="$t('To place a bet, register or log in')">
                    <span class="t2_regular no-coupons__text" v-if="user"
                        v-text="$t('To place a bet, select the coefficient in the event')" />
                    <span class="t2_regular no-coupons__text" v-else v-text="$t('To place a bet, register or log in')" />
                </div>
                <div class="flex-column betting-coupons__actions">
                    <div class="betting-coupons__sum" v-if="user">
                        <input type="number" class="input betting-coupons__input-sum" :placeholder="$t('Bid amount')"
                            min="0" v-model="totalBet" v-on:keyup="calculate()" />
                    </div>
                    <!--                    <div class="betting-coupons__variants" v-if="user">-->
                    <!--                        <button class="button-action-small betting-coupons__variant-btn" :class="{'betting-coupons__variant-btn': totalBet === 10}" @click="setSumm(10)">10</button>-->
                    <!--                        <button class="button-action-small betting-coupons__variant-btn" :class="{'button-action-small&#45;&#45;active': totalBet === 25}" @click="setSumm(25)">25</button>-->
                    <!--                        <button class="button-action-small betting-coupons__variant-btn" :class="{'button-action-small&#45;&#45;active': totalBet === 50}" @click="setSumm(50)">50</button>-->
                    <!--                        <button class="button-action-small betting-coupons__variant-btn" :class="{'button-action-small&#45;&#45;active': totalBet === 100}" @click="setSumm(100)">100</button>-->
                    <!--                    </div>-->
                    <div class="flex-column betting-coupons__rewards" v-if="user">
                        <div class="flex-row betting-coupons__reward-row">
                            <span class="t2_semibold" v-text="$t('Final coefficient')" />
                            <span class="t2_semibold" v-text="totalRate" />
                        </div>
                        <div class="flex-row betting-coupons__reward-row">
                            <span class="t2_semibold" v-text="$t('Possible winnings')" />
                            <span class="t2_semibold" v-text="possiblePrize" />
                        </div>
                    </div>

                    <button v-if="user && getIsLoadingMakeBet"
                            class="betting-button betting-button-big betting-coupons__add"
                            v-text="$t('Loading')" />
                    <button v-if="user && !getIsLoadingMakeBet"
                            class="betting-button betting-button-big betting-coupons__add"
                            @click="createBetMethod"
                            v-text="$t('Place a bet')" />
                    <!--          <router-link-->
                    <!--              class="betting-button betting-button-big betting-coupons__add"-->
                    <!--              :to="{name: 'register'}"-->
                    <!--              v-text="$t('Register')"-->
                    <!--              v-else/>-->
                </div>
            </div>

            <!-- ставки -->
            <div class="betting-coupons-mobile__tab default-scrollbar" v-if="tab === 'bets'">
                <div v-if="getActualBets && getActualBets.length">
                    <div class="flex-column betting-coupons__line" v-for="line in getActualBets" :key="line.id">
                        <div class="flex-row betting-coupons__line-name">
                            <span class="flex-row t2_medium betting-coupons__line-count" v-text="line.sum" />
                            <div class="t2_medium betting-coupons__line-length">
                                {{ $t('Line length') }}: {{ line.bets_rel !== undefined ? line.bets_rel.length : '' }}
                            </div>
                        </div>
                        <!-- вывод матчей -->
                        <div class="flex-column betting-coupons__line-item"
                            v-if="line.bets_rel !== undefined && line.bets_rel.length">
                            <div class="flex-column betting-coupons__item" v-for="bet_rel in line.bets_rel"
                                :key="bet_rel.id">
                                <div class="flex-row betting-coupons__item-row">
                                    <span class="t3_regular betting-coupons__item-teams"
                                        :text="bet_rel.bet.event.team_home.name + ' — ' + bet_rel.bet.event.team_away.name" />
                                    <div class="t3_regular betting-coupons_item-date"
                                        v-text="get_local_time(bet_rel.bet.event.start)" />
                                </div>
                                <div class="betting-coupons__item-grid">
                                    <div class="betting-coupons__item-k">
                                        <div class="betting-button betting-coupons__item-btn" v-text="bet_rel.bet.odd" />
                                    </div>
                                    <div class="flex-column betting-coupons__item-winner">
                                        <span class="t2_semibold betting-coupons__item-winner-name"
                                            v-text="showWinnerBet(bet_rel)" />
                                        <span class="t3_regular" v-text="$t('Winner')" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="betting-coupons__no-coupons" v-else>
                    <img src="../../../img/no-lines.svg" class="betting-coupons__no-coupons-image">
                    <span class="t2_regular no-coupons__text" v-text="$t('You don\'t have any active bets yet')" />
                </div>
            </div>
        </div>

        <!-- кнопка скрыть -->
        <div class="t1_medium flex-row betting-coupons-mobile__hide-btn" v-if="bettingCouponsIsVisible"
            @click="toggleTab(tab)">
            {{ $t('hide') }}
            <img src="../../../img/betting-coupons-mobile__hide-btn.svg" class="betting-coupons-mobile__hide-icon"
                :alt="$t('hide')" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import moment from "moment";

export default {
    data() {
        return {
            tab: 'coupons',
            totalBet: 0,
            totalRate: 0,
            possiblePrize: 0,
            status: {
                couponsStatus: false,
                betsStatus: false
            },
            bettingCouponsIsVisible: false,
            update_coupons_value: null,
            update_current_time: null,
            currentTime: null,
        }
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        isSuccessBets() {
            return this.$store.getters.isSuccessBets;
        },
        getIsLoadingMakeBet() {
            return this.$store.getters.isLoadingMakeBet
        },
        countdownDisplayTime() {
            let seconds = Math.floor((this.currentTime / 1000) % 60);
            let minutes = Math.floor((this.currentTime / 1000 / 60) % 60);
            let hours = Math.floor((this.currentTime / (1000 * 60 * 60)) % 24);
            let days = Math.floor(this.currentTime / (1000 * 60 * 60 * 24));

            let daysString = "";

            function zeroFormatter(num) {
                if (num < 0) return "00";
                return num < 10 ? "0" + num : num;
            }

            if (days > 1) {
                daysString = days + "days, ";
            } else if (days === 1) {
                daysString = days + "day, ";
            }

            let hoursString = zeroFormatter(hours);
            let minutesString = zeroFormatter(minutes);
            let secondsString = zeroFormatter(seconds);

            return daysString + hoursString + ":" + minutesString + ":" + secondsString;
        },
        ...mapGetters(["getActualCoupons", "getActualBalance", "getActualBets", "getBalance", "isSuccessBets", "getSelectedEvent", "getIsLoadingMakeBet"])
    },
    methods: {
        ...mapMutations(['createActualBet', 'updateBalance', 'removeActualCoupon', 'cleanActualCoupon', "addActualCoupon"]),
        ...mapActions(['fetchActualCoupons', 'fetchActualBets', 'fetchActualBalance', 'updateActualCouponOdds']),
        setSumm(sum) {
            this.totalBet = sum
            this.calculate()
        },
        setSelectedEventNull() {
            this.$store.dispatch("getEventData", null);
        },
        isEventHasDraw(event) {
            return event.odds.market_name === 'Full time' && event.odds.choice_draw;
        },
        checkCoupon(event_id, choice) {
            let selected = false;
            this.getActualCoupons.forEach((item) => {
                if (item.event.id === event_id && item.choice === choice) {
                    selected = true
                }
            })
            return selected
        },
        addCouponMethod(coupon) {
            if (!this.getActualBalance.real_balance) {
                this.showError(this.$t('Top up your balance to place a bet'))
                return false;
            }

            if (!this.user) {
                this.showError(this.$t('Log in to place a bet'))
                return false;
            }

            this.addActualCoupon(coupon)
        },
        getOddId(event) {
            let odd_id = null;
            if (event.odds && event.odds.market_name === 'Full time') {
                odd_id = event.odds.id
            }
            return odd_id
        },
        get_local_time(time) {
            let time_utc = moment.utc(time);
            return moment(time_utc).local().format('DD.MM.YYYY HH:mm');
        },
        get_local_time_no_date(time) {
            let time_utc = moment.utc(time);
            //   console.log('time_utc = ', time_utc)
            return moment(time_utc).local().format('HH:mm');
        },
        get_local_date(time) {
            let time_utc = moment.utc(time);
            return moment(time_utc).local().format('DD.MM.YYYY');
        },
        toggleTab(tab) {
            if (this.tab === tab) {
                this.bettingCouponsIsVisible = false;
            } else {
                this.tab = tab
            }
        },
        toggleTabAndSetVisible(tab) {
            this.toggleTab(tab)
            this.bettingCouponsIsVisible = true;
        },
        removeCouponMethod(index) {
            // this.$store.dispatch("removeActualCoupon", id);
            this.removeActualCoupon(index)
            this.calculate();
        },
        calculate() {
            this.totalRate = 0;
            this.getActualCoupons.forEach((coupon) => {
                if (this.totalRate === 0) {
                    this.totalRate += coupon.chance
                } else {
                    this.totalRate = this.totalRate + coupon.chance;
                }
            })
            this.totalRate = this.totalRate.toFixed(2);
            this.possiblePrize = (this.totalBet * this.totalRate).toFixed(2);
        },
        createBet() {
            if (this.getBalance.real_balance < this.totalBet) {
                this.showError(this.$t('Top up your balance to place a bet'))
                return false;
            }

            this.registerBet(this.totalBet)
            this.$store.dispatch("fetchActualCoupons")

            // display bets
            this.status.betsStatus = false
            this.tab = "bets"

            // update bets
            this.$store.dispatch("fetchActualBets")
            this.status.betsStatus = true

            // set coupons to default
            this.totalBet = 0
            this.calculate()

            // update user balance
            this.$store.dispatch("fetchActualBalance")
            this.updateBalance()
        },
        countCoupons() {
            return this.getActualCoupons.length;
        },
        countBets() {
            return this.getActualBets.length;
        },
        showWinner(coupon) {
            let winnerName;

            if (coupon.choice === 1) {
                winnerName = coupon.event.team_home.name;
            }

            if (coupon.choice === 2) {
                winnerName = coupon.event.team_away.name;
            }

            if (coupon.choice === 3) {
                winnerName = this.$t('Draw')
            }

            return winnerName;
        },
        showWinnerBet(bet_rel) {
            let winnerName;

            if (bet_rel.bet.choice === 1) {
                winnerName = bet_rel.bet.event.team_home.name;
            }

            if (bet_rel.bet.choice === 2) {
                winnerName = bet_rel.bet.event.team_away.name;
            }

            if (bet_rel.bet.choice === 3) {
                winnerName = this.$t('Draw')
            }

            return winnerName;
        },
        createBetMethod() {
            if (this.totalBet < 1) {
                this.showError(this.$t('The minimum bet amount is 1 MARAN'))
                return false;
            }

            let data = {
                sum: this.totalBet,
                coupons: sessionStorage.getItem('actualCoupons') ? JSON.parse(sessionStorage.getItem('actualCoupons')) : []
            }
            this.createActualBet(data)
            // in watch updateCouponAfterBets
        },
        updateCouponAfterBets() {
            if (this.isSuccessBets) {
                this.fetchActualCoupons()
                this.fetchActualBets()
                this.toggleTab('bets')
                this.fetchActualBalance()
                this.cleanActualCoupon()
                this.totalBet = 0
                this.totalRate = 0
                this.possiblePrize = 0
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
        get_local_time(time) {
            let time_utc = moment.utc(time);
            return moment(time_utc).local().format('DD.MM.YYYY HH:mm');
        },
        update_coupons_interval() {
            this.update_coupons_value = setInterval(() => {
                if (this.user) {
                    // Забираем купоны (черновики ставок)
                    this.$store.dispatch("fetchActualCoupons");
                    // Забираем ставки
                    this.$store.dispatch("fetchActualBets");
                }
            }, 10000);
        },
        countdown() {
            this.update_current_time = setInterval(() => {
                if (this.getSelectedEvent && this.getSelectedEvent.start) {
                    let time_utc = moment.utc(this.getSelectedEvent.start_stamp * 1000);
                    this.currentTime = moment(time_utc).local() - moment().toDate();
                }
            }, 1000);
        },
    },
    mounted() {
        if (this.user) {
            // Забираем купоны (черновики ставок)
            this.$store.dispatch("fetchActualCoupons");
            // Забираем ставки
            this.$store.dispatch("fetchActualBets");
        }

        this.status.couponsStatus = true
        this.status.betsStatus = true

        this.update_coupons_interval(),
            this.countdown()
    },
    unmounted() {
        clearInterval(this.update_coupons_value)
    },
    created: function () {
        this.moment = moment;
    },
    watch: {
        'isSuccessBets'() {
            this.updateCouponAfterBets();
        },
        'getActualCoupons'() {
            if(this.totalBet) {
                this.calculate();
            }
        }
    }
}
</script>