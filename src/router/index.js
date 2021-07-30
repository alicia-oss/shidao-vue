import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'


const Home = () =>
    import ('views/home/Home.vue')
const SearchResult = () =>
    import ('views/searchResult/SearchResult.vue')
const ClassDetail = () =>
    import ('views/classDetail/ClassDetail.vue')
const Login = () =>
    import ('views/login/Login.vue')
const Profile = () =>
    import ('views/profile/Profile.vue')
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
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/profile',
        component: Profile
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {

    if (to.path === '/profile') {
        console.log(from);
        if (store.state.login !== 1) next({ path: '/login' })
    } else next()
})

export default router