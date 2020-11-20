<template>
  <div class="Dashboard">
    <div class="sidenav">
      <img src="../assets/EquilibriumLogo.png" class="logo" alt="LogoEquilibrium">
      <b-button class="category category-active" href="#">
        <svg class="category-indicator" width="10" height="61" viewBox="0 0 10 61"><defs><clipPath><rect width="10" height="61"/></clipPath></defs><g clip-path="url(#clip-path)"><rect width="228" height="59" rx="8"/></g></svg>
        <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text s-text-active">Dashboard</p>
      </b-button>
      <b-button class="category" href="#">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Añadir cliente</p>
      </b-button>
      <b-button class="category" href="#">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Ver cuentas</p>
      </b-button>
      <b-button class="category" href="#">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Registrar pago</p>
      </b-button>
      <b-button class="category" href="#">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Registrar venta</p>
      </b-button>
    </div>
    <div class="main">

    </div>
  </div>
</template>

<script>
export default {
name: "Dashboard"
}
</script>

<style lang="scss">
.sidenav {
  height: 100%;
  width: 14.74vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #202020;
  overflow-x: hidden;
  padding-top: 1.77vw;
}

.sidenav .logo {
  margin: 0 auto 1.7vw auto;
  width: 10.83vw;
  height: auto;
}

.sidenav .category {
  width: 11.5vw;
  height: 3.1vw;
  margin: 0 auto 0.9vw 1.9vw;
  text-decoration: none;
  font-size: 1em;
  color: #818181;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.42vw;
  background: #fff;
  text-align: left;
  border: transparent;
}

.sidenav .category:hover {
  background: #ddd;
}

.sidenav .category:focus {
  background: #fff;
}

.sidenav .category-indicator {
  position: relative;
  left: -2.5vw;
  top: 0.05vw;
  fill: #A5FFC9;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.sidenav .category-active {
  border-radius: 0.42vw;
  background: linear-gradient(90deg, #a5ffc9 0%, #4dbfd1 100%);
}

.sidenav .category-active:hover, .sidenav .category-active:focus {
  background: linear-gradient(135deg, #a5ffc9 0%, #4dbfd1 100%);
}

.sidenav .s-circle {
  position: absolute;
  left: 3vw;
  margin: auto;
  width: 20px;
  height: 20px;
  fill: #282a3f;
}

.sidenav .s-circle-active {
  fill: #584FD8;
}

.sidenav .s-text {
  margin: 0.4vw auto auto 2.5vw;
  font-size: 1.08em;
  font-weight: 500;
  color: #282a3f;
}

.sidenav .s-text-active {
  position: relative;
  left: -0.5vw;
  font-weight: 600;
  color: #584fd8;
}

/* Style page content */
.main {
  margin-left: 14.74vw;
  padding: 0px 10px;
}

</style>
