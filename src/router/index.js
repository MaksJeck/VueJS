import Vue from "vue";
import VueRouter from "vue-router";
// import DashBoard from "../DashBoard.vue";
// import Page404 from "../Page404.vue";
// import addpaymentForm from "../components/AddPaymentForm.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        name: 'DashBoard',
        // component: DashBoard
        component: () => import (/* webpackChunkName: "DashBoard" */ '../DashBoard.vue')
    },
    {
        path: '/dashboard/:page',
        name: 'DashBoardPage',
        // component: DashBoard
        component: () => import (/* webpackChunkName: "DashBoardPage" */ '../DashBoard.vue')
    },
    {
        path: '/about*',
        name: 'About',
       component: () => import (/* webpackChunkName: "About" */ '../About.vue')
    },
    {
        path: '/add/payment/:category',
        name: 'addpaymentForm',
        // component: addpaymentForm
        component: () => import (/* webpackChunkName: "AddPaymentForm" */ '../components/AddPaymentForm.vue')        
    },
    {
        path: '*',
        // component: Page404
        component: () => import (/* webpackChunkName: "Page404" */ '../Page404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router