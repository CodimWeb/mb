import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes.js'
import store from '../store'

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    }
})

router.beforeEach((to, from, next) => {
    // if (store.getters.user) {
    //     if (to.matched.some(route => route.meta.guard === 'guest')) next({
    //         name: 'dashboard'
    //     })
    //     else next();
    // } else {
    //     if (to.matched.some(route => route.meta.guard === 'auth')) next({
    //         name: 'login',
    //         params: {lang: 'en'}
    //     })
    //     else next();
    // }

    // if (to.matched.some(route => route.meta.guard === 'auth_page')) next({
    //     name: 'dashboard',
    // })

    if (store.getters.user && store.getters.admin) {
        next()
    } else if (store.getters.user && !store.getters.admin) {
        if (to.matched.some(route => route.meta.guard === 'auth_page') || to.matched.some(route => route.meta.guard === 'admin'))
            next({name: 'dashboard'})
        else
            next();
    } else {
        if (to.matched.some(route => route.meta.guard === 'auth') || to.matched.some(route => route.meta.guard === 'admin'))
            next({name: 'front-page', params: {lang: to.params.lang}})
        else
            next();
    }
})

export default router;
