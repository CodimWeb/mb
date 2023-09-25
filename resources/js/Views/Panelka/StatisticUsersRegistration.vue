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
        <div class="flex-row panelka-main__data">
            <div class="flex-column panelka-main__item">
                <span class="t1_regular">Всего пользователей</span>
                <span class="h3_semibold">{{ stats.total_count.users_total }}</span>
            </div>
<!--            <div class="flex-column panelka-main__item">-->
<!--                <span class="t1_regular">Активных пользователей</span>-->
<!--                <span class="h3_semibold">{{ stats.total_count.users_active }}</span>-->
<!--            </div>-->
        </div>
        <div style="margin-bottom: 25px">
            <BarChart :chart-data="userPerDays" />
        </div>
        <div style="margin-bottom: 25px">
            <BarChart :chart-data="userPerMonths"/>
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
            stats: {
                total_count: {}
            },
            userPerMonths: {
                labels: [],
                datasets: [
                    {
                        label: 'Регистраций за месяц',
                        data: [],
                    }
                ]
            },
            userPerDays: {
                labels: [],
                datasets: [
                    {
                        label: 'Регистраций за день',
                        data: [],
                    }
                ]
            },
        }
    },
    methods: {
        getStats() {
            this.is_loading = true
            axios.get(`/api/actual/panel/statistics`).then((res) => {
                this.stats = res.data
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            }).finally( () => {
                this.is_loading = false
            });
        },
        getStatsUsers() {
            this.is_loading = true
            axios.get(`/api/actual/panel/statistics/registration`).then((res) => {
                console.log(res.data)
                let labelsPerMonth = []
                let datasetsPerMonth = []
                res.data.userPerMonth.map((item) => {
                    labelsPerMonth.push(item.month)
                    datasetsPerMonth.push(item.count_users)
                })
                this.userPerMonths.labels = labelsPerMonth
                this.userPerMonths.datasets[0].data = datasetsPerMonth

                let labelsPerDay = []
                let datasetsPerDay = []
                res.data.userPerDay.map((item) => {
                    labelsPerDay.push(item.day)
                    datasetsPerDay.push(item.count_users)
                })
                this.userPerDays.labels = labelsPerDay
                this.userPerDays.datasets[0].data = datasetsPerDay

            }).catch((err) => {
                console.log(err)
            }).finally( () => {
                this.is_loading = false
            });
        },
    },
    mounted() {
        this.getStats()
        this.getStatsUsers();
    },
    created: function () {
        this.moment = moment;
    },
}
</script>