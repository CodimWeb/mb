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
        <h2 v-if="promocode" class="h3" style="margin: 25px 0">Статистика промокода {{ promocode.code }}</h2>
        <div v-if="users.length">
            <p style="margin-bottom: 25px">Кол-во использований - {{ users.length }}</p>
            <h3 style="margin-bottom: 25px" class="h3">Список пользователей</h3>
            <table class="table">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Кошелек</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users" @click="getUserDetail(user)">
                    <td>{{user.user_id}}</td>
                    <td>{{user.wallet}}</td>
                </tr>
                </tbody>
            </table>
        </div>
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
            promocode: null,
            users: [],
        }
    },
    methods: {
        getData() {
            this.is_loading = true
            const id = this.$route.params.id
            axios.get(`/api/actual/panel/statistics-used-promocodes/${id}`).then((res) => {
                console.log(res.data)
                this.promocode = res.data.promocode
                this.users = res.data.users
            })
            .catch((err) => {
                console.log(err)
            })
            .finally( () => {
                this.is_loading = false
            });
        },
        getUserDetail(user) {
            router.push({ name: 'statistic-user-detail', params: { id: user.user_id, wallet: user.wallet }})
        }
    },
    mounted() {
        this.getData()
    },
    created: function () {
        this.moment = moment;
    }
}
</script>