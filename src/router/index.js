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
const Register = () =>
    import ('views/register/Register.vue')
const CreateClass = () =>
    import ('../views/createClass/CreateClass.vue')


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
    {
        path: '/register',
        component: Register
    },
    {
        path: '/createclass',
        component: CreateClass
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {

    if (to.path === '/profile') {
        if (store.state.login !== 1) next({ path: '/login' })
        else {
            next()
        }
    } else next()
})

export default router