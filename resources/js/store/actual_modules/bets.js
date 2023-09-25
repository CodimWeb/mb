import {useToast} from 'vue-toast-notification';
import { I18n } from 'laravel-vue-i18n'

let locale = window.location.pathname.replace(/^\/([^\/]+).*/i, '$1');

const i18n = new I18n({
    lang: locale,
    resolve: lang => import(`../../translates/${lang}.json`),
    legacy: true
})

// console.log($t)
// const i18nPt = new I18n({
//     lang: 'pt',
//     resolve: resolver
// })
//
// i18nVue, {
//     lang: locale,
//     resolve: lang => import(`./translates/${lang}.json`),
//     legacy: true
// })
//
// i18nEn.trans('Welcome!') // will output "Welcome!"
// i18nPt.trans('Welcome!') // will output "Bem-vindo!"

export default {
    state: {
        actual_bets: [],
        isSuccessBets: false,
        isLoadingMakeBet: false,
    },
    actions: {
        async fetchActualBets(ctx) {
            await axios
                .get(`/api/actual/bets/list`)
                .then((res) => {
                    ctx.commit('updateActualBets', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    mutations: {
        updateActualBets(state, data) {
            state.actual_bets = data
        },
        async createActualBet(state, bet) {
            const $toast = useToast();
            state.isLoadingMakeBet = true
            console.log()

            await axios
                .post('/api/actual/bets/add', bet)
                .then((res) => {
                    state.isSuccessBets = true
                    state.actual_bets = res.data
                })
                .catch((err) => {
                    state.isSuccessBets = false
                    $toast.error(i18n.trans(err.response.data.message), {
                        position: "top-right",
                        timeout: 3000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: false,
                        hideProgressBar: false,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                    console.log(err)
                })
                .finally(() => {
                    state.isLoadingMakeBet = false
                })
        }
    },
    getters: {
        getActualBets(state) {
            return state.actual_bets
        },
        isSuccessBets(state) {
            return state.isSuccessBets
        },
        getIsLoadingMakeBet(state){
            return state.isLoadingMakeBet
        },
    }
}