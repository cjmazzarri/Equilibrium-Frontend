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
      <b-navbar class="navbar navbar-dark bg-transparent">
        <b-navbar-nav id="nav-text">
          <div class="nav-hamburger"><img src="../assets/HamburgerMenu.png"></div>
          <div class="nav-search"><img src="../assets/SearchIcon.png"></div>
          <p class="nav-text">Buscar</p>
          <b-dropdown variant="link" toggle-class="text-decoration-none" class="nav-notification" no-caret right>
            <template #button-content style="display: flex; justify-content: center; align-items: center">
              <div><img src="../assets/NotificationBell.png" style="margin-top: -1vh; width: 1.77vw; height: auto"></div>
            </template>
            <p class="not-title">Panel de<br>notificaciones</p>
            <b-card bg-variant="Light" title="• Pago ausente" class="not-card" style="border-radius: 20px; font-size: 1vw">
              <b-card-text class="not-card-text">El ultimo pago de José Torres fue registrado hace 1 mes.</b-card-text>
            </b-card>
          </b-dropdown>
          <b-dropdown variant="link" toggle-class="text-decoration-none" class="nav-profile" right no-caret>
            <template #button-content>
              <div style="display: flex; align-items: center; justify-content: center; margin-top: -1.8vh">
                <div><img src="../assets/ProfilePic.png" style="position:relative; top: -0.1vw; left: -1vw; width: 2.86vw; height: auto"></div>
                <div style="margin-left: -0.3vw">
                  <div><p class="pr-name" style="position:relative;top: 1vw">María Paredes</p></div>
                  <div><p class="pr-business" style="position:relative;top: -0.6vw">Bodega Ríos</p></div>
                </div>
                <div><img src="../assets/ProfileDropdown.png" style="position:relative; left: 0.8vw"></div>
              </div>
            </template>
            <p class="not-title pr-title">Acciones</p>
            <b-button class="pr-action">
              <div class="pr-text"><p>• Perfil</p></div>
            </b-button>
            <b-button class="pr-action">
              <div class="pr-text"><p>• Cerrar sesión</p></div>
            </b-button>
          </b-dropdown>
        </b-navbar-nav>
      </b-navbar>
      <div class="main-body">
        <div class="title"><h1>Dashboard - Resumen</h1></div>
        <div class="res-card">
          <b-card class="sm-card">
            <b-card-header class="sm-card-title">Cuentas activas</b-card-header>
            <b-card-body class="sm-card-body">12</b-card-body>
            <div class="sm-card-icon"><img src="../assets/AccountIcon.png" style="width: 3.9vw; height: auto;"></div>
          </b-card>
          <b-card class="sm-card">
            <b-card-header class="sm-card-title">Interés ganado</b-card-header>
            <b-card-body class="sm-card-body">S/540</b-card-body>
            <div class="sm-card-icon"><img src="../assets/InterestIcon.png" style="width: 3.9vw; height: auto;"></div>
          </b-card>
          <b-card class="sm-card">
            <b-card-header class="sm-card-title">Crédito pendiente</b-card-header>
            <b-card-body class="sm-card-body">S/4,520.36</b-card-body>
            <div class="sm-card-icon"><img src="../assets/CreditIcon.png" style="width: 3.9vw; height: auto;"></div>
          </b-card>
          <b-card class="sm-card">
            <b-card-header class="sm-card-title">Tasa promedio</b-card-header>
            <b-card-body class="sm-card-body">15.1%</b-card-body>
            <div class="sm-card-icon"><img src="../assets/RateIcon.png" style="width: 3.9vw; height: auto;"></div>
          </b-card>
        </div>
      </div>
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
  margin: 0 auto 1.7vh 1.9vw;
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
  top: 0.09vh;
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
  width: 1.04vw;
  height: 1.04vw;
  fill: #282a3f;
}

.sidenav .s-circle-active {
  fill: #584FD8;
}

.sidenav .s-text {
  margin: 0.81vh auto auto 2.5vw;
  font-size: 1.1vw;
  font-weight: 500;
  color: #282a3f;
  white-space: nowrap;
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
  width: 85.26vw;
  height: 100vh;
  background-image: url("../assets/DashboardBG.png");
  background-repeat: no-repeat;
  background-origin: border-box;
  background-position: center;
}

.main .navbar {
  padding: 1vw 2.29vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main .navbar .nav-hamburger {
  width: 1.04vw;
  height: auto;
  margin: auto 0;
}

.main .navbar .nav-search {
  width: 0.89vw;
  height: auto;
  margin: auto 0 auto 2.81vw;
}

.nav-text {
  font-size: 1vw;
  line-height: 1.1vw;
  font-weight: 500;
  letter-spacing: 0.025em;
  color: #8e8e8e;
  margin: auto 0 auto 0.83vw;
  padding-top: 0.18vh;
}

.main .nav-notification {
  width: 5.57vw;
  height: 3.33vw;
  border-radius: 0.89vw;
  background: #fff;
  margin-left: 53.13vw;
}

.not-title {
  font-size: 1.8vw;
  margin: 1.8vh auto 0 1.5vw;
  color: #584FD8;
}

.nav-notification /deep/ .dropdown-menu {
  background-color: #fff;
  border-radius: 0.89vw;
  margin-top: 1.8vh;
}

.not-card {
  font-size: 1vw;
  width: 15vw;
  border-radius: 0.89vw;
  background: #eee;
  border: transparent !important;
  margin: 1.24vh 0.5vw;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.2);
}

.not-card-text {
  color: #444;
  font-weight: 400;
}

.nav-profile {
  margin-left: 1.93vw;
  width: 12.24vw;
  height: 3.33vw;
  border-radius: 0.89vw;
  background: linear-gradient(90deg, #a5ffc9 0%, #4dbfd1 100%);
}

.pr-name {
  font-size: 0.9vw;
  font-weight: 600;
  display: block;
  width: 5.88vw;
  height: 1.98vw;
  color: #202020;
}

.pr-business{
  font-size: 0.8vw;
  font-weight: 400;
  display: block;
  width: 4.53vw;
  height: 0.94vw;
  color: #727272;
}

.nav-profile /deep/ .dropdown-menu {
  background-color: #fff;
  border-radius: 0.89vw;
  margin-top: 1.8vh;
  width: 12.24vw;
}

.pr-title {
  color: #4DBFD1;
  margin-bottom: 2.13vh;
}

.pr-action {
  width: 10vw;
  height: 3.07vw;
  border-radius: 0.42vw;
  background: #fff !important;
  border: transparent !important;
  margin: 0.89vh 0 1.8vh 1vw;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.2);
}

.pr-text {
  font-size: 1.15vw;
  font-weight: 600;
  margin: 0.53vh 0 0 0;
  color: #282a3f;
  white-space: nowrap;
}

.title {
  margin-left: 2.2vw;
  text-align: left;
  font-size: 2.6vw;
  font-weight: 600;
  color: #e5e5e5;
}

.res-card {
  width: 84vw;
  margin-left: 0.7vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.78vh;
}

.sm-card{
  width: 18.23vw;
  height: 10vw;
  color: #282a3f;
  border-radius: 1.5vw !important;
}

.sm-card-title {
  font-size: 1.35vw;
  font-weight: 500;
  letter-spacing: -0.025em;
  color: #4c4c4c;
  text-align: left;
  margin-left: -0.6vw;
}

.sm-card-body {
  font-size: 2vw;
  font-weight: 600;
  color: #000;
  text-align: left;
  margin-top: 1vw;
  margin-left: -0.6vw;
}

.sm-card-icon {
  position: relative;
  width: 3.9vw;
  height: 3.9vw;
  left: 12vw;
  top: -7.5vh;
}

</style>
