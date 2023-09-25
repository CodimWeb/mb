export default {
    actions: {
        fetchSports(ctx, params) {
            let category_slug = params.category

            if(!category_slug) {
                category_slug = 'sport'
            }

            axios
                .get(`/api/sports/get/${category_slug}`)
                .then((res) => {
                    ctx.commit("updateSports", res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    state: {
        sports: []
    },
    mutations: {
        updateSports(state, data) {
            state.sports = data
        }
    },
    getters: {
        getSports(state) {
            return state.sports
        }
    }
}
