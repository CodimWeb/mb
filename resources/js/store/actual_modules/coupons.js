import {useWindowSize} from "vue-window-size";

export default {
    state: {
        actual_coupons: []
    },
    actions: {
        async fetchActualCoupons(ctx) {
            // await axios
            //     .get(`/api/actual/coupons/list`)
            //     .then((res) => {
            //         ctx.commit('updateActualCoupons', res.data)
            //     })
            //     .catch((err) => {
            //         if (err.statusCode === 401) {
            //             let localStorageCoupons = localStorage.getItem('coupons')
            //             if (!localStorageCoupons) {
            //                 localStorageCoupons = []
            //             }
            //             ctx.commit('updateCoupons', localStorageCoupons)
            //         }
            //     })

            const actualCoupons = sessionStorage.getItem('actualCoupons') ? JSON.parse(sessionStorage.getItem('actualCoupons')) : [];
            ctx.commit('updateActualCoupons', actualCoupons)

        },
        // async removeActualCoupon(ctx, id) {
        //     await axios
        //         .get(`/api/actual/coupons/delete/${id}`)
        //         .then((res) => {
        //             ctx.commit('updateActualCoupons', res.data)
        //         })
        //         .catch((err) => {
        //             if (err.statusCode === 401) {
        //                 let localStorageCoupons = localStorage.getItem('coupons')
        //                 if (localStorageCoupons) {
        //                     localStorageCoupons.forEach((item) => {
        //                         if (item.id === id) {
        //                             return false
        //                         }
        //                         return item
        //                     })
        //                 }
        //                 ctx.commit('updateActualCoupons', localStorageCoupons)
        //             }
        //         })
        // }

        async updateActualCouponOdds(ctx) {
            let oddsIds = [];
            this.getters.getActualCoupons.forEach((item) => {
                oddsIds.push(item.odd_id)
            })

            await axios.post(`/api/actual/update-odds`, {
                oddsIds: oddsIds,
            }).then((res) => {
                ctx.commit('updateActualCouponOdds', res.data)
            }).catch((err) => {
                console.log(err)
            })
        },
    },
    mutations: {
        updateActualCoupons(state, data) {
            state.actual_coupons = data
        },

        updateActualCouponOdds(state, data) {
            let actualCoupons = sessionStorage.getItem('actualCoupons') ? JSON.parse(sessionStorage.getItem('actualCoupons')) : [];
            if(actualCoupons.length) {
                // если событие закончилось удаляем ставку из корзины
                data.forEach((odd) => {
                    if(odd.winner !== 0) {
                        actualCoupons = actualCoupons.filter((coupon) => coupon.odd_id !== odd.id)
                    }
                })

                actualCoupons.forEach((coupon) => {
                    let odd = data.find((odd) => odd.id === coupon.odd_id)
                    if (coupon.type === 'team_home') {
                        coupon.chance = odd.choice_home
                    }
                    if (coupon.type === 'team_away') {
                        coupon.chance = odd.choice_away
                    }
                    if (coupon.type === 'draw') {
                        coupon.chance = odd.choice_draw
                    }
                })

                sessionStorage.setItem('actualCoupons', JSON.stringify(actualCoupons))
                state.actual_coupons = actualCoupons
            }
        },

        async addActualCoupon(state, coupon) {
            if (!coupon) {
                return false;
            }

            let events = [];
            let tournaments = [];
            tournaments = JSON.parse(JSON.stringify(this.getters.getActualEvents[0].tournaments))
            tournaments.map((tournament) => {
                tournament.events.map((event) => {
                    events.push(event)
                })
            });

            console.log(coupon);
            coupon.event = events.find((event) => event.id === coupon.event);
            let actualCoupons = sessionStorage.getItem('actualCoupons') ? JSON.parse(sessionStorage.getItem('actualCoupons')) : [];

            actualCoupons = actualCoupons.filter((item) => item.odd_id !== coupon.odd_id);
            actualCoupons.push(coupon)


            sessionStorage.setItem('actualCoupons', JSON.stringify(actualCoupons))
            state.actual_coupons = actualCoupons
            const {width, height} = useWindowSize();
            setTimeout(() => {
                if(width >= 992) {
                    document.querySelector('.betting-coupons__list').scrollTo(0, document.querySelector('.betting-coupons__list').scrollHeight)
                }
            })


            //todo вынести в экшн если понадобиться

            // await axios
            //     .post(`/api/actual/coupons/new`, coupon)
            //     .then((res) => {
            //         state.actual_coupons = res.data
            //     })
            //     .catch((err) => {
            //         if (err.statusCode === 401) {
            //             let localStorageCoupons = localStorage.getItem('coupons')
            //             if (!localStorageCoupons) {
            //                 localStorageCoupons = []
            //             }
            //             localStorageCoupons.push(coupon)
            //             localStorage.setItem('coupons', localStorageCoupons)
            //             state.actual_coupons = localStorageCoupons
            //         }
            //     })
        },

        removeActualCoupon(state, index) {
            let actualCoupons = sessionStorage.getItem('actualCoupons') ? JSON.parse(sessionStorage.getItem('actualCoupons')) : [];
            console.log(actualCoupons)
            actualCoupons = actualCoupons.filter((item, idx) => idx !== index);
            sessionStorage.setItem('actualCoupons', JSON.stringify(actualCoupons))
            console.log(actualCoupons)
            state.actual_coupons = actualCoupons;
        },

        cleanActualCoupon(state) {
            state.actual_coupons = [];
            sessionStorage.removeItem('actualCoupons')
        }
    },
    getters: {
        getActualCoupons(state) {
            return state.actual_coupons
        }
    }
}