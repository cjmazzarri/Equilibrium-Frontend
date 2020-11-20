<template>
  <div id="app">
    <LoginComplete/>
  </div>
</template>

<script>

import LoginComplete from "@/views/LoginComplete";

export default {
  name: 'App',
  components: {
    LoginComplete
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
