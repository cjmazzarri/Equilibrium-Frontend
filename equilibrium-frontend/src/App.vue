<template>
  <div id="app">
    <SignUpComplete/>
  </div>
</template>

<script>
import SignUpComplete from "@/views/SignUpComplete";

export default {
  name: 'App',
  components: {
    SignUpComplete
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
