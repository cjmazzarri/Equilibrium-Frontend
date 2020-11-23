<template>
  <div id="app">
    <RegisterSale/>
  </div>
</template>

<script>
import RegisterSale from "@/views/RegisterSale";

export default {
  name: 'App',
  components: {
    RegisterSale
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
