import Vue from 'vue'
import router from "@/router";
import axios from 'axios';
import VueAxios from 'vue-axios'
import store from '../store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
