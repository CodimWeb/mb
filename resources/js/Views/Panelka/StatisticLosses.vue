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
        <p>Сумма проигрышей {{totalLoss}}</p>
        <div style="margin-bottom: 25px">
            <BarChart :chart-data="totalLossDay"/>
        </div>
        <div class="chart-row">
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="totalLossWeek"/>
                </div>
            </div>
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="totalLossMonth"/>
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
            totalLoss: 0,
            totalLossDay: {
                labels: [],
                datasets: [
                    {
                        label: 'Проигрышей за день',
                        data: [],
                    }
                ]
            },
            totalLossWeek: {
                labels: [],
                datasets: [
                    {
                        label: 'Проигрышей за неделю',
                        data: [],
                    }
                ]
            },
            totalLossMonth: {
                labels: [],
                datasets: [
                    {
                        label: 'Проигрышей за месяц',
                        data: [],
                    }
                ]
            },
        }
    },
    methods: {
        getData() {
            this.is_loading = true
            axios.get(`/api/actual/panel/statistics/loss`).then((res) => {
                console.log(res.data)
                this.totalLoss = res.data.totalLoss;
                // days
                let labelsDay = []
                let datasetsDay = []
                res.data.totalLossDay.map((item) => {
                    labelsDay.push(item.date)
                    datasetsDay.push(item.total_sum)
                })
                this.totalLossDay.labels = labelsDay
                this.totalLossDay.datasets[0].data = datasetsDay
                console.log(this.totalLossDay)


                //weeks
                let labelsWeek = []
                let datasetsWeek = []
                res.data.totalLossWeek.map((item) => {
                    labelsWeek.push(`${item.week}-${item.year}`)
                    datasetsWeek.push(item.total_sum)
                })
                this.totalLossWeek.labels = labelsWeek
                this.totalLossWeek.datasets[0].data = datasetsWeek

                //month
                let labelsMonth = []
                let datasetsMonth = []
                res.data.totalLossMonth.map((item) => {
                    labelsMonth.push(`${item.month}-${item.year}`)
                    datasetsMonth.push(item.total_sum)
                })
                this.totalLossMonth.labels = labelsMonth
                this.totalLossMonth.datasets[0].data = datasetsMonth
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