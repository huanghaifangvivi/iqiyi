import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './assets/js/router.js';
Vue.use(VueRouter);
import "./assets/font/iconfont.css";
import "./assets/font/iconfont.js";

import axios from 'axios'
Vue.prototype.$http=axios;

import Mint from 'mint-ui';
Vue.use(Mint)
import '../node_modules/mint-ui/lib/style.css';
import '../node_modules/mint-ui/lib/index.js';
import './assets/css/cssreset.css';


new Vue({
  el: '#app',
  render: h => h(App),
  router
})


