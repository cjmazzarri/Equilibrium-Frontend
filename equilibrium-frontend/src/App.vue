<template>
  <div id="app">
    <AddClientS6_1/>
  </div>
</template>

<script>


import AddClientS6_1 from "@/views/AddClient/AddClientS6_1";
export default {
  name: 'App',
  components: {
    AddClientS6_1
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
