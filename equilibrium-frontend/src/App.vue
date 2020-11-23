<template>
  <div id="app">
    <AddClientS6/>
  </div>
</template>

<script>
import AddClientS6 from "@/views/AddClient/AddClientS6";

export default {
  name: 'App',
  components: {
    AddClientS6
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
