<template>
    <div class="RegisterPayment">
        <div class="sidenav">
        <img src="../assets/EquilibriumLogo.png" class="logo" alt="LogoEquilibrium">
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
          <img src="../assets/CategoryIndicator.png" style="height: 6.5vh; position: absolute; left: 0">        <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
          <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
          <p class="s-text s-text-active">Registrar venta</p>
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
                        <b-button class="pr-action" href="/login">
                            <div class="pr-text"><p>• Cerrar sesión</p></div>
                        </b-button>
                    </b-dropdown>
                </b-navbar-nav>
            </b-navbar>
            <div class="main-body">
                <div class="title"><h1>Registrar una venta</h1></div>
                <li v-for="(client, index) in clientInfo" :key="index" style="list-style-type: none; display: inline">
                    <div class="sale-card">
                        <b-card class="top pink">
                            <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                            <b-card-body class="title">
                              {{client.firstName+" "+client.lastName}}
                            </b-card-body>
                            <div class="amount-1 title">{{"S/"+client.creditAmount}}</div>
                        </b-card>
                        <b-card class="bottom">
                            <b-row>
                                <b-col>
                                    <div class="info">
                                      Creado en: {{client.createdAt}}</div>
                                    <router-link :to="`/register-sale-1/${client.id}`">
                                      <b-button class="sale-btn" @click="onClick(client.id)">
                                        <div class="text">Registrar venta</div>
                                      </b-button>
                                    </router-link>
                                </b-col>
                            </b-row>
                        </b-card>
                    </div>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import {baseUrl} from "@/shared/baseUrl";
    export default {
      name: "RegisterSale",
      mounted() {
        //get all clients
        this.axios
            .get(baseUrl + 'commerces/1/clients')
            .then(responseClient => {
              this.clientInfo = responseClient.data.content;
              this.simpleDate();
            });
        console.log(this.clientInfo);
      },
      data() {
        return {
          clientInfo: []
        }
      },
      methods: {
        simpleDate() {
          for (let i = 0; i < this.clientInfo.length; i++) {
            let date = this.clientInfo[i].createdAt;
            let splitDate = date.split("-")
            let formatDate = splitDate[2][0] + splitDate[2][1] + '/' + splitDate[1] + '/' + splitDate[0][2] + splitDate[0][3];
            this.clientInfo[i].createdAt = formatDate;
          }
        },
        onClick(id){
          this.$store.commit('clientId', id);
          console.log(this.$store.getters.clientId);
        }
      }
    }
</script>

<style lang="scss">
@import "../assets/scss/styles.scss";
    body{
        overflow-x: hidden;
        background-color: #202020;
    }
    /* Style page content */
    .main {
      margin-left: 14.7vw;
      margin-top: -1px;
      width: 85.26vw;
      height: auto;
      min-height: 100vh;
      background-image: url("../assets/DashboardBG.png");
      background-position: top left;
      background-color: #202020;
      background-repeat: repeat-y;
      background-origin: content-box;
      border-left: #888 solid 2px;
    }

    .sale-card{
        width: 39.43vw;
        height: 18.52vh;
        margin: 2vh 1vw 8.5vh 1.30vw;
        display: inline-block;
        .top {
            height: 5.21vw;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-radius: 1.5vw 1.5vw 0 0;
            border: transparent;
            width: 39.48vw;
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
            .amount-1{
                font-size: 1.82vw;
                font-weight: 600;
                color: #000;
                text-align: right;
                display: inline-block;
                position: absolute;
                right: 3vw;
                top: 6vh;
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
            display: flex;
            align-items: center;
            justify-content: space-between;
            vertical-align: center;
            width: 39.48vw;
            min-height: 9.26vh;
            .info{
                font-size: 1.56vw;
                font-weight: 600;
                color: #000;
                text-align: left;
                position: absolute;
                left: -16vw;
                top: 0.7vh;
                width: 15vw;
            }
            .sale-btn{
                width: 14.32vw;
                height: 5.74vh;
                border-radius: 2.24vw;
                background: linear-gradient(90deg, #f96ea6 0%, #f8a74b 100%);
                display: inline-block;
                border: transparent;
                position: absolute;
                left: 4vw;
                top: -0.7vh;
                .text{
                    font-size: 1.46vw;
                    line-height: 1.3;
                    font-weight: 600;
                    color: #fff;
                }
            }

        }
    }
</style>
