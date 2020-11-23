<template>
  <div id="app">
    <AddClientS5_3/>
  </div>
</template>

<script>
import AddClientS5_3 from "@/views/AddClient/AddClientS5_3";

export default {
  name: 'App',
  components: {
    AddClientS5_3
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
