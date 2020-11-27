<template>
  <div class="Profile">
    <div class="sidenav">
      <img src="../assets/EquilibriumLogo.png" class="logo" alt="LogoEquilibrium">
      <b-button class="category category-active" href="/dashboard">
        <img src="../assets/CategoryIndicator.png" style="height: 6.5vh; position: absolute; left: 0">        <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text s-text-active">Dashboard</p>
      </b-button>
      <b-button class="category" href="/add-client-1">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Añadir cliente</p>
      </b-button>
      <b-button class="category" href="/view-accounts">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Ver cuentas</p>
      </b-button>
      <b-button class="category" href="/register-payment">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Registrar pago</p>
      </b-button>
      <b-button class="category" href="register-sale">
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
              <div style="display: flex; align-items: center; justify-content: center; margin-top: -2vh">
                <div><img src="../assets/ProfilePic.png" style="position:relative; top: -0.2vw; left: -1vw; width: 2.86vw; height: auto"></div>
                <div style="margin-left: -0.3vw">
                  <div><p class="pr-name" style="position:relative;top: 1vw">María Paredes</p></div>
                  <div><p class="pr-business" style="position:relative;top: -0.6vw">Bodega Ríos</p></div>
                </div>
                <div><img src="../assets/ProfileDropdown.png" style="position:relative; left: 0.8vw; top: -0.5vh"></div>
              </div>
            </template>
            <p class="not-title pr-title">Acciones</p>
            <b-button class="pr-action">
              <div class="pr-text"><p>• Perfil</p></div>
            </b-button>
            <b-button class="pr-action" to="/">
              <div class="pr-text"><p>• Cerrar sesión</p></div>
            </b-button>
          </b-dropdown>
        </b-navbar-nav>
      </b-navbar>
      <div class="main-body">
        <div class="title"><h1>Dedicatoria y Autoría</h1></div>
        <div class="medium-card">
          <b-card class="top">
            <div class="graph-icon"><img src="../assets/EquilibriumLogo.png" style="width: 20vw;margin-top: -0.2vh"></div>
            <b-card-body class="title">Formulado por: Martín Senmache,</b-card-body>
            <b-card-body class="title-2">para los bodegueros en la era digital.</b-card-body>
          </b-card>
          <b-card class="bottom">
            <img src="../assets/sadaakisz.png" class="image">
            <img src="../assets/cjmazzarri.jpg" class="image">
            <p class="text"><u>Diseño y prototipado por:</u><br>Carlos Mazzarri y Hector Suzuki</p>
            <p class="text"><u>Back y Front desarrollado por:</u><br>Carlos Mazzarri y Hector Suzuki</p>
            <p class="text"><u>Marco legal:</u> Jesarela Hijar</p>
            <p class="text"><u>Diseño de base de datos:</u> Renzo Castro</p>
            <p class="text"><u>Documentación:</u> Estephany Solier</p>
            <p class="text"><u>Apoyo moral:</u> Juan Leyva</p>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Profile"
}
</script>

<style lang="scss">
body{
  overflow-x: hidden;
}
/* Style page content */
.main {
  margin-left: 14.7vw;
  margin-top: -2px;
  width: 85.26vw;
  height: 145vh;
  background-image: url("../assets/DashboardBG.png");
  background-repeat: no-repeat;
  background-origin: content-box;
}

div.card-header {
  background-color: transparent;
}

.medium-card {
  width: 81.1vw;
  height: 47.31vh;
  margin: 2vw auto;
  .top {
    height: 10.21vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: linear-gradient(90deg, #f8a74b 0%, #f96ea6 100%);
    border-radius: 1.5vw 1.5vw 0 0;
    border: transparent;
    .graph-icon {
      display: inline-block;
      position: absolute;
      top: 7vh;
      left: 4vw;
    }
    .title{
      font-size: 2vw;
      line-height: 1;
      font-weight: 600;
      color: #000;
      display: inline-block;
      margin-top: 0vh;
      margin-left: 25vw;
    }
    .title-2{
      font-size: 2vw;
      line-height: 1;
      font-weight: 600;
      color: #000;
      margin-top: -2vh;
      position: absolute;
      left: 45vw;
      margin-left: -2vw;
    }
    .caret{
      display: inline-block;
      position: relative;
      left: -1vw;
      top: -0.5vh;
    }
    .currency-selector {
      display: inline-block;
      width: 9vw;
      font-size: 1.82vw;
      font-weight: 600;
      color: #000;
      background: transparent;
      border: transparent;
      margin: -1.3vh 0 0 -1.1vw;
    }
    .month-selector{
      display: inline-block;
      width: 10vw;
      font-size: 1.82vw;
      font-weight: 600;
      color: #000;
      background: transparent;
      border: transparent;
      margin: -1.5vh 0 0 33.5vw;
    }
    .right-caret{
      display: inline-block;
      position: relative;
      left: -1vw;
      top: -0.5vh;
    }
  }
  .bottom{
    border-radius: 0 0 1.5vw 1.5vw;
    border: transparent;
    padding: 1vw 0;
    .text{
      color: black;
      font-weight: 400;
      font-size: 2vw;
      line-height: 2;
    }
    .image{
      margin: -1vh 2vw 2vh;
      width: 8vw;
      display: inline-block;
    }
  }
}
</style>
