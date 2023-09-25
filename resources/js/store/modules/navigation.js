export default {
    actions: {
        fetchNavigationMain(ctx) {
            axios.get(`/api/navigation/main-menu`)
                .then((res) => {
                    if (res.status == 200) {
                        ctx.commit("updateNavigationMain", res.data)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    state: {
        navigation_main: null,
    },
    mutations: {
        updateNavigationMain(state, data) {
            state.navigation_main = data;
        }
    },
    getters: {
        getNavigationMain(state) {
            return state.navigation_main;
        }
    }
}
