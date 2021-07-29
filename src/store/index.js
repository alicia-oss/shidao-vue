import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        login: 1, //登录表示
        userData: {
            userName: "测试store",
            userImg: "admin.jpg",
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})