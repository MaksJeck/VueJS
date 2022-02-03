import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "../DashBoard.vue";
import Page404 from "../Page404.vue";
import addpaymentForm from "../addpaymentForm.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard
    },
    {
        path: '/dashboard/:page',
        name: 'DashBoard',
        component: DashBoard
    },
    {
        path: '/about*',
        name: 'About',
       component: () => import ('../About.vue')
    },
    {
        path: '/add/payment/:category',
        name: 'addpaymentForm',
        component: addpaymentForm
    },

    {
        path: '*',
        component: Page404
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router