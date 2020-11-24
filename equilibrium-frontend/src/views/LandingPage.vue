<template>
  <div class="LandingPage">
    <b-navbar class="navbar navbar-dark bg-transparent">
      <b-navbar-nav id="nav-text">
        <b-navbar-brand href="#">
          <img src="../assets/EquilibriumMini.png" class="d-inline-block align-top nav-logo" style="width: 41px; height: auto" alt="Equilibrium">
        </b-navbar-brand>
        <b-nav-item class="text-primary" text to="/login">
          <span class="text active">AÑADE CLIENTES</span>
        </b-nav-item>
        <b-nav-item  text to="/login">VER CUENTAS</b-nav-item>
        <b-nav-item text to="/login">REGISTRAR PAGOS</b-nav-item>
        <b-nav-item text to="/login">REGISTRAR VENTAS</b-nav-item>
        <b-nav-item>
          <b-button class="nav-btn-registrarse" text to="/sign-up">
            <p class="text">REGISTRARSE</p>
          </b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button size="lg" class="nav-btn-iniciar" text to="/login">
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
      <b-button size="lg" class="btn-comenzar-ya" texto to="/sign-up">
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
.LandingPage {
  top: 0;
  left: 0;
  height: 100vh;
  background-image: url("../assets/LandingPageBg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.text {
  font-family: Gilroy ☞, Avenir, Helvetica, Arial, sans-serif;
  line-height: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 700;
  color: #fff;
}

u {
  text-decoration: none;
  border-bottom: 0.21vw solid white;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 4vh;
  margin: 0 auto;
  height: 6.4vh;
  width: 100vw;
  .text-primary {
    background-image: url("../assets/ActiveTab.png");
    background-size: 12vw auto;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-position: center 3.5vh;
    width: 12vw;
    .active {
      top: 0;
      color: #eee;
      font-size: 1.24vw;
      position: relative;
      left: 1vw;
    }
  }
  .nav-btn-registrarse {
    width: 11.5vw;
    height: 7vh;
    border-radius: 4px;
    background: linear-gradient(90deg, #4bc8f8 0%, #6e93f9 100%);
    .text{
      top: 0;
      display: inline-block;
      margin-top: 2.6vh;
      font-size: 1.15vw;
      font-weight: 700;
      color: #fff;
    }
  }
  .nav-btn-registrarse:hover {
    border: 0.19vw solid #648dff;
    background: transparent;
    .text{
      margin-top: 2.3vh;
    }
  }
  .nav-btn-iniciar {
    width: 11.5vw;
    height: 7vh;
    border: 0.1042vw solid #fff;
    border-radius: 4px;
    background: transparent;
    .text{
      top: 0;
      margin-top: 2.2vh;
      display: inline-block;
      font-size: 1.15vw;
      font-weight: 700;
      color: #fff;
    }
  }
  .nav-btn-iniciar:hover {
    border-radius: 0.21vw;
    border: transparent;
    background: linear-gradient(90deg, #4d56d1 0%, #da71ff 100%);
    .text{
      margin-top: 2.4vh;
    }
  }
}

#nav-text > * {
  margin-left: 2vw;
  display: grid;
  place-items: center;
}

.cta {
  position: absolute;
  left: 13.5vw;
  top: 20vh;
  .title {
    text-align: left;
    font-size: 3.65vw;
    line-height: (105 / 70);
    font-weight: 600;
    letter-spacing: 0.01vw;
    color: #fff;
  }
  .logo {
    position: relative;
    top: 3vh;
    width: 39vw;
    height: auto;
  }
  .btn-comenzar-ya {
    transition: 0s;
    position: relative;
    left: 6.5vw;
    top: 2vh;
    width: 30vw;
    height: 11.8vh;
    border-radius: 3.8vw;
    background: linear-gradient(-90deg, #634dfc 0%, #da71ff 100%);
    border: transparent;
    .RightArrow {
      display: inline-block;
      position: relative;
      top: 2.4vh;
      left: -1.1vw;
      width: 2.2vw;
      height: auto;
      transform: rotate(-90deg);
      transform-origin: center;
      fill: rgba(240,240,240,1);
    }
    .text {
      position: relative;
      top: 3.9vh;
      left: 0.4vw;
      display: inline-block;
      font-size: 3vw;
      color: #fff;
    }
  }
  .btn-comenzar-ya:hover {
    border: 0.26vw solid #f96ea6;
    border-radius: 3.8vw;
    background: #202020;
    .RightArrow{
      top: 1.9vh;
    }
    .text{
      top: 3.4vh;
    }
  }
}
</style>
