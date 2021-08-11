import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'


const UpdataUserInfo = () =>
    import ('../views/updataUserInfo/UpdataUserInfo.vue')

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
const UpdataClass = () =>
    import ('../views/updataClass/UpdataClass.vue')
const ProfileMyClass = () =>
    import ('../views/profile/childComponents/ProfileMyClass.vue')
const ProfileMyHelp = () =>
    import ('../views/profile/childComponents/ProfileMyHelp.vue')
const ProfileMyStudy = () =>
    import ('../views/profile/childComponents/ProfileMyStudy.vue')
const ProfileMyOrder = () =>
    import ('../views/profile/childComponents/ProfileMyOrder.vue')
const ProfileMyInfo = () =>
    import ('../views/profile/childComponents/ProfileMyInfo.vue')


Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: { requireAuth: false }
    },
    {
        path: '/search',
        component: SearchResult,
        meta: { requireAuth: false }
    },
    {
        path: '/class',
        component: ClassDetail,
        meta: { requireAuth: false }
    },
    {
        path: '/login',
        component: Login,
        meta: { requireAuth: false }
    },
    {
        path: '/profile',
        component: Profile,
        children: [{
                path: 'info',
                component: ProfileMyInfo,
                meta: { active: "info", requireAuth: true },
            },
            {
                path: 'study',
                component: ProfileMyStudy,
                meta: { active: "study", requireAuth: true }
            },
            {
                path: 'class',
                component: ProfileMyClass,
                meta: { active: "class", requireAuth: true }
            },
            {
                path: 'help',
                component: ProfileMyHelp,
                meta: { active: "help", requireAuth: true }
            },
            {
                path: 'order',
                component: ProfileMyOrder,
                meta: { active: "order", requireAuth: true }
            },
            {
                path: '',
                redirect: 'info'
            }
        ]
    },
    {
        path: '/register',
        component: Register,
        meta: { requireAuth: false }
    },
    {
        path: '/createclass',
        component: CreateClass,
        meta: { requireAuth: true }
    },
    {
        path: '/updataclass',
        component: UpdataClass,
        meta: { requireAuth: true }
    },
    {
        path: '/updataMyInfo',
        component: UpdataUserInfo,
        meta: { requireAuth: true }
    }




]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth == true) {
        if (store.state.login != 1 && window.sessionStorage.getItem('login') != 1) next({ path: '/login' })
        else {
            next()
        }
    } else next()
})

export default router