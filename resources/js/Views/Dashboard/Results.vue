<template>
    <div class="dashboard-results">
        <h1
            class="h3_semibold dashboard__heading"
            v-text="$t('Results')"/>

        <div class="betting-events__loading" v-if="is_loading">
            <div class="betting-events">
                <div class="betting-events__subcategory">
                    <div class="betting-events__subcategory-container">
                        <div class="betting-events__subcategory-title">
                            <span class="betting-events__subcategory-icon betting-events__subcategory-icon--loading"/>
                            {{ $t('Loading') }}
                        </div>

                        <div class="betting-events__champ-container">
                            <div class="flex-row betting-events__champ-title"/>

                            <div class="betting-events__game-container">
                                <div class="betting-events__game-group">
                                    <div class="betting-events__game-group-row">
                                        <div class="betting-events__game-favourite-icon--loading"/>
                                        <div class="betting-events__game-date"/>
                                    </div>
                                    <div class="betting-events__game-group-row-big">
                                        <div class="flex-row"/>
                                        <div class="flex-row"/>
                                    </div>
                                </div>
                                <div class="betting-events__game-group">
                                    <div class="betting-events__game-teams-grid">
                                        <div class="flex-row betting-events__game-teams-grid-text"/>
                                        <div class="flex-row betting-events__game-teams-grid-text"/>
                                        <div class="flex-row betting-events__game-teams-grid-text"/>
                                    </div>
                                    <div class="betting-events__game-teams-grid">
                                        <div class="button-action-02 betting-events__game-button"/>
                                        <div class="button-action-02 betting-events__game-button"/>
                                        <div class="button-action-02 betting-events__game-button"/>
                                    </div>
                                </div>
                            </div>
                            <div class="betting-events__game-container">
                                <div class="betting-events__game-group">
                                    <div class="betting-events__game-group-row">
                                        <div class="betting-events__game-favourite-icon--loading"/>
                                        <div class="betting-events__game-date"/>
                                    </div>
                                    <div class="betting-events__game-group-row-big">
                                        <div class="flex-row"/>
                                        <div class="flex-row"/>
                                    </div>
                                </div>
                                <div class="betting-events__game-group">
                                    <div class="betting-events__game-teams-grid">
                                        <div class="flex-row betting-events__game-teams-grid-text"/>
                                        <div class="flex-row betting-events__game-teams-grid-text"/>
                                        <div class="flex-row betting-events__game-teams-grid-text"/>
                                    </div>
                                    <div class="betting-events__game-teams-grid">
                                        <div class="button-action-02 betting-events__game-button"/>
                                        <div class="button-action-02 betting-events__game-button"/>
                                        <div class="button-action-02 betting-events__game-button"/>
                                    </div>
                                </div>
                            </div>
                            <div class="betting-events__game-container">
                                <div class="betting-events__game-group">
                                    <div class="betting-events__game-group-row">
                                        <div class="betting-events__game-favourite-icon--loading"/>
                                        <div class="betting-events__game-date"/>
                                    </div>
                                    <div class="betting-events__game-group-row-big">
                                        <div class="flex-row"/>
                                        <div class="flex-row"/>
                                    </div>
                                </div>
                                <div class="betting-events__game-group">
                                    <div class="betting-events__game-teams-grid">
                                        <div class="flex-row betting-events__game-teams-grid-text"/>
                                        <div class="flex-row betting-events__game-teams-grid-text"/>
                                        <div class="flex-row betting-events__game-teams-grid-text"/>
                                    </div>
                                    <div class="betting-events__game-teams-grid">
                                        <div class="button-action-02 betting-events__game-button"/>
                                        <div class="button-action-02 betting-events__game-button"/>
                                        <div class="button-action-02 betting-events__game-button"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template v-else>
            <div v-if="lines.length && windowWidth > 768" class="flex-column dashboard-table">
                <div class="dashboard-table__row dashboard-results__row dashboard-results__heading">
                    <div class="t1_medium dashboard-table__column" v-text="$t('Event')"/>
                    <div class="t1_medium dashboard-table__column" v-text="$t('Bet')"/>
                    <div class="t1_medium dashboard-table__column" v-text="$t('CF')"/>
                    <div class="t1_medium dashboard-table__column" v-text="$t('Winning')"/>
                </div>

                <div
                    class="flex-column dashboard-table__line-group"
                    v-for="line in lines"
                    :key="line.id"
                >
                    <div class="dashboard-table__row dashboard-results__row dashboard-results__line">
                        <div class="t1_regular dashboard-table__column">
                            <img src="../../../img/currencies/maran.svg" class="dashboard-results__maran-icon" alt="Maran">
                            {{ line.sum }}
                        </div>
                        <div class="t1_regular dashboard-table__column"/>
                        <div class="t1_regular dashboard-table__column"
                             v-text="Math.round(countLineRaito(line) * 100) / 100"/>
                        <div class="t1_regular dashboard-table__column">
              <span
                  :class="{
                      't2_semibold flex-row dashboard-results__line-status': true,
                      'dashboard-results__line-status--loose': (showStatus(line) === $t('Loss') || showStatus(line) === $t('Canceled')),
                      'dashboard-results__line-status--win': showStatus(line) === $t('Win'),
                      'dashboard-results__line-status--in-progress': showStatus(line) === $t('In the drawing'),
                    }"
                  v-text="showStatus(line)"/>
                        </div>
                    </div>

                    <div
                        class="dashboard-table__row dashboard-results__row"
                        v-for="single_bet in line.bets_rel"
                        :key="'single_bet_' + single_bet.id"
                    >
                        <div class="t1_medium dashboard-table__column" v-text="showTeams(single_bet)"/>
                        <div class="t1_medium dashboard-table__column" v-text="showBet(single_bet)"/>
                        <div class="t1_medium dashboard-table__column" v-text="showOdd(single_bet)"/>
                        <div class="t1_medium dashboard-table__column" v-text="showResult(single_bet)"/>
                    </div>
                </div>
            </div>

            <div v-if="lines.length && windowWidth <= 768" class="flex-column dashboard-results__mobile-view">
                <div
                    class="dashboard-results__mobile-item"
                    v-for="line in lines"
                    :key="line.id">

                    <div class="flex-row dashboard-results__mobile-item-row">
                        <div class="flex-column dashboard-results__mobile-item-col">
                            <span class="flex-row dashboard-results__mobile-item-col-title t3_regular"
                                  v-text="$t('Bid amount')"/>
                            <span class="flex-row dashboard-results__mobile-item-col-title t1_regular">
                  <img src="../../../img/currencies/maran.svg" class="dashboard-results__mobile-coin" alt="MARAN"/>
                  {{ line.sum }}
                </span>
                        </div>
                        <div class="flex-column dashboard-results__mobile-item-col">
                            <span class="flex-row dashboard-results__mobile-item-col-title t3_regular" v-text="$t('CF')"/>
                            <span class="t1_regular" v-text="Math.round(countLineRaito(line) * 100) / 100"/>
                        </div>
                        <div class="flex-column dashboard-results__mobile-item-col">
                            <span class="flex-row dashboard-results__mobile-item-col-title t3_regular"
                                  v-text="$t('Outcome')"/>
                            <span
                                :class="{
                      't2_regular flex-row dashboard-results__mobile-status': true,
                      'dashboard-results__mobile-status--loose': showStatus(line) === $t('Loss'),
                      'dashboard-results__mobile-status--win': showStatus(line) === $t('Win'),
                      'dashboard-results__mobile-status--in-progress': showStatus(line) === $t('In the drawing'),
                    }"
                                v-text="showStatus(line)"/>
                        </div>
                    </div>

                    <div
                        class="flex-row dashboard-results__mobile-item-row"
                        v-for="single_bet in line.bets_rel"
                        :key="'single_bet_mobile_' + single_bet.id"
                    >
                        <div class="flex-column dashboard-results__mobile-item-col">
                            <span class="t3_regular" v-text="$t('Bet')"/>
                            <span class="flex-row dashboard-results__mobile-item-col-title t1_regular"
                                  v-text="showBet(single_bet)"/>
                        </div>
                        <div class="flex-column dashboard-results__mobile-item-col">
                            <span class="flex-row dashboard-results__mobile-item-col-title t3_regular" v-text="$t('CF')"/>
                            <span class="t1_regular" v-text="showOdd(single_bet)"/>
                        </div>
                        <div class="flex-column dashboard-results__mobile-item-col">
                            <span class="flex-row dashboard-results__mobile-item-col-title t3_regular"
                                  v-text="$t('Outcome')"/>
                            <span class="t1_regular" v-text="showResult(single_bet)"/>
                        </div>
                    </div>

                </div>
            </div>
            <ul v-if="lines.length > 0" class="dashboard-pagination">
                <li v-for="index in last_page">
                    <router-link :to="{ name: 'dashboard-results', params: {page: index} }"
                                 class="dashboard-pagination__link"
                                 :class="{'router-link-exact-active' : index == 1 && !$route.params.page}"
                    >
                        {{ index }}
                    </router-link>
                </li>
            </ul>
            <Empty v-if="lines.length == 0"/>
        </template>
    </div>
</template>

<script>
import moment from "moment";
import {useWindowSize} from "vue-window-size";
import Empty from "@/js/Views/Dashboard/Empty.vue";

export default {
    components: {
        Empty
    },
    data() {
        return {
            lines: [],
            is_loading: false,
            last_page: 0,
        }
    },
    methods: {
        fetchUserResults(page) {
            page = page ? page : '1'
            this.is_loading = true;
            axios.get(`/api/actual/user-results/list?page=${page}`).then((res) => {
                if (res.status === 200) {
                    this.is_loading = false;
                    this.lines = res.data.data;
                    this.last_page = res.data.last_page;
                }
            })
            .catch((err) => {
                this.is_loading = false;
                console.log(err)
            })
        },
        countLineRaito(line) {
            let raito = 0;
            line.bets_rel.forEach((single_bet) => {
                if (raito === 0) {
                    raito += single_bet.bet.odd
                } else {
                    raito = raito * single_bet.bet.odd
                }
            })
            return raito;
        },
        showTeams(single_bet) {
            return single_bet.bet.event.team_home.name + ' - ' + single_bet.bet.event.team_away.name;
        },
        showBet(single_bet) {
            let user_bet;
            if (single_bet.bet.choice === 1) {
                user_bet = this.$t('T1')
            }
            if (single_bet.bet.choice === 2) {
                user_bet = this.$t('T2')
            }
            if (single_bet.bet.choice === 3) {
                user_bet = this.$t('Draw')
            }
            return user_bet
        },
        showOdd(single_bet) {
            return single_bet.bet.odd
        },
        showResult(single_bet) {
            let result = '';

            if (single_bet.bet.event.winner) {
                if (single_bet.bet.event.winner === 1) {
                    result = this.$t('T1')
                }
                if (single_bet.bet.event.winner === 2) {
                    result = this.$t('T2')
                }
                if (single_bet.bet.event.winner === 3) {
                    result = this.$t('Draw')
                }
            }

            result += ' (' + single_bet.bet.event.score_home + ' - ' + single_bet.bet.event.score_away + ')';

            return result
        },
        showStatus(line) {
            let result = this.$t('In the drawing');
            let winner = true;
            let canceled = false;

            if (line.calculated) {
                line.bets_rel.forEach((data) => {
                    if (data.bet.win == -1) {
                        winner = false
                        canceled = true;
                    }

                    if (!data.bet.win) {
                        winner = false
                    }
                })

                if (winner) {
                    result = this.$t("Win")
                } else if (canceled) {
                    result = this.$t("Canceled")
                } else {
                    result = this.$t("Loss")
                }
            }

            return result
        },
        get_local_time(time) {
            let time_utc = moment.utc(time);
            return moment(time_utc).local().format('DD.MM.YYYY HH:mm');
        }
    },
    created: function () {
        this.moment = moment;
    },
    mounted() {
        this.fetchUserResults(this.$route.params.page)
    },
    watch: {
        '$route.path'() {
            this.fetchUserResults(this.$route.params.page)
        },
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
