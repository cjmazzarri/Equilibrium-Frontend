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
</style>
