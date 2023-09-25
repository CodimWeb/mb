import axios from "axios";

export default {
    state: {
        actual_balance: {
            user: null,
            real_balance: 0
        },
        envVars: [],
        canWithdraw: true,
    },
    actions: {
        async fetchActualBalance(ctx) {
            await axios.get(`/api/actual/balance/get`)
                .then((res) => {
                    ctx.commit('updateActualBalance', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async fetchEnvVars(ctx) {
            await axios.get('/api/deposit/system')
                .then((res) => {
                    ctx.commit('updateEnvVars', res.data)
                })
                .catch(function (response) {
                    console.log(response);
                })
        },
        async checkCanWithdraw(ctx) {
            await axios.get('/api/actual/withdraw-funds/check')
                .then((res) => {
                    console.log(res)
                    ctx.commit('updateCanWithdraw', res.data)
                })
                .catch(function (response) {
                    console.log(response);
                })
        }
    },
    mutations: {
        updateActualBalance(state, data) {
            state.actual_balance = data
        },
        updateEnvVars(state, data) {
            state.envVars = data
        },
        updateCanWithdraw(state, data) {
            state.canWithdraw = data
        }
    },
    getters: {
        getActualBalance(state) {
            return state.actual_balance
        },
        getEnvVars(state) {
            return Object.entries(state.envVars)
        },
        getCanWithdraw(state) {
            return state.canWithdraw
        }
    }
}
