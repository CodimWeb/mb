export default {
    state: {
        actual_sports: []
    },
    actions: {
        async fetchActualSports(ctx, data) {
            await axios
                .get(`/api/actual/sport/list`)
                .then((res) => {
                    ctx.commit('updateActualSports', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    mutations: {
        updateActualSports(state, data) {
            state.actual_sports = data
        }
    },
    getters: {
        getActualSports(state) {
            return state.actual_sports
        }
    }
}
