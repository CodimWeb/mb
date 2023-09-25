import axios from 'axios';
import {createStore} from 'vuex'
import sharedMutations from 'vuex-shared-mutations';

import actual_coupons from './actual_modules/coupons.js';
import actual_bets from './actual_modules/bets';
import actual_sports from './actual_modules/sports';
import actual_events from './actual_modules/events';
import actual_balance from './actual_modules/balance';
import actual_favourite from './actual_modules/favourite';
import actual_live_sports from './actual_modules/live_sports';
import actual_live_events from './actual_modules/live_events';
import actual_results from './actual_modules/results';

import coupons from './modules/coupons';
import bets from './modules/bets';
import category from './modules/category';
import favorite from './modules/favorite';
import navigation from './modules/navigation';
import subcategory from './modules/subcategory';
// import events from './modules/events';
import balance from './modules/balance';
import results from './modules/results';
import live_categories from './modules/live_categories';

// new states
import sports from './modules/sports';
import {ethers} from "ethers";

export default createStore({
    state() {
        return {
            user: null,
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        verified(state) {
            if (state.user) return state.user.email_verified_at
            return null
        },
        id(state) {
            if (state.user) return state.user.id
            return null
        },
        admin(state) {
            if (state.user) return state.user.is_admin
            return null
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        async web3Login() {
            this.busy = true;
            if (!window.ethereum) {
                alert('MetaMask not detected. Please install MetaMask first.');
                this.busy = false;
                return;
            }

            const provider = new ethers.providers.Web3Provider(window.ethereum);

            let response = await fetch('/web3-login-message');
            const message = await response.text();

            await provider.send("eth_requestAccounts", []);
            const address = await provider.getSigner().getAddress();
            const signature = await provider.getSigner().signMessage(message);

            response = await fetch('/web3-login-verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'address': address,
                    'signature': signature
                })
            });

            this.busy = false;
            location.href = await response.text();
        },
        async login({dispatch}, payload) {
            try {
                await axios.get('/sanctum/csrf-cookie');
                await axios.post('/api/login', payload).then((res) => {
                    return dispatch('getUser');
                }).catch((err) => {
                    throw err.response
                });
            } catch (e) {
                throw e
            }
        },
        async register({dispatch}, payload) {
            try {
                await axios.post('/api/register', payload).then((res) => {
                    return dispatch('login', {'email': payload.email, 'password': payload.password})
                }).catch((err) => {
                    throw (err.response)
                })
            } catch (e) {
                throw (e)
            }
        },
        async logout({commit}) {
            await axios.post('/api/logout').then((res) => {
                commit('setUser', null);
                location.href = '/'
            }).catch((err) => {
                console.log(err)
            })
        },
        async getUser({commit}) {
            await axios.get('/api/user').then((res) => {
                commit('setUser', res.data);
            }).catch((err) => {
                console.log(err)
            })
        },
        async profile({commit}, payload) {
            await axios.patch('/api/profile', payload).then((res) => {
                commit('setUser', res.data.user);
            }).catch((err) => {
                throw err.response
            })
        },
        async password({commit}, payload) {
            await axios.patch('/api/password', payload).then((res) => {
            }).catch((err) => {
                throw err.response
            })
        },
        async verifyResend({dispatch}, payload) {
            let res = await axios.post('/api/verify-resend', payload)
            if (res.status != 200) throw res
            return res
        },
        async verifyEmail({dispatch}, payload) {
            let res = await axios.post('/api/verify-email/' + payload.id + '/' + payload.hash)
            if (res.status != 200) throw res
            dispatch('getUser')
            return res
        },
    },
    modules: {
        bets,
        coupons,
        category,
        favorite,
        navigation,
        subcategory,
        balance,
        sports,
        results,
        live_categories,

        // NEW
        actual_bets,
        actual_coupons,
        actual_sports,
        actual_events,
        actual_balance,
        actual_favourite,
        actual_live_sports,
        actual_live_events,
        actual_results
    },
    plugins: [sharedMutations({predicate: ['setUser']})],
})
