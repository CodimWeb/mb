<template>
    <div class="betting-events__loading" v-if="is_loading">
        <div class="betting-events">
            <div class="betting-events__subcategory">
                <div class="betting-events__subcategory-container">
                    <div class="betting-events__subcategory-title">
                        <span class="betting-events__subcategory-icon betting-events__subcategory-icon--loading"/>
                        {{ $t('Loading') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="panelka-main">
        <p style="margin-bottom: 5px">Id: <strong>{{$route.params.id}}</strong></p>
        <p style="margin-bottom: 5px">Кошелек <strong>{{$route.params.wallet}}</strong></p>
        <p style="margin-bottom: 5px">Кол-во ставок <strong>{{userBidAll}}</strong></p>
        <p style="margin-bottom: 5px">Сумма выигрышей <strong>{{userWonTotal}}</strong></p>
        <p style="margin-bottom: 5px">Сумма проигрышей <strong>{{userLossTotal}}</strong></p>
        <p style="margin-bottom: 5px">Сумма выводов <strong>{{userWithdrawTotal}}</strong></p>
        <p style="margin-bottom: 5px">Дата регистрации <strong>{{userDateRegistration}}</strong></p>

        <div style="margin-bottom: 25px">
            <BarChart :chart-data="userBidDay" :options="options"/>
        </div>
        <div class="chart-row">
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="userBidWeek" :options="options" />
                </div>
            </div>
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="userBidMonth" :options="options" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import BarChart from "../../components/Panelka/Chart/BarChart.vue";

export default {
    components: {
        BarChart
    },
    data() {
        return {
            is_loading: false,
            userBidAll: 0,
            userWonTotal: 0,
            userLossTotal: 0,
            userWithdrawTotal: 0,
            userDateRegistration: '',

            userBidDay: {
                labels: [],
                datasets: [
                    {
                        label: 'Ставок за день',
                        data: [],
                    }
                ]
            },
            userBidWeek: {
                labels: [],
                datasets: [
                    {
                        label: 'Ставок за неделю',
                        data: [],
                    }
                ]
            },
            userBidMonth: {
                labels: [],
                datasets: [
                    {
                        label: 'Ставок за месяц',
                        data: [],
                    }
                ]
            },
        }
    },
    methods: {
        getData(id) {
            this.is_loading = true

            axios.get(`/api/actual/panel/statistics/user-detail/${id}`).then((res) => {
                console.log(res.data)
                this.userBidAll = res.data.userBidAll
                this.userLossTotal = res.data.userLossTotal
                this.userWonTotal = res.data.userWonTotal
                this.userWithdrawTotal = res.data.userWithdrawTotal ? Math.abs(res.data.userWithdrawTotal) : 0
                this.userDateRegistration = res.data.userDateRegistration ? res.data.userDateRegistration : '-'

                // days
                let labelsDay = []
                let datasetsDay = []
                res.data.userBidDay.map((item) => {
                    labelsDay.push(item.date)
                    datasetsDay.push(item.total_bets)
                })
                this.userBidDay.labels = labelsDay
                this.userBidDay.datasets[0].data = datasetsDay

                // weeks
                let labelsWeek = []
                let datasetsWeek = []
                res.data.userBidWeek.map((item) => {
                    labelsWeek.push(`${item.week} - ${item.year}`)
                    datasetsWeek.push(item.total_bets)
                })
                this.userBidWeek.labels = labelsWeek
                this.userBidWeek.datasets[0].data = datasetsWeek

                // Month
                let labelsMonth = []
                let datasetsMonth = []
                res.data.userBidMonth.map((item) => {
                    labelsMonth.push(`${item.month} - ${item.year}`)
                    datasetsMonth.push(item.total_bets)
                })
                this.userBidMonth.labels = labelsMonth
                this.userBidMonth.datasets[0].data = datasetsMonth
            })
            .catch((err) => {
                console.log(err)
            })
            .finally( () => {
                this.is_loading = false
            });
        },
    },
    mounted() {
        this.getData(this.$route.params.id)
    },
    created: function () {
        this.moment = moment;
    }
}
</script>