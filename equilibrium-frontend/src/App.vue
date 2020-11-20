<template>
  <div id="app">
    <SignUp/>
  </div>
</template>

<script>
import SignUp from "@/views/SignUp";

export default {
  name: 'App',
  components: {
    SignUp
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
