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
        <p>Кол-во ставок {{totalBets}}</p>
        <div style="margin-bottom: 25px">
            <BarChart :chart-data="totalBetsDay"/>
        </div>
        <div class="chart-row">
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="totalBetsWeek"/>
                </div>
            </div>
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="totalBetsMonth"/>
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
            totalBets: 0,
            totalBetsDay: {
                labels: [],
                datasets: [
                    {
                        label: 'Ставок за день',
                        data: [],
                    }
                ]
            },
            totalBetsWeek: {
                labels: [],
                datasets: [
                    {
                        label: 'Ставок за неделю',
                        data: [],
                    }
                ]
            },
            totalBetsMonth: {
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
        getData() {
            this.is_loading = true
            axios.get(`/api/actual/panel/statistics/bets`).then((res) => {
                console.log(res.data)
                this.totalBets = res.data.totalBets;
                // days
                let labelsDay = []
                let datasetsDay = []
                res.data.totalBetsDay.map((item) => {
                    labelsDay.push(item.date)
                    datasetsDay.push(item.total_bets)
                })
                this.totalBetsDay.labels = labelsDay
                this.totalBetsDay.datasets[0].data = datasetsDay

                //weeks
                let labelsWeek = []
                let datasetsWeek = []
                res.data.totalBetsWeek.map((item) => {
                    labelsWeek.push(`${item.week}-${item.year}`)
                    datasetsWeek.push(item.total_bets)
                })
                this.totalBetsWeek.labels = labelsWeek
                this.totalBetsWeek.datasets[0].data = datasetsWeek

                //month
                let labelsMonth = []
                let datasetsMonth = []
                res.data.totalBetsMonth.map((item) => {
                    labelsMonth.push(`${item.month}-${item.year}`)
                    datasetsMonth.push(item.total_bets)
                })
                this.totalBetsMonth.labels = labelsMonth
                this.totalBetsMonth.datasets[0].data = datasetsMonth

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
        this.getData()
    },
    created: function () {
        this.moment = moment;
    }
}
</script>