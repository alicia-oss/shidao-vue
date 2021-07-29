import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('views/home/Home.vue')
const SearchResult = () =>
    import ('views/searchResult/SearchResult.vue')
const ClassDetail = () =>
    import ('views/classDetail/ClassDetail.vue')
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/search',
        component: SearchResult
    },
    {
        path: '/class',
        component: ClassDetail
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router