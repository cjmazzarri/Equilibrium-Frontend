<template>
    <div class="VerCuentas">
        <div class="sidenav">
            <img src="../assets/EquilibriumLogo.png" class="logo" alt="LogoEquilibrium">
            <b-button class="category" href="/dashboard">
            <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                <p class="s-text">Dashboard</p>
            </b-button>
            <b-button class="category" href="/add-client-1">
                <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                <p class="s-text">Añadir cliente</p>
            </b-button>
            <b-button class="category category-active" href="view-accounts">
                <img src="../assets/CategoryIndicator.png" style="height: 6.5vh; position: absolute; left: 0">        <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                <p class="s-text s-text-active">Ver cuentas</p>
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
                        <b-button class="pr-action" href="login">
                            <div class="pr-text"><p>• Cerrar sesión</p></div>
                        </b-button>
                    </b-dropdown>
                </b-navbar-nav>
            </b-navbar>
            <div class="main-body">
                <div class="title"><h1>Cuentas activas</h1></div>
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
                <li v-for="(client, index) in clientInfo" :key="index" style="list-style-type: none;display: inline">
                  <div class="medium-card">
                    <b-card class="top cyan">
                      <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                      <b-card-body class="title">
                          <router-link :to="`/movements/${client.id}`">
                              <a style="color: black"><u>{{client.firstName+" "+client.lastName}}</u></a>
                          </router-link>
                      </b-card-body>
                      <div class="amount-1 title">{{"S/ "+client.creditAmount}}</div>
                    </b-card>
                    <b-card class="bottom">
                      <div class="info">Tipo de tasa: Efectiva</div>
                      <div class="info">Tasa de interés: 3% Mensual</div>
                      <div class="info">Mantenimiento: S/5.00 Mensual</div>
                      <div class="info">Delivery: S/2.00 por entrega</div>
                      <b-button class="they-paid-btn">
                        <div class="text">Me pagó</div>
                      </b-button>
                      <b-button class="i-sold-btn">
                        <div class="text">Le vendí</div>
                      </b-button>
                    </b-card>
                  </div>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '../shared/baseUrl';
    export default {
        name: "VerCuentas",
        mounted() {
          //get all clients
          this.axios
              .get(baseUrl + 'commerces/1/clients')
              .then(responseUser => {
                this.clientInfo = responseUser.data.content;
              });
        },
        data() {
          return {
            clientInfo: []
          }
        }
    }
</script>

<style lang="scss">
@import "../assets/scss/styles.scss";
    body{
        overflow-x: hidden;
    }

    /* Style page content */
    .main {
        margin-left: 14.7vw;
        margin-top: -2px;
        width: 85.26vw;
        height: 158vh;
        background-image: url("../assets/DashboardBG.png");
        background-repeat: no-repeat;
        background-origin: content-box;
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
        margin-top: 3vh;
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
        margin-top: -1.3vh;
    }

    div.card-header {
        background-color: transparent;
    }

    .sm-card-body {
        font-size: 2vw;
        font-weight: 600;
        color: #000;
        text-align: left;
        margin-top: 0.5vw;
        margin-left: -0.6vw;
    }

    .sm-card-icon {
        position: relative;
        width: 3.9vw;
        height: 3.9vw;
        left: 12vw;
        top: -7.5vh;
    }

    .medium-card {
        width: 39.48vw;
        height: 47.31vh;
        margin: 2vw 1vw 2vw 1.30vw;
        display: inline-block;
        .top {
            height: 5.21vw;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            border-radius: 1.5vw 1.5vw 0 0;
            border: transparent;
            .graph-icon {
                display: inline-block;
                position: relative;
                top: -1.75vh;
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
            .amount-1{
                display: inline-block;
                position: relative;
                left: 8.75vw;
            }
            .amount-2{
                display: inline-block;
                position: relative;
                left: 8.2vw;
            }
            .amount-3{
                display: inline-block;
                position: relative;
                left: 6.88vw;
            }
            .amount-4{
                display: inline-block;
                position: relative;
                left: 6vw;
            }
        }
        .cyan{
            background: linear-gradient(90deg, #a5ffc9 0%, #4dbfd1 100%);
        }
        .dark-cyan{
            background: linear-gradient(90deg, #A5FFEA 0%, #4D79D1 100%);
        }
        .purple{
            background: linear-gradient(90deg, #A5ABFF 0%, #AA4DD1 100%);
        }
        .pink{
            background: linear-gradient(90deg, #E8A5FF 0%, #D14DBB 100%);
        }
        .bottom{
            border-radius: 0 0 1.5vw 1.5vw;
            border: transparent;

            .title{
                font-size: 4.17vw;
                font-weight: 600;
                color: #000;
                margin-left: 4vw;
            }
            .info{
                font-size: 1.82vw;
                font-weight: 600;
                color: #282A3F;
                text-decoration: underline;
                text-align: left;
                position: relative;
                left: 5.75vw;
                margin-bottom: 1.50vw;
            }
            .they-paid-btn{
                width: 12.03vw;
                height: 5.74vh;
                border-radius: 2.24vw;
                background: linear-gradient(90deg, #634dfc 0%, #da71ff 100%);
                display: inline-block;
                margin-left: 2.5vw;
                margin-right: 2.5vw;
                border: transparent;
                .text{
                    font-family: Gilroy ☞;
                    font-size: 1.46vw;
                    font-weight: 600;
                    color: #fff;
                }
            }
            .i-sold-btn{
                width: 12.03vw;
                height: 5.74vh;
                border-radius: 2.24vw;
                background: linear-gradient(90deg, #f96ea6 0%, #f8a74b 100%);
                display: inline-block;
                margin-left: 2.5vw;
                margin-right: 2.5vw;
                border: transparent;
                .text{
                    font-family: Gilroy ☞;
                    font-size: 1.46vw;
                    font-weight: 600;
                    color: #fff;
                }
            }
        }
    }

</style>
