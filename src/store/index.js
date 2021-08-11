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
            collectionClass: window.sessionStorage.getItem('collectionClass'),
            collectionQuestion: window.sessionStorage.getItem('collectionQuestion')
        }
    },
    mutations: {

        SetUserState(state, userInfo) {
            state.userData.collectionClass = userInfo.collection_class;
            state.userData.collectionQuestion = userInfo.collection_question;
            state.login = userInfo.login;
            state.userData.userId = userInfo.userId;
            state.userData.userName = userInfo.userName;
            state.userData.userImg = userInfo.userImg;
            window.sessionStorage.setItem('collectionClass', userInfo.collection_class);
            window.sessionStorage.setItem('collectionQuestion', userInfo.collection_question);
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