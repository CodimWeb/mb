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
        <div class="panelka-props__list">
            <div class="flex-column panelka-main__item">
                <span class="t1_regular">Системные переменные</span>
            </div>
            <div v-for="item in propList" class="panelka-props">
                <span>{{ item.key }}</span>
                <input type="text" class="input" :name="item.key" v-model="item.value"/>
                <button @click="save(item)" class="betting-button betting-button-admin">Сохранить</button>
            </div>
        </div>

    </div>
</template>

<style>
.panelka-props__list {
    margin-top: 30px;
}

.panelka-props {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 150px 300px 100px;
    align-items: center;
    margin-bottom: 15px;
}

.betting-button-admin {
    padding: 6px 10px !important;
}

</style>

<script>
export default {
    data() {
        return {
            is_loading: false,
            propList: {},

        }
    },
    methods: {
        getAdminProps() {
            this.is_loading = true
            axios.get(`/api/admin-props`).then((res) => {
                this.propList = res.data[0]
                this.is_loading = false
            })
            .catch((err) => {
                console.log(err)
            })
        },
        save(item) {
            this.is_loading = true
            axios.put(`/api/admin-props/${item.id}`, item).then((res) => {
                this.is_loading = false
                console.log(res)
            })
        }
    },
    mounted() {
        this.getAdminProps()
    }
}
</script>