<template>
  <div id="app">
    <AddClientS4_2/>
  </div>
</template>

<script>
import AddClientS4_2 from "@/views/AddClient/AddClientS4_2";

export default {
  name: 'App',
  components: {
    AddClientS4_2
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
