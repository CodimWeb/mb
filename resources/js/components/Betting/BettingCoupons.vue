<template>
    <div class="betting-coupons__sticky-sidebar">
        <div class="betting-coupons">
            <div class="betting-coupons__event-info" v-if="getSelectedEvent">
                <div class="flex-row betting-events__filters betting-coupons__tab-nav">
                    <span class="t1_medium betting-events__filters-item betting-coupons__tab-nav-item" :class="{
                        'betting-events__filters-item--active': this.detailTab === 'details'
                    }" @click="this.detailTab = 'details'" v-text="$t('DETAILS')" />
                    <span class="t1_medium betting-events__filters-item betting-coupons__tab-nav-item" :class="{
                        'betting-events__filters-item--active': this.detailTab === 'lineups'
                    }" @click="this.detailTab = 'lineups'" v-text="'LINEUPS'" />
                </div>
                <div v-if="detailTab === 'details'">
                    <div class="betting-coupons__event-info-teams">
                        <div class="betting-coupons__event-info-team">
                            <div class="event-info-team__name t2_medium" v-text="getSelectedEvent.team_home.name" />
                            <div class="betting-coupons__event-info-match__team">
                                <div class="betting-coupons__event-info-match__team-logo"
                                    :style="{ 'margin-top': getSelectedEvent.start_stamp * 1000 > new Date().getTime() ? '0px' : '20px' }">
                                    <img v-if="getSelectedEvent.team_home.logo !== null"
                                        :src="'/storage/logos/' + getSelectedEvent.team_home.logo"
                                        class="event-info-team__logo" />
                                </div>
                            </div>
                        </div>
                        <div class="betting-coupons__event-info-team">
                            <div class="event-info-team__name t2_medium" v-text="getSelectedEvent.team_away.name" />
                            <div class="betting-coupons__event-info-match__team">
                                <div class="betting-coupons__event-info-match__team-logo"
                                    :style="{ 'margin-top': getSelectedEvent.start_stamp * 1000 > new Date().getTime() ? '0px' : '20px' }">
                                    <img v-if="getSelectedEvent.team_away.logo !== null"
                                        :src="'/storage/logos/' + getSelectedEvent.team_away.logo"
                                        class="event-info-team__logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="betting-coupons__event-info-match">
                        <div v-if="getSelectedEvent.start_stamp * 1000 > new Date().getTime()"
                            class="betting-coupons__event-info-match__center">
                            <div class="betting-coupons__event-info-match-time">{{
                                get_local_time_no_date(getSelectedEvent.start_stamp * 1000) }}</div>
                            <div class="betting-coupons__event-info-match-date">{{
                                get_local_date(getSelectedEvent.start_stamp * 1000) }}</div>
                            <div class="betting-coupons__event-info-match-timer">
                                {{ countdownDisplayTime }}
                            </div>
                        </div>
                        <div v-else class="betting-coupons__event-info-match__center">
                            <div class="betting-coupons__event-info-match-time">{{
                                get_local_time_no_date(getSelectedEvent.start_stamp * 1000) }}</div>
                            <div class="betting-coupons__event-info-match-date">{{ $t('Today') }}</div>
                            <div class="betting-coupons__event-info-match-score">{{ getSelectedEvent.score_home }} - {{
                                getSelectedEvent.score_away }}</div>
                        </div>
                    </div>

                    <!--                    <div v-else class="betting-coupons__event-info-match">-->
                    <!--                        <div class="betting-coupons__event-info-teams">-->
                    <!--                            <div class="betting-coupons__event-info-team">-->
                    <!--                                <div class="betting-coupons__event-info-match-time"-->
                    <!--                                     v-text="getSelectedEvent.score_home"/>-->
                    <!--                            </div>-->
                    <!--                            <div class="betting-coupons__event-info-team">-->
                    <!--                                <div class="betting-coupons__event-info-match-time"-->
                    <!--                                     v-text="getSelectedEvent.score_away"/>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->

                    <!--                    <div class="betting-coupons__event-info-teams">-->
                    <!--                        <div class="betting-coupons__event-info-team">-->
                    <!--                            <div class="event-info-team__name t2_medium" v-text="getSelectedEvent.team_home.name"/>-->
                    <!--                            <img v-if="getSelectedEvent.team_home.logo !== null"-->
                    <!--                                 :src="'/storage/logos/' + getSelectedEvent.team_home.logo"-->
                    <!--                                 class="event-info-team__logo"/>-->
                    <!--                        </div>-->
                    <!--                        <div class="betting-coupons__event-info-team">-->
                    <!--                            <div class="event-info-team__name t2_medium" v-text="getSelectedEvent.team_away.name"/>-->
                    <!--                            <img v-if="getSelectedEvent.team_away.logo !== null"-->
                    <!--                                 :src="'/storage/logos/' + getSelectedEvent.team_away.logo"-->
                    <!--                                 class="event-info-team__logo"/>-->
                    <!--                        </div>-->
                    <!--                    </div>-->

                    <div class="betting-coupons__event-info-teams">
                        <div class="betting-coupons__event-info-team">
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

                        <div class="betting-coupons__event-info-team">
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
                    </div>
                </div>

                <div v-if="detailTab === 'lineups'">
                    <div class="betting-coupons__event-info-teams">
                        <div class="betting-coupons__event-info-team">
                            <div class="betting-coupons__players" v-if="getSelectedEvent.team_home.players">
                                <div class="" v-for="player in getSelectedEvent.team_home.players" :key="player.name">
                                    <div class="betting-coupons__player" v-if="player.active">
                                        <span class v-text="player.jerseyNumber + '&nbsp;' + player.name"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="betting-coupons__event-info-team">
                            <div class="betting-coupons__players" v-if="getSelectedEvent.team_away.players">
                                <div class="" v-for="player in getSelectedEvent.team_away.players" :key="player.name">
                                    <div class="betting-coupons__player" v-if="player.active">
                                        <span class v-text="player.jerseyNumber + '&nbsp;' + player.name"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="betting-coupons__controls">
                <div :class="{
                    't1_medium': true,
                    'betting-coupons__control-btn': true,
                    'betting-coupons__control-btn--active': tab === 'coupons'
                }" @click="toggleTab('coupons')" v-text="$t('bet slip')" />
                <div :class="{
                    't1_medium': true,
                    'betting-coupons__control-btn': true,
                    'betting-coupons__control-btn--active': tab === 'bets'
                }" @click="toggleTab('bets')" v-text="$t('my bets')" />
            </div>
            <div v-if="tab === 'coupons' && getActualCoupons" class="betting-coupons__tab">
                <div v-if="status.couponsStatus && getActualCoupons.length"
                    class="flex-column betting-coupons__list default-scrollbar">
                    <div v-for="(coupon, index) in getActualCoupons" class="flex-column betting-coupons__item"
                        :key="coupon.id">
                        <div class="flex-row betting-coupons__item-row">
                            <span class="t3_regular betting-coupons__item-teams">{{ coupon.event.team_home.name + ' — ' +
                                coupon.event.team_away.name }}</span>
                            <div class="t3_regular flex-row betting-coupons_item-date">
                                {{ get_local_time(coupon.event.start_stamp * 1000) }}</div>
                        </div>
                        <div class="betting-coupons__item-grid">
                            <div class="betting-coupons__item-k">
                                <div class="betting-button betting-coupons__item-btn">{{ coupon.chance }}</div>
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
                    <div v-if="getActualCoupons.length" class="betting-coupons__hint">
                        {{ $t('Continue to add bets for multi bet or place bet') }}
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
                    <!--                        <button class="button-action-small betting-coupons__variant-btn" :class="{'button-action-small&#45;&#45;active': totalBet === 10}" @click="setSumm(10)">10</button>-->
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
                    <button v-if="user && getIsLoadingMakeBet" class="betting-button betting-button-big betting-coupons__add" v-text="$t('Loading')" />
                    <button v-if="user && !getIsLoadingMakeBet" class="betting-button betting-button-big betting-coupons__add" @click="createBetMethod" v-text="$t('Place a bet')" />

                    <!--                    <router-link class="betting-button betting-button-big betting-coupons__add"-->
                    <!--                                 :to="{ name: 'register' }"-->
                    <!--                                 v-text="$t('Register')" v-else/>-->
                </div>
            </div>
            <div class="betting-coupons__tab" v-if="tab === 'bets'">
                <div class="flex-column betting-coupons__lines default-scrollbar"
                    v-if="getActualBets && getActualBets.length">
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
                                        v-text="bet_rel.bet.event.team_home.name + ' — ' + bet_rel.bet.event.team_away.name" />
                                    <!--<div class="flex-row t3_regular betting-coupons_item-date" v-text="get_local_time(bet_rel.bet.event.start)" />-->
                                    <div class="flex-row t3_regular betting-coupons_item-date"
                                        v-text="get_local_time(bet_rel.bet.event.start_stamp * 1000)" />
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
                    <img src="../../../img/no-lines.svg" alt="" class="betting-coupons__no-coupons-image">
                    <span class="t2_regular no-coupons__text" v-text="$t('You don\'t have any active bets yet')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import { mapActions, mapGetters, mapMutations } from "vuex";
import StickySidebar from 'sticky-sidebar-v2'

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
            update_coupons_value: null,
            update_current_time: null,
            currentTime: null,
            detailTab: 'details',
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
        ...mapGetters(["getActualCoupons", "getActualBets", "getSelectedEvent", "getActualBalance", 'isSuccessBets', 'getIsLoadingMakeBet'])
    },
    methods: {
        ...mapMutations(['createActualBet', 'updateBalance', 'removeActualCoupon', 'cleanActualCoupon']),
        ...mapActions(['fetchActualCoupons', 'fetchActualBets', 'fetchActualBalance', 'updateActualCouponOdds']),
        setSumm(sum) {
            this.totalBet = sum
            this.calculate()
        },
        toggleTab(tab) {
            this.tab = tab
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
            if (this.getActualBalance.real_balance < this.totalBet) {
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

            let coupons = sessionStorage.getItem('actualCoupons') ? JSON.parse(sessionStorage.getItem('actualCoupons')) : []

            if(coupons.length == 0) {
                this.showError('Select match')
                return false
            }

            if (this.totalBet === 0) {
                this.showError(this.$t('Enter amount'))
                return false;
            }

            let data = {
                sum: this.totalBet,
                coupons: coupons
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
        get_local_time_no_date(time) {
            let time_utc = moment.utc(time);
            //   console.log('time_utc = ', time_utc)
            return moment(time_utc).local().format('HH:mm');
        },
        get_local_date(time) {
            let time_utc = moment.utc(time);
            return moment(time_utc).local().format('DD.MM.YYYY');
        },
        update_coupons_interval() {
            this.update_coupons_value = setInterval(() => {
                if (this.user) {
                    // Забираем купоны (черновики ставок)
                    // this.$store.dispatch("fetchActualCoupons");
                    //обновляем данные в черновиках ставок
                    this.$store.dispatch("updateActualCouponOdds");
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

        var sidebar = new StickySidebar('.betting-coupons__sticky-sidebar', {
            topSpacing: 90,
            bottomSpacing: 30,
            containerSelector: '.betting-grid__container',
            innerWrapperSelector: '.betting-coupons',
        });

        this.update_coupons_interval()
        this.countdown()
    },
    unmounted() {
        clearInterval(this.update_coupons_value);
        clearInterval(this.update_current_time);

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