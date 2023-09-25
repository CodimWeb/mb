export default {
    state: {
        actual_global_results: []
    },
    actions: {
        async fetchActualResults(ctx, data) {
            let url;
            console.log(data);
            if (data.sport === null) {
                url = '/api/actual/results/sport/football';
            } else {
                url = `/api/actual/results/sport/${data.sport}`
            }

            await axios
                .get(url)
                .then((res) => {
                    ctx.commit('updateActualResults', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    mutations: {
        updateActualResults(state, data) {
            state.actual_global_results = data
        }
    },
    getters: {
        getActualResults(state) {
            return state.actual_global_results
        }
    }
}
