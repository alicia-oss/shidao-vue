import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        login: 0, //登录表示
        userData: {
            userId: window.sessionStorage.getItem('userId'),
            userName: window.sessionStorage.getItem('userName'),
            userImg: window.sessionStorage.getItem('userImg'),
        }
    },
    mutations: {

        SetUserState(state, userInfo) {
            state.login = userInfo.login;
            state.userData.userId = userInfo.userId;
            state.userData.userName = userInfo.userName;
            state.userData.userImg = userInfo.userImg;
            window.sessionStorage.setItem('userId', userInfo.userId);
            window.sessionStorage.setItem('userName', userInfo.userName);
            window.sessionStorage.setItem('userImg', userInfo.userImg);
            window.sessionStorage.setItem('login', userInfo.login);
        },
        GetUserState(state) {
            state.login = window.sessionStorage.getItem('login');

        }
    },
    actions: {},
    modules: {}
})