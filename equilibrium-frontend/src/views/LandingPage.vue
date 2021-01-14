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
        <b-nav-item class="text" text to="/login">VER CUENTAS</b-nav-item>
        <b-nav-item class="text" text to="/login">REGISTRAR PAGOS</b-nav-item>
        <b-nav-item class="text" text to="/login">REGISTRAR VENTAS</b-nav-item>
        <b-nav-item>
          <b-button class="nav-btn-registrarse text" text to="/sign-up">
            REGISTRARSE
          </b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button size="lg" class="nav-btn-iniciar text" text to="/login">
            INICIAR SESIÓN
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
      <b-button size="lg" class="btn-comenzar-ya" text to="/sign-up">
        <svg class="RightArrow" viewBox="0 0 41.9 25.8"><path d="M21 25.8L0 5.9 6.2 0 21 14 35.7 0 41.9 5.9 21 25.8Z"/></svg>
        <span class="text">Comienza ya!</span>
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
  width: 100vw;
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
  font-size: 1.1vw;
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
    background-size: 11vw auto;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-position: center 3.5vh;
    width: 12vw;
    display: grid;
    place-items: center;
    .active {
      top: 0;
      color: #eee;
      position: relative;
      left: 1vw;
    }
  }
  .nav-btn-registrarse {
    transition: all 0.3s ease;
    width: 11.5vw;
    height: 7vh;
    border-radius: 4px;
    background: linear-gradient(90deg, #4bc8f8 0%, #6e93f9 100%);
    display: grid;
    place-items: center;
    font-size: 1.1vw;
    font-weight: 700;
    color: #fff;
    border: transparent;
  }
  .nav-btn-registrarse:hover {
    border: 0.19vw solid #648dff;
    background: transparent;
  }
  .nav-btn-iniciar {
    transition: all 0.3s ease;
    width: 11.5vw;
    height: 7vh;
    border: 0.1042vw solid #fff;
    border-radius: 4px;
    background: transparent;
    display: grid;
    place-items: center;
    font-size: 1.1vw;
    font-weight: 700;
    color: #fff;
  }
  .nav-btn-iniciar:hover {
    border-radius: 0.21vw;
    border: transparent;
    background: linear-gradient(90deg, #4d56d1 0%, #da71ff 100%);
  }
}

#nav-text>* {
  margin-left: 2vw;
  display: grid;
  place-items: center;
}

.cta {
  position: absolute;
  left: 13.5vw;
  top: 15vh;
  .title {
    position: relative;
    left: -2.2vw;
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
    transition: all 0.3s ease;
    position: relative;
    left: 45vw;
    top: -10.5vh;
    width: 30vw;
    height: 11.8vh;
    border-radius: 3.8vw;
    background: linear-gradient(-90deg, #634dfc 0%, #da71ff 100%);
    border: transparent;
    display: grid;
    place-items: center;
    box-shadow: inset 0 0 0 0 #F96EA6, 20px 20px 30px rgba(0, 0, 0, 0.4);
    .text {
      position: relative;
      left: 1.5vw;
      font-size: 3vw;
      color: #fff;
      font-weight: 600;
    }
    .RightArrow {
      position: absolute;
      left: 3.5vw;
      width: 2vw;
      height: auto;
      transform: rotate(-90deg);
      transform-origin: center;
      fill: rgba(240, 240, 240, 1);
    }
  }
  .btn-comenzar-ya:hover {
    box-shadow: inset 0 0 0 0.26vw #F96EA6, 20px 20px 30px rgba(0, 0, 0, 0.4);
    border-radius: 3.8vw;
    background: linear-gradient(-90deg, #202020 0%, #202020 100%);
  }
}
</style>
