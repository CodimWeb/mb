export default {
    state: {
        favorites: []
    },
    actions: {
        fetchFavorites(ctx) {
            axios
                .get("/api/favorite/list")
                .then((res) => {
                    if (res.status == 200) {
                        ctx.commit("updateFavorites", res.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
    mutations: {
        updateFavorites(state, data) {
            state.favorites = data;
        },
        addFavorite(state, game_id) {
            axios
                .post("/api/favorite/add", {
                    game_id
                })
                .then((res) => {
                    if (res.status == 200) {
                        state.favorites = res.data;
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
    getters: {
        getFavorites(state) {
            return state.favorites;
        }
    }
}
