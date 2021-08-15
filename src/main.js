import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

import axios from 'axios';
import VueAxios from "vue-axios";
import { getdomainMapper } from "./utils/domainMapper";
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$domainMapper = []
getdomainMapper(Vue.prototype.$domainMapper);

Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.withCredentials = true;
new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount('#app')