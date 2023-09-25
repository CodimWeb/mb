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
        <div v-for="promocode in promocodes" class="promocode__row">
            <div>
                <div class="label">Промокод</div>
                <div><input type="text" class="input" :name="promocode.code" v-model="promocode.code" /></div>
            </div>
            <div>
                <div class="label">Сумма</div>
                <input type="text" class="input" :name="promocode.sum" v-model="promocode.sum" />
            </div>
            <div>
                <div class="label" style="opacity: 0">text</div>
                <input type="checkbox" :value="promocode.active" :checked="promocode.active === 1" @change="toggleActivePromocode(promocode)" style="margin-right: 10px"/>
                <span v-if="promocode.active === 1">Активный</span>
                <span v-else>Не активный</span>
            </div>
            <div>
                <div class="label" style="opacity: 0">text</div>
                <button class="betting-button betting-button-admin" @click="save(promocode)">Сохранить</button>
            </div>
            <div>
                <div class="label" style="opacity: 0">text</div>
                <button class="betting-button betting-button-admin" @click="deletePromocode(promocode)">Удалить</button>
            </div>
        </div>
        <button v-if="!newPromocode" @click="addPromocode" class="betting-button betting-button-admin">Добавить промокод</button>
        <div v-else >
            <p class="h2">Новый промокод</p>
            <div class="promocode__row">
                <div>
                    <div class="label">Промокод</div>
                    <input type="text" class="input" :name="newPromocode.code" v-model="newPromocode.code" />
                </div>
                <div>
                    <div class="label">Сумма</div>
                    <input type="text" class="input" :name="newPromocode.sum" v-model="newPromocode.sum" />
                </div>
                <div>
                    <div class="label" style="opacity: 0">text</div>
                    <input type="checkbox" :value="newPromocode.active" :checked="newPromocode.active === 1" @change="toggleActivePromocode(newPromocode)" style="margin-right: 10px"/>
                    <span v-if="newPromocode.active === 1">Активный</span>
                    <span v-else>Не активный</span>
                </div>
                <div>
                    <div class="label" style="opacity: 0">text</div>
                    <button class="betting-button betting-button-admin" @click="saveNewPromocode">Сохранить</button>
                </div>
                <div>
                    <div class="label" style="opacity: 0">text</div>
                    <button class="betting-button betting-button-admin" @click="cancelNewPromocode">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.promocode__row {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 210px 210px 130px 105px 105px;
    align-items: center;
    margin-bottom: 15px;
}

.betting-button-admin {
    padding: 6px 10px !important;
}

.label {
    font-weight: 600;
    margin-bottom: 7px;
}
</style>

<script>
import {mapGetters} from "vuex";

export default {
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
    data() {
        return {
            is_loading: false,
            promocodes: {},
            newPromocode: null,
            stats: {
                users_total: 0,
                users_active: 0
            }
        }
    },
    methods: {
        getPromocodes() {
            this.is_loading = true
            axios.get(`/api/promo-code`).then((res) => {
                this.is_loading = false
                this.promocodes = res.data[0]
            })
            .catch((err) => {
                console.log(err)
            })
        },

        toggleActivePromocode(promocode) {
            promocode.active = promocode.active === 1 ? 0 : 1
        },

        save(promocode) {
            this.is_loading = true
            axios.put(`/api/promo-code/${promocode.id}`, promocode).then((res) => {
                this.is_loading = false
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },

        addPromocode() {
            this.newPromocode = {
                code: '',
                summ: '',
                active: 0,
                user: this.user.id,
                is_personal: 1
            }
        },

        saveNewPromocode() {
            this.is_loading = true
            axios.post(`/api/promo-code/`, this.newPromocode).then((res) => {
                if(res.data.success === true) {
                    this.promocodes.push(res.data.promocode);
                    this.newPromocode = null
                }
                this.is_loading = false
            }).catch((err) => {
                console.log(err)
            })
        },

        cancelNewPromocode() {
            this.newPromocode = null
        },

        deletePromocode(promocode) {
            if (confirm("Удалить промокод?")) {
                this.is_loading = true
                axios.delete(`/api/promo-code/${promocode.id}`).then((res) => {
                    if(res.data.success === true) {
                        this.promocodes = this.promocodes.filter((item) => item.id != promocode.id)
                        this.newPromocode = null
                    }
                    this.is_loading = false
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    },
    mounted() {
        this.getPromocodes()
    }
}
</script>