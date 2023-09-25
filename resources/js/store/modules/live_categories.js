export default {
    actions: {
        fetchLiveCategories(ctx, params) {
            axios
                .get(`/api/live/list`)
                .then((res) => {
                    ctx.commit("updateLiveCategories", res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    state: {
        live_categories: []
    },
    mutations: {
        updateLiveCategories(state, data) {
            state.live_categories = data
        }
    },
    getters: {
        getLiveCategories(state) {
            return state.live_categories
        }
    }
}