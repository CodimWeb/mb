import { createI18n } from "vue-i18n/dist/vue-i18n";

import './libs/web3.min';
import './libs/bignumber';

import './bootstrap';

import 'vue-toast-notification/dist/theme-default.css';
import '../scss/main.scss';

import { createApp } from 'vue';
import App from './components/App.vue'
import router from './router';
import store from './store';
import Toast from 'vue-toast-notification';
import { i18nVue } from 'laravel-vue-i18n';
import VBodyScrollLock from 'v-body-scroll-lock';

axios.defaults.withCredentials = true;

let locale = window.location.pathname.replace(/^\/([^\/]+).*/i, '$1');

const clickOutside = {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = event => {
            if (!(el == event.target || el.contains(event.target))) {
                event.stopPropagation();
                binding.value();
            }
        };
        document.addEventListener("click", el.clickOutsideEvent);
        document.addEventListener("touchstart", el.clickOutsideEvent);
    },
    unmounted: el => {
        document.removeEventListener("click", el.clickOutsideEvent);
        document.removeEventListener("touchstart", el.clickOutsideEvent);
    },
};

store.dispatch('getUser').then(() => {
    createApp(App)
        .use(router)
        .use(i18nVue, {
            lang: locale,
            resolve: lang => import(`./translates/${lang}.json`),
            legacy: true
        })
        .use(store)
        .use(Toast, {
            transition: "Vue-Toastification__bounce",
            maxToasts: 5,
            newestOnTop: true
        })
        .use(VBodyScrollLock)
        .directive("click-outside", clickOutside)
        .mount("#app");
});
