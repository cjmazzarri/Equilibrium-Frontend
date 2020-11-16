<template>
  <div class="LandingPage">
    <b-navbar class="navbar navbar-dark bg-transparent">
      <b-navbar-nav id="nav-text">
        <b-navbar-brand href="#">
          <img src="../assets/EquilibriumMini.png" class="d-inline-block align-top nav-logo" style="width: 41px; height: auto" alt="Equilibrium">
        </b-navbar-brand>
        <b-nav-item class="text-primary">
          <span class="text active">AÑADE CLIENTES</span>
        </b-nav-item>
        <b-nav-item>VER CUENTAS</b-nav-item>
        <b-nav-item>REGISTRAR PAGOS</b-nav-item>
        <b-nav-item>REGISTRAR VENTAS</b-nav-item>
        <b-nav-item>
          <b-button size="lg" class="nav-btn-registrarse">
            <p class="text">REGISTRARSE</p>
          </b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button size="lg" class="nav-btn-iniciar">
            <p class="text">INICIAR SESIÓN</p>
          </b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div class="cta">
      <p class="title">Maneja <u>créditos</u>
        <br><u>otorgados</u> por tu
        <br><u>pequeño negocio</u>
        <br>facilito con
      </p>
      <img src="../assets/EquilibriumLogo.png" class="logo" alt="LogoEquilibrium">
      <b-button size="lg" class="btn-comenzar-ya">
        <svg class="RightArrow" viewBox="0 0 41.9 25.8"><path d="M21 25.8L0 5.9 6.2 0 21 14 35.7 0 41.9 5.9 21 25.8Z"/></svg>
        <p class="text">Comienza ya!</p>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
}
</script>

<style lang="scss">
body {
  height: 100%;
  display: grid;
  background-image: url("../assets/LandingPageBg.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.text {
  position: relative;
  top: 50%;
  font-family: Gilroy ☞, Avenir, Helvetica, Arial, sans-serif;
  font-size: 0.9em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 700;
  color: #fff;
  margin: auto;
}

u {
  text-decoration: none;
  border-bottom: 4px solid white;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30px;
  margin: 0 auto;
  height: 3.6vw;
  width: 100vw;
}

#nav-text > * {
  margin-left: 2vw;
  display: grid;
  place-items: center;
}

.text-primary {
  background-image: url("../assets/ActiveTab.png");
  background-size: 12vw auto;
  background-repeat: no-repeat;
  background-origin: border-box;
  background-position: center 1.4em;
  width: 12em;
.active {
  color: #eee;
  font-size: 1em;
  position: relative;
  left: 1em;
}
}

.nav-btn-registrarse {
  transition: 0.3s;
  width: 11.5vw;
  height: 3.5vw;
  border-radius: 4px;
  background: linear-gradient(90deg, #4bc8f8 0%, #6e93f9 100%);
}

.nav-btn-registrarse:hover {
  border: 3px solid #648dff;
  background: transparent;
}

.nav-btn-iniciar {
  transition: 0.3s;
  width: 11.5vw;
  height: 3.5vw;
  border: 2px solid #fff;
  border-radius: 4px;
  background: transparent;
}

.nav-btn-iniciar:hover {
  border-radius: 4px;
  border: none;
  background: linear-gradient(90deg, #4d56d1 0%, #da71ff 100%);
}

.cta {
  position: absolute;
  left: 13.5vw;
  top: 9.5vw;

.title {
  text-align: left;
  font-size: 3.65vw;
  line-height: (105 / 70);
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #fff;
}

.logo {
  position: relative;
  top: 1.5vw;
  width: 39vw;
  height: auto;
}

.btn-comenzar-ya {
  transition: 0s;
  position: relative;
  left: 6.5vw;
  top: 1vw;
  width: 30vw;
  height: 6vw;
  border-radius: 3.8vw;
  border-width: 0px;
  background: linear-gradient(-90deg, #634dfc 0%, #da71ff 100%);

.RightArrow {
  position: relative;
  top: -0.73vw;
  left: -1.1vw;
  width: 2.2vw;
  height: 1.35vw;
  transform: rotate(-90deg);
  transform-origin: center;
  fill: rgba(240,240,240,1);
}

.text {
  position: relative;
  top: -0.1vw;
  left: 0.4vw;
  display: inline-block;
  font-size: 3vw;
}
}

.btn-comenzar-ya:hover {
  border: 5px solid #f96ea6;
  border-radius: 73px;
  background: #202020;
}
}
</style>
