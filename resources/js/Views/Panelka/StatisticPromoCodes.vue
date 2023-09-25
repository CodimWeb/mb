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
        <h2 class="h3" style="margin: 25px 0">Список промокодов</h2>
        <p v-for="promocode in promocodes">
            <router-link :to="{name: 'statistic-used-promo', params: {id: promocode.id }}">
                {{ promocode.code }}
            </router-link>
        </p>

        <h2 class="h3" style="margin: 25px 0">Общая статистика промокодов </h2>
        <div class="flex-row panelka-main__data">
            <div class="flex-column panelka-main__item">
                <span class="t1_regular">Сегодня</span>
                <span class="h3_semibold">{{ quantityToday }}</span>
            </div>
            <div class="flex-column panelka-main__item">
                <span class="t1_regular">7 дней</span>
                <span class="h3_semibold">{{ quantityWeek }}</span>
            </div>
            <div class="flex-column panelka-main__item">
                <span class="t1_regular">30 дней</span>
                <span class="h3_semibold">{{ quantityMonth }}</span>
            </div>
            <div class="flex-column panelka-main__item">
                <span class="t1_regular">Всего</span>
                <span class="h3_semibold">{{ quantityAll }}</span>
            </div>
        </div>
        <div style="margin-bottom: 25px">
            <BarChart :chart-data="promocodesDay"/>
        </div>
        <div class="chart-row">
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="promocodesWeek"/>
                </div>
            </div>
            <div class="chart-column">
                <div style="margin-bottom: 25px">
                    <BarChart :chart-data="promocodesMonth"/>
                </div>
            </div>
        </div>
    </div>
<!--    <h2 class="h3" style="margin: 25px 0">Количество применненых промокодов за период</h2>-->
<!--    <div class="date-panel">-->
<!--        <div>-->
<!--            <DatePicker :locale="locale" v-model="dateFrom" is-dark is-expanded trim-weeks/>-->
<!--        </div>-->
<!--        <div>-->
<!--            <DatePicker :locale="locale" v-model="dateTo" is-dark is-expanded trim-weeks/>-->
<!--        </div>-->
<!--        <div>-->
<!--            <button class="betting-button betting-button-admin" @click="getQuantytyBydate">Показать</button>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div v-if="results.length > 0" class="table">-->
<!--        <thead>-->
<!--            <tr>-->
<!--                <td>Период</td>-->
<!--                <td>Кол-во</td>-->
<!--            </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--            <tr v-for="item in results">-->
<!--                <td>{{ item.period }}</td>-->
<!--                <td>{{ item.quantity }}</td>-->
<!--            </tr>-->
<!--        </tbody>-->
<!--    </div>-->


</template>

<style>
    .date-panel {
        display: grid;
        grid-gap: 15px;
        grid-template-columns: 260px 260px auto;
        margin-bottom: 15px;
    }
    button {
        background: transparent;
    }
</style>

<script>
import moment from "moment";
import BarChart from "../../components/Panelka/Chart/BarChart.vue";
// import {DatePicker} from 'v-calendar';
// import 'v-calendar/dist/style.css';

export default {
    components: {
        // DatePicker,
        BarChart
    },
    data() {
        return {
            is_loading: false,
            promocodes: [],
            quantityToday: 0,
            quantityWeek: 0,
            quantityMonth: 0,
            quantityAll: 0,
            promocodesDay: {
                labels: [],
                datasets: [
                    {
                        label: 'Промокодов за день',
                        data: [],
                    }
                ]
            },
            promocodesWeek: {
                labels: [],
                datasets: [
                    {
                        label: 'Промокодов за неделю',
                        data: [],
                    }
                ]
            },
            promocodesMonth: {
                labels: [],
                datasets: [
                    {
                        label: 'Промокодов за месяц',
                        data: [],
                    }
                ]
            },
            // quntityByTime: '',
            // locale: window.location.pathname.replace(/^\/([^\/]+).*/i, '$1'),
            // dateFrom: '',
            // dateTo: '',
            // results: [],

        }
    },
    methods: {
        getData() {
            this.is_loading = true
            axios.get('/api/actual/panel/statistics-promocodes').then((res) => {
                console.log(res.data)
                this.promocodes = res.data.promocodes
                this.quantityToday = res.data.quantityToday
                this.quantityWeek = res.data.quantityWeek
                this.quantityMonth = res.data.quantityMonth
                this.quantityAll = res.data.quantityAll
                // days
                let labelsDay = []
                let datasetsDay = []
                res.data.promocodesDay.map((item) => {
                    labelsDay.push(item.date)
                    datasetsDay.push(item.total_promo_code)
                })
                this.promocodesDay.labels = labelsDay
                this.promocodesDay.datasets[0].data = datasetsDay
                console.log(this.promocodesDay)

                //weeks
                let labelsWeek = []
                let datasetsWeek = []
                res.data.promocodesWeek.map((item) => {
                    labelsWeek.push(`${item.week}-${item.year}`)
                    datasetsWeek.push(item.total_promo_code)
                })
                this.promocodesWeek.labels = labelsWeek
                this.promocodesWeek.datasets[0].data = datasetsWeek

                //month
                let labelsMonth = []
                let datasetsMonth = []
                res.data.promocodesMonth.map((item) => {
                    labelsMonth.push(`${item.month}-${item.year}`)
                    datasetsMonth.push(item.total_promo_code)
                })
                this.promocodesMonth.labels = labelsMonth
                this.promocodesMonth.datasets[0].data = datasetsMonth

            })
            .catch((err) => {
                console.log(err)
            })
            .finally( () => {
                this.is_loading = false
            });
        },
        // getQuantytyBydate() {
        //     let dateFrom = moment(this.dateFrom).format('YYYY-MM-DD')
        //     let dateTo = moment(this.dateTo).format('YYYY-MM-DD')
        //     axios.post('/api/actual/panel/statistics-promocodes-date-range', {from: dateFrom, to: dateTo}).then((res) => {
        //         this.quntityByTime = res.data
        //         let dateFrom = moment(this.dateFrom).format('DD.MM.YYYY')
        //         let dateTo = moment(this.dateTo).format('DD.MM.YYYY')
        //         let item = {
        //             period: `${dateFrom} - ${dateTo}`,
        //             quantity: res.data
        //         }
        //         this.results.push(item);
        //         console.log(res.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        // }
    },
    mounted() {
        this.getData()
    },
    created: function () {
        this.moment = moment;
    },
}
</script>