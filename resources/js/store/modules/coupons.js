export default {
    /*
    [
        {
            id,
            game_id,
            user_id,
            selected,
            rate,
            game: {
                id,
                title,
                candidate_1_name,
                candidate_2_name,
                event_id,
                date_start,
                candidate_1,
                candidate_2,
                draw,
                active
            }
        }
    ]
     */
    actions: {
        async fetchCoupons(ctx) {
            await axios
                .get(`/api/coupons/list`)
                .then((res) => {
                    ctx.commit('updateCoupons', res.data)
                })
                .catch((err) => {
                    if (err.statusCode === 401) {
                        let localStorageCoupons = localStorage.getItem('coupons')
                        if (!localStorageCoupons) {
                            localStorageCoupons = []
                        }
                        ctx.commit('updateCoupons', localStorageCoupons)
                    }
                })
        },
        async removeCoupon(ctx, game_id) {
            await axios
                .post(`/api/coupons/remove/${game_id}`)
                .then((res) => {
                    ctx.commit('updateCoupons', res.data)
                })
                .catch((err) => {
                    if (err.statusCode === 401) {
                        let localStorageCoupons = localStorage.getItem('coupons')
                        if (localStorageCoupons) {
                            localStorageCoupons.forEach((item) => {
                                if (item.game_id === game_id) {
                                    return false
                                }
                                return item
                            })
                        }
                    }
                })
        }
    },
    mutations: {
        updateCoupons(state, data) {

            state.coupons = data
        },
        async addCoupon(state, coupon) {
            if (!coupon) {
                return false
            }

            let has_error = false;
            state.coupons.forEach((item) => {
                if(item.game_id === coupon.game.id) {
                    has_error = true
                }
            });

            if(has_error) {
                return false
            }

            await axios
                .post(`/api/coupons/add`, coupon)
                .then((res) => {
                    state.coupons = res.data
                })
                .catch((err) => {
                    if (err.statusCode === 401) {
                        let localStorageCoupons = localStorage.getItem('coupons')
                        if (!localStorageCoupons) {
                            localStorageCoupons = []
                        }
                        localStorageCoupons.push(coupon)
                        localStorage.setItem('coupons', localStorageCoupons)
                        state.coupons = localStorageCoupons
                    }
                })
        }
    },
    state: {
        coupons: []
    },
    getters: {
        getCoupons(state) {
            return state.coupons
        }
    }
}