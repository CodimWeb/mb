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
        <p>Сумма выигрышей {{totalWins}}</p>
        <div style="margin-bottom: 25px">
            <BarChart :chart-data="totalWinsDay"/>
        </div>
        <div class="chart-row">
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="totalWinsWeek"/>
                </div>
            </div>
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="totalWinsMonth"/>
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
            totalWins: 0,
            totalWinsDay: {
                labels: [],
                datasets: [
                    {
                        label: 'Выигрышей за день',
                        data: [],
                    }
                ]
            },
            totalWinsWeek: {
                labels: [],
                datasets: [
                    {
                        label: 'Выигрышей за неделю',
                        data: [],
                    }
                ]
            },
            totalWinsMonth: {
                labels: [],
                datasets: [
                    {
                        label: 'Выигрышей за месяц',
                        data: [],
                    }
                ]
            },
        }
    },
    methods: {
        getData() {
            this.is_loading = true
            axios.get(`/api/actual/panel/statistics/win`).then((res) => {
                console.log(res.data)
                this.totalWins = res.data.totalWins;
                // days
                let labelsDay = []
                let datasetsDay = []
                res.data.totalWinsDay.map((item) => {
                    labelsDay.push(item.date)
                    datasetsDay.push(item.total_sum)
                })
                this.totalWinsDay.labels = labelsDay
                this.totalWinsDay.datasets[0].data = datasetsDay
                console.log(this.totalWinsDay)


                //weeks
                let labelsWeek = []
                let datasetsWeek = []
                res.data.totalWinsWeek.map((item) => {
                    labelsWeek.push(`${item.week}-${item.year}`)
                    datasetsWeek.push(item.total_sum)
                })
                this.totalWinsWeek.labels = labelsWeek
                this.totalWinsWeek.datasets[0].data = datasetsWeek

                //month
                let labelsMonth = []
                let datasetsMonth = []
                res.data.totalWinsMonth.map((item) => {
                    labelsMonth.push(`${item.month}-${item.year}`)
                    datasetsMonth.push(item.total_sum)
                })
                this.totalWinsMonth.labels = labelsMonth
                this.totalWinsMonth.datasets[0].data = datasetsMonth
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
