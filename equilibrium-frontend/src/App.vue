<template>
  <div id="app">
    <LandingPage/>
  </div>
</template>

<script>
import LandingPage from "@/views/LandingPage";

export default {
  name: 'App',
  components: {
    LandingPage
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
