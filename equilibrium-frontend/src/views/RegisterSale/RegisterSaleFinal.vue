<template>
  <div class="RegisterSaleFinal">
    <div class="sidenav">
      <img src="../../assets/EquilibriumLogo.png" class="logo" alt="LogoEquilibrium">
      <b-button class="category" href="/dashboard">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Dashboard</p>
      </b-button>
      <b-button class="category" href="add-client-1">
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
      <b-button class="category category-active" href="/register-sale">
        <img src="../../assets/CategoryIndicator.png" style="height: 6.5vh; position: absolute; left: 0">        <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
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
        <div class="title"><h1>Registrar una <u>venta</u></h1></div>
        <div class="medium-card half">
          <b-card class="top">
            <div class="graph-icon"><img src="../../assets/RegisterPayment/RegisterPaymentIcon.png"></div>
            <b-card-body class="title">{{clientInfo.firstName+' '+clientInfo.lastName}}</b-card-body>
            <b-card-body class="amount">{{"S/ "+clientInfo.creditAmount}}</b-card-body>
          </b-card>
          <b-card class="bottom">
            <div class="text">
              {{"Creado en: "+clientInfo.createdAt}}</div>
          </b-card>
        </div>
        <div class="medium-card">
          <b-card class="top">
            <div class="graph-icon"><img src="../../assets/AddClient/AddClientIcon.png"></div>
            <b-card-body class="title">Finalización</b-card-body>
          </b-card>
          <b-card class="bottom">
            <div><h2 class="title">¡Listo, la venta ha<br>
              sido registrada!</h2></div>
            <div class="illustration"><img src="../../assets/RegisterPayment/Step3.png"></div>
            <div><b-button class="next" href="/dashboard">
              <div class="indicator"><img src="../../assets/AddClient/Accept.png"></div>
              <p class="text">Volver al dashboard</p>
            </b-button></div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {baseUrl} from "@/shared/baseUrl";
export default {
  name: "RegisterSaleFinal",
  data(){
    return{
      clientInfo: null,
      saleInfo: null,
      saleAmount: '',
    }
  },
  mounted(){
    this.axios
        .get(baseUrl + 'commerces/1/clients/'+this.$route.params.id)
        .then(responseClient => {
          this.clientInfo = responseClient.data;
          this.simpleDate()
        });
  },
  methods: {
    isNumber(e){
      let char = String.fromCharCode(e.keyCode); // Get the character
      if(/^(?:[1-9]\d*|0)?(?:\.\d+)?$/.test(char)) return true; // Match with regex
      else e.preventDefault(); // If not match, don't add to input text
    },
    simpleDate() {
      let date = this.clientInfo.createdAt;
      let splitDate = date.split("-")
      let formatDate = splitDate[2][0] + splitDate[2][1] + '/' + splitDate[1] + '/' + splitDate[0][2] + splitDate[0][3];
      this.clientInfo.createdAt = formatDate;
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/styles.scss";
body{
  overflow-x: hidden;
  overflow-y: hidden;
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
      margin-top: -2vh;
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
      margin-top: 6vh;
      margin-bottom: 3vh;
    }
    .details{
      font-size: 2.08vw;
      text-align: left;
      margin-left: 4vw;
      margin-top: 4vh;
      font-weight: 600;
      color: #282a3f;
    }
    .illustration{
      position: absolute;
      bottom: 5vh;
      right: 16.93vw;
      img{
        width: 20.2vw;
      }
    }
    .next{
      position: absolute;
      right: 6vw;
      bottom: 4vh;
      box-shadow: 13px 10px 30px rgba(0, 0, 0, 0.2);
      width: 27vw;
      height: 7.96vh;
      border-radius: 43px;
      background: linear-gradient(90deg, #6aef9f 0%, #4bf879 100%);
      border: transparent;
      .indicator{
        display: inline-block;
        margin-right: 1.3vw;
        margin-left: -0.8vw;
        position: relative;
        top: -0.7vh;
      }
      .text{
        display: inline-block;
        font-size: 1.9vw;
        font-weight: 600;
        text-decoration: underline;
        color: #e6e6e6;
        position: relative;
        top: 0;
      }
    }
  }
}
.half {
  width: 39.48vw;
  height: 18.61vh;
  margin-top: 2.5vh;
  margin-left: 2.4vw;
  .graph-icon {
    display: inline-block;
    position: relative;
    top: 0;
    left: 1vw;
  }
  .title{
    font-size: 1.82vw;
    font-weight: 600;
    color: #000;
    display: inline-block;
    margin-top: -2.5vh;
    margin-left: 2vw;
    position: relative;
    top: 0.5vh;
  }
  .amount{
    font-size: 1.82vw;
    font-weight: 600;
    color: #000;
    text-align: right;
    display: inline-block;
    position: absolute;
    right: 3vw;
    top: 1vh;
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
