import Vue from 'vue'
import router from "@/router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
