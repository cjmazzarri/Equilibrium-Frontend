<template>
  <div class="RegisterSaleS1">
    <div class="sidenav">
      <img src="../../assets/EquilibriumLogo.png" class="logo" alt="LogoEquilibrium">
      <b-button class="category" href="#">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Dashboard</p>
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
      <b-button class="category category-active" href="#">
        <img src="../../assets/CategoryIndicator.png" style="height: 6.4vh; position: absolute; left: 0">
        <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text s-text-active">Registrar venta</p>
      </b-button>
    </div>
    <div class="main">
      <b-navbar class="navbar navbar-dark bg-transparent">
        <b-navbar-nav id="nav-text">
          <div class="nav-hamburger"><img src="../../assets/HamburgerMenu.png"></div>
          <div class="nav-search"><img src="../../assets/SearchIcon.png"></div>
          <p class="nav-text">Buscar</p>
          <b-dropdown variant="link" toggle-class="text-decoration-none" class="nav-notification" no-caret right>
            <template #button-content style="display: flex; justify-content: center; align-items: center">
              <div><img src="../../assets/NotificationBell.png" style="margin-top: -1vh; width: 1.77vw; height: auto"></div>
            </template>
            <p class="not-title">Panel de<br>notificaciones</p>
            <b-card bg-variant="Light" title="• Pago ausente" class="not-card" style="border-radius: 20px; font-size: 1vw">
              <b-card-text class="not-card-text">El ultimo pago de José Torres fue registrado hace 1 mes.</b-card-text>
            </b-card>
          </b-dropdown>
          <b-dropdown variant="link" toggle-class="text-decoration-none" class="nav-profile" right no-caret>
            <template #button-content>
              <div style="display: flex; align-items: center; justify-content: center; margin-top: -2vh">
                <div><img src="../../assets/ProfilePic.png" style="position:relative; top: -0.2vw; left: -1vw; width: 2.86vw; height: auto"></div>
                <div style="margin-left: -0.3vw">
                  <div><p class="pr-name" style="position:relative;top: 1vw">María Paredes</p></div>
                  <div><p class="pr-business" style="position:relative;top: -0.6vw">Bodega Ríos</p></div>
                </div>
                <div><img src="../../assets/ProfileDropdown.png" style="position:relative; left: 0.8vw; top: -0.5vh"></div>
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
        <div class="back-arrow"><img src="../../assets/RegisterPayment/BackArrow.png" style="width: 1.51vw;"></div>
        <div class="title"><h1>Registrar una <u>venta</u></h1></div>
        <div class="medium-card half">
          <b-card class="top">
            <div class="graph-icon"><img src="../../assets/RegisterPayment/RegisterPaymentIcon.png"></div>
            <b-card-body class="title">Marina Zárate</b-card-body>
            <b-card-body class="title amount">S/920.09</b-card-body>
          </b-card>
          <b-card class="bottom">
            <div class="text"><p>Último pago: S/20 - 28/12 - Cancelación Nov.</p></div>
          </b-card>
        </div>
        <div class="medium-card">
          <b-card class="top">
            <div class="graph-icon"><img src="../../assets/AddClient/AddClientIcon.png"></div>
            <b-card-body class="title">Paso 1 de 2</b-card-body>
            <div class="navigation">
              <div><img src="../../assets/AddClient/LeftArrow.png"></div>
              <div><p class="text">Anterior</p></div>
              <div><p class="text">Siguiente</p></div>
              <div><img src="../../assets/AddClient/RightArrow.png"></div>
            </div>
          </b-card>
          <b-card class="bottom">
            <div><h2 class="title">¿Cuál es el título<br>
              de la venta?</h2></div>
            <div><b-form-input placeholder="Título, Ej. Compras Nov." class="input"></b-form-input></div>
            <div class="illustration"><img src="../../assets/RegisterSale/Step1.png"></div>
            <div><b-button class="next">
              <div class="indicator"><img src="../../assets/AddClient/NextArrow.png"></div>
              <p class="text">Siguiente</p>
            </b-button></div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterSaleS1"
}
</script>

<style lang="scss">
/*scrollbar*/
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #222222;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #4FC0D1;
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #7ADFCD;
}
body{
  overflow-x: hidden;
  overflow-y: hidden;
}
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
  left: 0;
  font-weight: 600;
  color: #584fd8;
}

/* Style page content */
.main {
  margin-left: 14.7vw;
  margin-top: -2px;
  width: 85.3vw;
  height: 102vh;
  background-image: url("../../assets/DashboardBG.png");
  background-repeat: no-repeat;
  background-origin: content-box;
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
  position: relative;
  top: 1vh;
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
  border: transparent !important;
  box-shadow: -6px -4px 30px rgba(0, 0, 0, 0.2);
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
  position: absolute;
  top: 1vh;
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
  margin-top: -0.3vh;
}

.nav-profile /deep/ .dropdown-menu {
  background-color: #fff;
  border-radius: 0.89vw;
  border: transparent;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.2);
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

.back-arrow{
  position: absolute;
  left: 17vw;
  margin-top: 0.9vh;
}

.title {
  margin-left: 5.5vw;
  text-align: left;
  font-size: 2.6vw;
  font-weight: 600;
  color: #e5e5e5;
}

div.card-header {
  background-color: transparent;
}

.medium-card {
  width: 81.1vw;
  height: 52vh;
  margin: 2.5vw auto;
  .top {
    height: 5.21vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: linear-gradient(90deg, #e1a5ff 0%, #d14fbb 100%);
    border-radius: 1.5vw 1.5vw 0 0;
    border: transparent;
    .graph-icon {
      display: inline-block;
      position: relative;
      top: -0.5vh;
      left: 0.5vw;
    }
    .title{
      font-size: 1.82vw;
      line-height: 1;
      font-weight: 600;
      color: #000;
      display: inline-block;
      margin-top: -1.5vh;
      margin-left: 1vw;
    }
    .navigation {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17.55vw;
      position: absolute;
      right: 4vw;
      top: 2.5vh;

      .text{
        font-size: 1.4vw;
        font-weight: 600;
        color: #16002f;
        margin: auto 1vw auto 1vw;
      }
    }
  }
  .bottom{
    height: 45vh;
    border-radius: 0 0 1.5vw 1.5vw;
    border: transparent;
    padding: 1vw 0;
    .title{
      font-size: 4.17vw;
      font-weight: 600;
      color: #000;
      margin-left: 4vw;
      margin-top: 0;
      margin-bottom: 3vh;
    }
    .input{
      margin-left: 4vw;
      margin-top: 1.5vw;
      font-size: 3.13vw;
      font-weight: 600;
      width: 45vw;
      border-top: transparent;
      border-left: transparent;
      border-right: transparent;
      border-radius: 0;
      border-width: 0.26vw;
    }
    .input:focus{
      border-color: #4D56D1;
      outline: none 0 !important;
      box-shadow: none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
    }
    .illustration{
      position: absolute;
      bottom: 1.5vh;
      right: 9.5vw;
      img{
        width: 21.51vw;
      }
    }
    .next{
      position: absolute;
      right: 6vw;
      bottom: 6.2vh;
      width: 15.57vw;
      height: 9.44vh;
      border-radius: 51px;
      background: #202020;
      box-shadow: 13px 10px 30px rgba(0, 0, 0, 0.2);
      .indicator{
        display: inline-block;
        margin-right: 1vw;
      }
      .text{
        display: inline-block;
        font-size: 1.9vw;
        font-weight: 600;
        text-decoration: underline;
        color: #e6e6e6;
        margin-top: 0.5vh;
        position: relative;
        top: 0.5vh;
      }
    }
  }
}
.half {
  width: 39.48vw;
  height: 18.61vh;
  margin-top: 2.5vh;
  margin-left: 2.4vw;
  .top{
    .amount{
      margin-left: 8vw;
    }
  }
  .bottom {
    height: 9.26vh;
    .text{
      margin-left: -2vw;
      font-size: 1.56vw;
      line-height: 0;
      font-weight: 400;
      color: #000;
    }
  }
}
</style>
