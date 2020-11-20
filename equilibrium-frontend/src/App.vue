<template>
  <div id="app">
    <RecoverPassword/>
  </div>
</template>

<script>
import RecoverPassword from "@/views/RecoverPassword";

export default {
  name: 'App',
  components: {
    RecoverPassword
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
