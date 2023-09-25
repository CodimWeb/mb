<template>
    <div class="dashboard-history">
        <h1
            class="h3_semibold dashboard__heading"
            v-text="$t('Transactions history')"
        />
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
            <template v-if="transactions.length">
                <div class="flex-column dashboard-table" v-if="windowWidth > 920">
                    <div class="dashboard-table__row dashboard-table__heading-row dashboard-history__row">
                        <div class="t1_medium dashboard-table__column" v-text="$t('Operation')"/>
                        <div class="t1_medium dashboard-table__column" v-text="$t('Date')"/>
                        <!--          <div class="t1_medium dashboard-table__column" v-text="$t('Currency')"/>-->
                        <div class="t1_medium dashboard-table__column" v-text="$t('The amount')"/>
                        <!--          <div class="t1_medium dashboard-table__column" v-text="$t('Rate')"/>-->
                        <div class="t1_medium dashboard-table__column" v-text="$t('Status')"/>
                    </div>
                    <div
                        class="dashboard-table__row dashboard-history__row"
                        v-for="item in transactions"
                    >
                        <div
                            class="t1_regular dashboard-table__column"
                            v-text="showTransactionType(item.type)"/>
                        <div
                            class="t1_regular dashboard-table__column"
                            v-text="get_local_time(item.created_at)"/>
                        <!--          <div-->
                        <!--              class="t1_regular dashboard-table__column"-->
                        <!--              v-html="showTransactionCurrency(item.currency_from.code, item.currency_to.code)"-->
                        <!--              :title="item.currency_from.name + ' -> ' + item.currency_to.name"/>-->
                        <div
                            class="t1_regular dashboard-table__column"
                            v-html="showTransactionSum(item)"/>
                        <!--          <div-->
                        <!--              class="t1_regular dashboard-table__column"-->
                        <!--              v-text="item.rate"/>-->
                        <div
                            class="t1_regular dashboard-table__column"
                            v-text="showTransactionStatus(item.status)"/>
                    </div>
                </div>
                <div class="flex-column dashboard-history__mobile" v-else>
                    <div class="dashboard-history__mobile-item" v-for="item in transactions">
                        <div class="dashboard-history__mobile-item-grid">
                            <div class="flex-column">
                  <span
                      class="t3_regular dashboard-history__mobile-item-title"
                      v-text="$t('Operation')"
                  />
                                <span
                                    class="t2_regular dashboard-history__mobile-item-value"
                                    v-text="showTransactionType(item.type)"
                                />
                            </div>
                            <div class="flex-column">
                  <span
                      class="t3_regular dashboard-history__mobile-item-title"
                      v-text="$t('Date')"
                  />
                                <span
                                    class="t2_regular dashboard-history__mobile-item-value"
                                    v-text="get_local_time(item.created_at)"
                                />
                            </div>
                            <div class="flex-column">
                  <span
                      class="t3_regular dashboard-history__mobile-item-title"
                      v-text="$t('Currency')"
                  />
                                <!--              <span-->
                                <!--                  class="t2_regular dashboard-history__mobile-item-value"-->
                                <!--                  v-html="showTransactionCurrency(item.currency_from.code, item.currency_to.code)"-->
                                <!--              />-->
                            </div>
                            <div class="flex-column">
                  <span
                      class="t3_regular dashboard-history__mobile-item-title"
                      v-text="$t('The amount')"
                  />
                                <span
                                    class="t2_regular dashboard-history__mobile-item-value"
                                    v-html="showTransactionSum(item)"
                                />
                            </div>
                            <div class="flex-column">
                  <span
                      class="t3_regular dashboard-history__mobile-item-title"
                      v-text="$t('Rate')"
                  />
                                <span
                                    class="t2_regular dashboard-history__mobile-item-value"
                                    v-text="item.rate"
                                />
                            </div>
                            <div class="flex-column">
                  <span
                      class="t3_regular dashboard-history__mobile-item-title"
                      v-text="$t('Status')"
                  />
                                <span
                                    class="t2_regular dashboard-history__mobile-item-value"
                                    v-text="showTransactionStatus(item.status)"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <ul v-if="transactions.length > 0" class="dashboard-pagination">
                    <li v-for="index in last_page">
                        <router-link :to="{ name: 'dashboard-history', params: {page: index} }"
                                     class="dashboard-pagination__link"
                                     :class="{'router-link-exact-active' : index == 1 && !$route.params.page}"
                        >
                            {{ index }}
                        </router-link>
                    </li>
                </ul>
            </template>
            <Empty v-else/>
        </template>
    </div>
</template>

<script>
import moment from 'moment';
import Empty from './Empty.vue';
import {useWindowSize} from "vue-window-size";

export default {
    components: {
        Empty
    },
    data() {
        return {
            transactions: [],
            is_loading: false,
            last_page: 0,
        }
    },
    methods: {
        fetchTransactions(page) {
            this.is_loading = true;
            axios.get(`/api/actual/transactions/list?page=${page}`)
                .then((res) => {
                    if (res.status === 200) {
                        this.transactions = res.data.data;
                        this.is_loading = false;
                        this.last_page = res.data.last_page;
                    }
                })
                .catch((e) => {
                    this.is_loading = false;
                    console.log(e)
                    this.showError($t('An error occurred while loading the data. Try reloading the page.'))
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
        showTransactionCurrency(from, to) {
            let transactionCurrency;
            if (from === to) {
                transactionCurrency = from;
            } else {
                transactionCurrency = `${from} &rarr; ${to}`;
            }
            return transactionCurrency;
        },
        showTransactionType(id) {
            let transaction_type;

            if (id === 0) {
                transaction_type = this.$t('Replenishment');
            }
            if (id === 1) {
                transaction_type = this.$t('Withdraw');
            }
            if (id === 10) {
                transaction_type = this.$t('Bet');
            }
            if (id === 7) {
                transaction_type = this.$t('Winning');
            }
            if (id === 13) {
                transaction_type = this.$t('Loose');
            }
            if (id === 20) {
                transaction_type = this.$t('Promo code');
            }
            if (id === 25) {
                transaction_type = this.$t('Refund');
            }

            return transaction_type;
        },
        showTransactionSum(item) {
            let transactionSum;
            if (item.sum_from === item.sum_to) {
                transactionSum = item.sum_from.toFixed(2)
            } else {
                transactionSum = item.sum_from.toFixed(2) + " &rarr; " + item.sum_to.toFixed(2)
            }

            return transactionSum
        },
        showTransactionStatus(status) {
            let result;
            if (status === 0) {
                result = this.$t('New')
            }
            if (status === 1) {
                result = this.$t('Success')
            }
            if (status === 2) {
                result = this.$t('Cancelled')
            }
            return result
        },
        get_local_time(time) {
            let time_utc = moment.utc(time);
            return moment(time_utc).local().format('DD.MM.YYYY HH:mm');
        }
    },
    mounted() {
        this.fetchTransactions(this.$route.params.page)
    },
    created: function () {
        this.moment = moment;
    },
    destroyed() {
        this.transactions = []
    },
    watch: {
        '$route.path'() {
            this.fetchTransactions(this.$route.params.page)
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