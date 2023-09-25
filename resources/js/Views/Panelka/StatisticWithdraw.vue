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
        <p>Сумма вывода {{withdrawAll}}</p>
        <div style="margin-bottom: 25px">
            <BarChart :chart-data="withdrawDay"/>
        </div>
        <div class="chart-row">
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="withdrawWeek"/>
                </div>
            </div>
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="withdrawMonth"/>
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
            withdrawAll: 0,
            withdrawDay: {
                labels: [],
                datasets: [
                    {
                        label: 'Выводов за день',
                        data: [],
                    }
                ]
            },
            withdrawWeek: {
                labels: [],
                datasets: [
                    {
                        label: 'Выводов за неделю',
                        data: [],
                    }
                ]
            },
            withdrawMonth: {
                labels: [],
                datasets: [
                    {
                        label: 'Выводов за месяц',
                        data: [],
                    }
                ]
            },
        }
    },
    methods: {
        getData() {
            this.is_loading = true
            axios.get(`/api/actual/panel/statistics/withdrawal`).then((res) => {
                console.log(res.data)
                this.withdrawAll = Math.abs(res.data.withdrawAll);
                // days
                let labelsDay = []
                let datasetsDay = []
                res.data.withdrawDay.map((item) => {
                    labelsDay.push(item.date)
                    datasetsDay.push(Math.abs(item.total))
                })
                this.withdrawDay.labels = labelsDay
                this.withdrawDay.datasets[0].data = datasetsDay
                console.log(this.withdrawDay)


                //weeks
                let labelsWeek = []
                let datasetsWeek = []
                res.data.withdrawWeek.map((item) => {
                    labelsWeek.push(item.week)
                    datasetsWeek.push(Math.abs(item.total))
                })
                this.withdrawWeek.labels = labelsWeek
                this.withdrawWeek.datasets[0].data = datasetsWeek

                //month
                let labelsMonth = []
                let datasetsMonth = []
                res.data.withdrawMonth.map((item) => {
                    labelsMonth.push(item.month)
                    datasetsMonth.push(Math.abs(item.total))
                })
                this.withdrawMonth.labels = labelsMonth
                this.withdrawMonth.datasets[0].data = datasetsMonth
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