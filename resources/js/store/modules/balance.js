export default {
    state: {
        balance: null,
    },
    actions: {
        fetchBalance(ctx) {
            axios
                .get("/api/balance/get")
                .then((res) => {
                    if (res.status === 200) {
                        ctx.commit("updateBalance", res.data)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    mutations: {
        updateBalance(state, data) {
            state.balance = data;

            if (data === undefined || data.balance === undefined) {
                state.balance = {
                    balance: 0
                }
            }
        }
    },
    getters: {
        getBalance(state) {
            return state.balance
        }
    }
}
