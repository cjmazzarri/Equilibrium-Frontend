<template>
    <div class="AddClientS6">
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
                        <b-card-body class="title">Resumen y confirmación</b-card-body>
                    </b-card>
                    <b-card class="bottom">
                        <div><h2 class="title">¿Todo conforme?</h2></div>
                        <div class="info">
                            Cliente: {{clientName}}<br>
                            Moneda: {{currency}}<br>
                            Tipo de tasa: {{rateType}}<br>
                            Tasa de interés: {{rateValue}}<br>
                            Mantenimiento: {{maintenanceFee}}<br>
                            Delivery: {{deliveryFee}}</div>
                        <div class="illustration" style="z-index: 0"><img src="../../assets/AddClient/Step6.png"></div>
                        <div class="btn-container">
                            <div style="display: inline-block"><b-button class="choice" to="add-client-7">
                                <div class="icon" style="display: inline-block"><img src="../../assets/AddClient/Accept.png"></div>
                                <div class="text" style="display: inline-block"><p>Crear cuenta</p></div>
                            </b-button></div>
                            <div style="display: inline-block"><b-button class="choice second" href="add-client-6-1">
                                <div class="icon" style="display: inline-block"><img src="../../assets/AddClient/Decline.png" style="width: 1.8vw"></div>
                                <div class="text" style="display: inline-block"><p>Corregir</p></div>
                            </b-button></div>
                        </div>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '../../shared/baseUrl';
    export default {
      name: "AddClientS6",
      data(){
        return {
          clientName: '',
          currency: '',
          rateType: '',
          rateValue: '',
          maintenanceFee: '',
          deliveryFee: ''
        }
      },
      mounted() {
        this.axios
          .get(baseUrl+'commerces/1/clients/'+this.$store.getters.clientId)
          .then(responseClient => {
            console.log(responseClient.data)
            this.clientName=responseClient.data.firstName+' '+responseClient.data.lastName;
            let currency = '';
            switch (responseClient.data.currency) {
              case "s": currency='Soles'; break;
              case "d": currency='Dólares'; break;
            }
            this.currency=currency;
          });
        this.axios
            .get(baseUrl+'commerces/1/clients/'+this.$store.getters.clientId+'/rates')
            .then(responseRate => {
              let rate=responseRate.data;
              this.rateType=rate.type[0].toUpperCase()+rate.type.slice(1);
              let period = '';
              switch (rate.period){
                case 30: period='mensual'; break;
                case 60: period='bimestral'; break;
                case 90: period='trimestral'; break;
                case 120: period='cuatrimestral'; break;
                case 180: period='semestral'; break;
                case 360: period='anual'; break;
              }
              this.rateValue=rate.value+'% '+period;
            });
        this.axios
            .get(baseUrl+'commerces/1/clients/'+this.$store.getters.clientId+'/maintenanceFees')
            .then(r => {
              let mFee=r.data;
              let periodM = '';
              switch (mFee.period){
                case "s": periodM='Semanal'; break;
                case "q": periodM='Quincenal'; break;
                case "m": periodM='Mensual'; break;
              }
              this.maintenanceFee='S/'+mFee.value+' '+periodM;
            })
        this.axios
            .get(baseUrl+'commerces/1/clients/'+this.$store.getters.clientId+'/deliveryFees')
            .then(r => {
              let dFee=r.data;
              let periodD='';
              switch (dFee.type){
                case "Pedido":
                  periodD='por Pedido'; break;
                case "Periodo":
                  switch (dFee.frequency){
                    case 7: periodD='por semana'; break;
                    case 15: periodD='por quincena'; break;
                    case 30: periodD='por mes'; break;
                  }
              }
              this.deliveryFee='S/'+dFee.value+' '+periodD;
            })
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
                line-height: 0;
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
                margin-top: -2vh;
                margin-bottom: 5vh;

            }
            .btn-container{
                position: absolute;
                z-index: 2;
                display: flex;
                margin-top: 30.50vh;
                margin-left: 32vw;
                .choice {
                    width: 19.69vw;
                    height: 9vh;
                    border-radius: 2.24vw;
                    background: linear-gradient(90deg, #6aef9f 0%, #4bf879 100%);
                    border: transparent;
                    font-size: 2.08vw;
                    font-weight: 600;
                    color: #fff;
                    box-shadow: 13px 10px 30px rgba(0, 0, 0, 0.2);
                    margin-left: 3.28vw;
                    .icon {
                        margin-left: -0.5vw;
                    }
                    .text {
                        position: relative;
                        top: 0.4vh;
                        margin-left: 1vw;
                    }
                }
                .second {
                    width: 19.77vw;
                    .icon {
                        margin-left: 0;
                    }
                    .text {
                        margin-left: 1.3vw;
                    }
                    background: linear-gradient(90deg, #fc9f4d 0%, #ff718e 100%);
                }
            }
            .illustration{
                position: absolute;
                bottom: 6vh;
                left: 45vw;
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
                    font-family: Gilroy ☞;
                    font-size: 40px;
                    line-height: (60 / 40);
                    font-weight: 600;
                    color: #282a3f;
                }
            }
            .info{
                font-family: Gilroy ☞;
                font-size: 2.085vw;
                line-height: (60 / 40);
                font-weight: 600;
                color: #282a3f;
                text-align: left;
                position: absolute;
                left: 5vw;
                bottom: 6vh;
            }
        }
    }
</style>
