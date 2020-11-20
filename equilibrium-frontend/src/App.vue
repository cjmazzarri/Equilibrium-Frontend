<template>
  <div id="app">
    <SentEmail/>
  </div>
</template>

<script>

import SentEmail from "@/views/SentEmail";

export default {
  name: 'App',
  components: {
    SentEmail
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
