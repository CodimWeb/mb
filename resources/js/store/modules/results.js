export default {
    state: {
        categories: [],
        events: []
    },
    actions: {
        fetchResultsCategories(ctx) {
            axios
                .get("/api/results/list")
                .then((res) => {
                    if (res.status === 200) {
                        ctx.commit("updateResultsCategories", res.data)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        fetchResultsEvents(ctx, category_slug) {
            if (!category_slug) {
                category_slug = "all"
            }

            axios
                .get(`/api/results/get/${category_slug}`)
                .then((res) => {
                    if (res.status === 200) {
                        ctx.commit("updateResultsEvents", res.data)
                    }
                })
        }
    },
    mutations: {
        updateResultsCategories(state, data) {
            state.categories = data
        },
        updateResultsEvents(state, data) {
            state.events = data
        }
    },
    getters: {
        getResultsCategories(state) {
            return state.categories
        },
        getResultsEvents(state) {
            return state.events
        }
    }
}