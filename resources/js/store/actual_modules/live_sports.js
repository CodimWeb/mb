export default {
    state: {
        actual_live_sports: []
    },
    actions: {
        async fetchActualLiveSports(ctx) {
            await axios
                .get(`/api/actual/sport/live/list`)
                .then((res) => {
                    ctx.commit('updateActualLiveSports', res.data)
                }).catch((err) => {
                    console.log(err)
                })
        }
    },
    mutations: {
        updateActualLiveSports(state, data) {
            state.actual_live_sports = data
        }
    },
    getters: {
        getActualLiveSports(state) {
            return state.actual_live_sports
        }
    }
}