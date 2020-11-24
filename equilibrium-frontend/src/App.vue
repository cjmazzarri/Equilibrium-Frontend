<template>
  <div id="app">
    <RegisterPayment/>
  </div>
</template>

<script>
import AddClientS5_2 from "@/views/AddClient/AddClientS5_2";

export default {
  name: 'App',
  components: {
    AddClientS5_2
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
