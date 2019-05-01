// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false;
// import storage from './public/javascripts/storage';
// Vue.prototype.$storage = storage

import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/base/', // api 的 base_url
    
})
Vue.prototype.$http = instance;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

