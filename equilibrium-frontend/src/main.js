import Vue from 'vue'
import SignUp from "@/components/SignUp";

Vue.config.productionTip = false

new Vue({
  render: h => h(SignUp),
}).$mount('#app')
