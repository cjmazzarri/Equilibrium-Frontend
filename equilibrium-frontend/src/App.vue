<template>
  <div id="app">
    <VerCuentas/>
  </div>
</template>

<script>
import VerCuentas from "@/views/VerCuentas";

export default {
  name: 'App',
  components: {
    VerCuentas
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
