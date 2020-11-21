<template>
  <div id="app">
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from "@/views/Dashboard";

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
