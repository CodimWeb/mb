export default {
    state: {
        bets: []
    },
    actions: {
        async fetchBets(ctx) {
            await axios
                .get(`/api/bets/list`)
                .then((res) => {
                    ctx.commit('updateBets', res.data)
                })
                .catch((err) => {
                    if(err.statusCode === 401) {
                        ctx.commit('updateBets', [])
                    }
                })
        }
    },
    mutations: {
        updateBets(state, data) {
            state.bets = data
        }
    },
    getters: {
        getBets(state) {
            return state.bets
        }
    }
}