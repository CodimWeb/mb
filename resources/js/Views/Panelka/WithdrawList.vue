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
    <div v-else class="panelka-withdraw">
        <div class="panelka-table" v-if="data.length">
            <div class="panelka__table-row t2_medium">
                <div class="flex-row">Дата</div>
                <div class="flex-row">Сумма</div>
                <div class="flex-row">Статус</div>
                <div class="flex-row">Кошелек для вывода</div>
                <div class="flex-row"/>
                <div class="flex-row">Действия</div>
            </div>

            <div class="panelka__table-row t2_medium" v-for="item in data">
                <div class="flex-row" v-text="moment(item.created_at).format('DD.MM.YYYY HH:mm')"/>
                <div class="flex-row" v-text="item.sum"/>
                <div class="flex-row" v-text="showStatus(item.status)"/>
                <div class="flex-row" v-text="item.wallet"/>
                <div class="flex-row"/>
                <div class="flex-row">
                    <button
                        class="betting-button"
                        @click="submitWd(item.id)"
                        v-text="'Подтвердить'"
                        v-if="!item.status"/>
                </div>
            </div>
        </div>
        <div v-else>
            Нет заявок на вывод
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    data() {
        return {
            is_loading: false,
            data: []
        }
    },
    methods: {
        getData() {
            this.is_loading = true
            axios.get('/api/actual/panel/withdraw/list').then((res) => {
                this.data = res.data
            })
            .catch((err) => {
                console.log(err)
            })
            .finally( () => {
                this.is_loading = false
            });
        },
        submitWd(id) {
            this.is_loading = true
            axios.post(`/api/actual/panel/withdraw/submit/${id}`).then((res) => {
                this.data = res.data
            })
            .catch((err) => {
                console.log(err)
            })
            .finally( () => {
                this.is_loading = false
            });
        },
        showStatus(status) {
            let response;

            if (status === 1 || status === 2) {
                response = 'Подтверждена'
            } else {
                response = 'Не подтверждена'
            }

            return response
        }
    },
    mounted() {
        this.getData()
    },
    created: function () {
        this.moment = moment;
    },
}
</script>