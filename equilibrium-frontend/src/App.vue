<template>
  <div id="app">
    <Login/>
  </div>
</template>

<script>
import Login from "@/views/Login";

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
