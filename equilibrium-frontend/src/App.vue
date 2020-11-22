<template>
  <div id="app">
    <AddClientS3/>
  </div>
</template>

<script>
import AddClientS3 from "@/views/AddClient/AddClientS3";

export default {
  name: 'App',
  components: {
    AddClientS3
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
