import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddWeeklyPage from "../views/AddWeeklyPage";
import WeeklyDetailPage from "@/views/WeeklyDetailPage";
import LoginPage from "@/views/LoginPage";
import GroupWeekly from "@/views/GroupWeekly";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/add',
        name: 'AddWeekly',
        component: AddWeeklyPage
    },
    {
        path: '/weeklydetail',
        name: 'WeeklyDetail',
        component: WeeklyDetailPage
    },
    {
        path: '/groupweekly',
        name: 'GroupWeekly',
        component: GroupWeekly
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
