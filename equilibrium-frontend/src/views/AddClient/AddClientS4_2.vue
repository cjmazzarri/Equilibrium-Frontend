<template>
  <div class="AddClientS4_2">
    <div class="sidenav">
      <img src="../../assets/EquilibriumLogo.png" class="logo" alt="LogoEquilibrium">
      <b-button class="category" href="/dashboard">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Dashboard</p>
      </b-button>
      <b-button class="category category-active" href="/add-client-1">
        <img src="../../assets/CategoryIndicator.png" style="height: 6.5vh; position: absolute; left: 0">        <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text s-text-active">Añadir cliente</p>
      </b-button>
      <b-button class="category" href="/view-accounts">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Ver cuentas</p>
      </b-button>
      <b-button class="category" href="/register-payment">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Registrar pago</p>
      </b-button>
      <b-button class="category" href="/register-sale">
        <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
        <p class="s-text">Registrar venta</p>
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
            <b-button class="pr-action" href="/login">
              <div class="pr-text"><p>• Cerrar sesión</p></div>
            </b-button>
          </b-dropdown>
        </b-navbar-nav>
      </b-navbar>
      <div class="main-body">
        <div class="title"><h1>Añadir cliente</h1></div>
        <div class="medium-card">
          <b-card class="top">
            <div class="graph-icon"><img src="../../assets/AddClient/AddClientIcon.png"></div>
            <b-card-body class="title">Paso 4.2 de 5</b-card-body>
            <div class="navigation">
              <router-link to="/add-client-4-1">
                <div><img src="../../assets/AddClient/LeftArrow.png"></div>
              </router-link>
              <div><a href="/add-client-4-1"><p class="text">Anterior</p></a></div>
              <div><a href="/add-client-5"><p class="text">Siguiente</p></a></div>
              <router-link to="/add-client-5">
                <div><img src="../../assets/AddClient/RightArrow.png"></div>
              </router-link>
            </div>
          </b-card>
          <b-card class="bottom">
            <div><h2 class="title">¿Cuánto cobraré de<br>mantenimiento?</h2></div>
            <div><b-input-group style="width: 43vw">
              <b-form-input placeholder="Monto, Ej. S/5.00" class="input" v-model="maintenanceAmount" onkeyup="if(this.value<0){this.value= this.value * -1}" v-on:keypress="isNumber($event)"></b-form-input>
              <b-input-group-append class="prefix">
                <b-input-group-text class="bg-transparent font-weight-bold border-0 text">
                  S/
                </b-input-group-text>
              </b-input-group-append>
            </b-input-group></div>
            <div class="illustration"><img src="../../assets/AddClient/Step4.png"></div>
            <div @click="onClick"><b-button class="next" to="/add-client-5" v-bind:disabled="maintenanceAmount.length <= 0">
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
import {baseUrl} from "@/shared/baseUrl";
export default {
  name: "AddClientS4_2",
  data(){
    return{
      maintenanceAmount: ''
    }
  },
  methods:{
    onClick(){
      this.axios.post(baseUrl+'commerces/1/clients/'+this.$store.getters.clientId+'/maintenanceFees', {
        period: this.$store.getters.maintenancePeriod,
        value: this.maintenanceAmount
      }).then(responseMaintenanceFee => {
        console.log(this.$store.getters.clientId)
        console.log(responseMaintenanceFee.data)
      })
    },
    isNumber(e){
      let char = String.fromCharCode(e.keyCode); // Get the character
      if(/^(?:[1-9]\d*|0)?(?:\.\d+)?$/.test(char)) return true; // Match with regex
      else e.preventDefault(); // If not match, don't add to input text
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
  margin-left: 14.8vw;
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
  height: 67.41vh;
  margin: 2vw auto;
  .top {
    height: 5.21vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: linear-gradient(90deg, #a5ffc9 0%, #4dbfd1 100%);
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
    height: 62.2vh;
    width: 81.1vw;
    border-radius: 0 0 1.5vw 1.5vw;
    border: transparent;
    padding: 1vw 0;
    .title{
      font-size: 4.17vw;
      font-weight: 600;
      color: #000;
      margin-left: 4vw;
      margin-top: 5vh;
      margin-bottom: 5vh;
    }
    .prefix{
      margin-top: -11vh;
      margin-left: 4vw;
      .text{
        font-size: 3.13vw;
        font-weight: 600;
        width: 40vw;
      }
    }
    .input{
      margin-left: 10vw;
      margin-top: 0.5vw;
      font-size: 3.13vw;
      font-weight: 600;
      width: 44vw;
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
      bottom: 0;
      right: 3.54vw;
      img{
        width: 26.6vw;
      }
    }
    .next{
      position: absolute;
      right: 6vw;
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
</style>
