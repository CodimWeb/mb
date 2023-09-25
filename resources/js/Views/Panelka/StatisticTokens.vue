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
        <p>ETH - {{ ethSum }}</p>
        <p>FTM - {{ ftmSum }}</p>
        <p>LINK - {{ linkSum }}</p>
        <p>UNI - {{ uniSum }}</p>
        <p>USDT - {{ usdtSum }}</p>
        <p>Пополнений на сайте - {{ maranFromSite }}</p>
        <p>Пополнений SWAP - {{ maranFromSwap }}</p>
        <p>Всего MARAN - {{ maranAll }}</p>
    </div>
</template>

<script>
import moment from "moment";

export default {
    data() {
        return {
            is_loading: false,
            ethSum: 0,
            ftmSum: 0,
            linkSum: 0,
            uniSum: 0,
            usdtSum: 0,
            maranFromSite: 0,
            maranFromSwap: 0,
            maranAll: 0,
        }
    },
    methods: {
        getData() {
            this.is_loading = true
            axios.get(`/api/actual/panel/statistics/tokens`).then((res) => {
                console.log(res.data)
                this.ethSum = res.data.ethSum
                this.ftmSum = res.data.ftmSum
                this.linkSum = res.data.linkSum
                this.uniSum = res.data.uniSum
                this.usdtSum = res.data.usdtSum
                this.maranFromSite = res.data.maranFromSite
                this.maranFromSwap = res.data.maranFromSwap
                this.maranAll = res.data.maranAll
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