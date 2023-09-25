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
        <h3 v-if="countUserWithBets" class="h3" style="margin-bottom: 25px">
            Количество пользователей которые сделали более 1 ставки - {{countUserWithBets}}
        </h3>
        <table class="table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Кошелек</td>
                    <td>Кол-во ставок</td>
                    <td>Кол-во выигрышей</td>
                    <td>Кол-во проигрышей</td>
                    <td>Сумма ставок</td>
                    <td>Сумма вывода</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" @click="getUserDetail(item)">
                    <td>{{item.id}}</td>
                    <td>{{item.wallet}}</td>
                    <td>{{item.betsWinCount + item.betsLoseCount}}</td>
                    <td>{{item.betsWinCount}}</td>
                    <td>{{item.betsLoseCount}}</td>
                    <td>{{item.betSum}}</td>
                    <td>{{item.withdrawSum}}</td>
                </tr>
            </tbody>
        </table>

        <ul v-if="data.length > 0" class="dashboard-pagination">
            <li v-for="index in last_page">
                <router-link :to="{ name: 'statistic-users-rating', params: {page: index} }"
                             class="dashboard-pagination__link"
                             :class="{'router-link-exact-active' : index == 1 && !$route.params.page}"
                >
                    {{ index }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style>
 tr {
     cursor: pointer;
 }
</style>

<script>
import moment from "moment";
import router from "../../router";

export default {
    data() {
        return {
            is_loading: false,
            data: [],
            countUserWithBets: 0,
            last_page: 0,
        }
    },
    methods: {
        getData(page) {
            this.is_loading = true
            axios.get(`/api/actual/panel/statistics/user/bet`).then((res) => {
                this.countUserWithBets = res.data.users_count
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally( () => {
                this.is_loading = false
            });

            axios.get(`/api/actual/panel/statistics-users-rating?page=${page}`).then((res) => {
                this.data = res.data.data
                this.last_page = res.data.last_page;
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally( () => {
                this.is_loading = false
            });

            // axios.get(`/api/actual/panel/statistics/bets`).then((res) => {
            //     console.log(res.data)
            // })
            // .catch((err) => {
            //     console.log(err)
            // })
            // .finally( () => {
            //     this.is_loading = false
            // });
        },

        getUserDetail(item) {
            router.push({ name: 'statistic-user-detail', params: { id: item.id, wallet: item.wallet }})
        }
    },
    mounted() {
        this.getData(this.$route.params.page)
    },
    created: function () {
        this.moment = moment;
    },
    watch: {
        '$route.path'() {
            this.getData(this.$route.params.page)
        },
    },
}
</script>