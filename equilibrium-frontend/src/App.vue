<template>
  <div id="app">
    <AddClientS2/>
  </div>
</template>

<script>
import AddClientS2 from "@/views/AddClient/AddClientS2";

export default {
  name: 'App',
  components: {
    AddClientS2
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
