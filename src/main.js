import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import axios from 'axios';
// import http from './utils/request'

import './assets/css/icon.css';
import './assets/icon/iconfont.css';
import './components/common/directives';
import "babel-polyfill";

Vue.config.productionTip = false
Vue.use(ElementUI, {
    size: 'medium'
});
Vue.prototype.$axios = axios.create({
    // baseURL: "http://172.30.229.132:8080",
    baseURL: "http://localhost:8080",
});


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
