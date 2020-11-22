<template>
  <div id="app">
    <RegisterPayment/>
  </div>
</template>

<script>
import RegisterPayment from "@/views/RegisterPayment";

export default {
  name: 'App',
  components: {
    RegisterPayment
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
