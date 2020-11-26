<template>
    <div class="RegisterPayment">
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
        <b-button class="category" href="/view-accounts">
          <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
          <p class="s-text">Ver cuentas</p>
        </b-button>
        <b-button class="category category-active" href="/register-payment">
          <img src="../assets/CategoryIndicator.png" style="height: 6.5vh; position: absolute; left: 0">        <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
          <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
          <p class="s-text s-text-active">Registrar pago</p>
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
                <b-button class="pr-action" to="/login">
                  <div class="pr-text"><p>• Cerrar sesión</p></div>
                </b-button>
              </b-dropdown>
            </b-navbar-nav>
          </b-navbar>
            <div class="main-body">
                <div class="title"><h1>Registrar un pago</h1></div>
                <li v-for="(client, index) in clientInfo" :key="index" style="list-style-type: none; display: inline">
                    <div class="payment-card">
                        <b-card class="top cyan">
                            <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                            <b-card-body class="title">
                                    {{client.firstName+" "+client.lastName}}
                            </b-card-body>
                            <div class="amount-1 title">{{"S/. "+client.creditAmount}}</div>
                        </b-card>
                        <b-card class="bottom">
                            <b-row>
                                <b-col>
                                    <div class="info">
                                        {{"Creado en: "+client.createdAt}}</div>
                                    <router-link @click="onClick" :to="`/register-payment-1/${client.id}`">
                                        <div>
                                            <b-button class="pay-btn">
                                                <div class="text">Registrar pago</div>
                                            </b-button>
                                        </div>
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
        name: "RegisterPayment",
        mounted() {
            //get all clients
            this.axios
                .get(baseUrl + 'commerces/1/clients')
                .then(responseClient => {
                    this.clientInfo = responseClient.data.content;
                    /*let n = this.clientInfo.length
                    for(let i = 0; i < n; i++){
                        this.axios
                            .get(baseUrl + 'commerces/1/clients/'+this.clientInfo[i].id+'/payments/latest')
                            .then(responseLastPayment => {
                                this.paymentInfo.push(responseLastPayment.data);
                            })
                    }*/
                    this.simpleDate()
                    console.log(this.clientInfo);
                });


        },
        data(){
            return {
                clientInfo: []
                //paymentInfo: [],
            }
        },
        methods: {
            onClick(){
                console.log(this.client.id)
            },
            simpleDate() {
                for (let i = 0; i < this.clientInfo.length; i++) {
                    let date = this.clientInfo[i].createdAt;
                    let splitDate = date.split("-")
                    let formatDate = splitDate[2][0] + splitDate[2][1] + '/' + splitDate[1] + '/' + splitDate[0][2] + splitDate[0][3];
                    this.clientInfo[i].createdAt = formatDate;
                }
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
      margin-top: -1px;
      width: 85.26vw;
      min-height: 100vh;
      height: auto;
      background-image: url("../assets/DashboardBG.png");
      background-position: top left;
      background-color: #202020;
      background-repeat: repeat-y;
      background-origin: content-box;
      border-left: #888 solid 2px;
    }
    .payment-card{
        width: 39.43vw;
        height: 18.52vh;
        margin: 2vh 1vw 8.5vh 1.30vw;
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
                bottom: 2vh;
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
                left: 9vw;
            }
            .amount-2{
                display: inline-block;
                position: relative;
                left: 11vw;
            }
            .amount-3{
                display: inline-block;
                position: relative;
                left: 6.88vw;
            }
            .amount-4{
                display: inline-block;
                position: relative;
                left: 10.5vw;
            }
            .amount-5{
                display: inline-block;
                position: relative;
                left: 6.1vw;
            }
            .amount-6{
                display: inline-block;
                position: relative;
                left: 12.4vw;
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
                font-size: 1.56vw;
                font-weight: 600;
                color: #000;
                text-align: left;
                position: relative;
                right: 1.35vw;
                display: inline-block;
            }
            .pay-btn{
                width: 14.32vw;
                height: 5.74vh;
                border-radius: 2.24vw;
                background: linear-gradient(90deg, #634dfc 0%, #da71ff 100%);
                display: inline-block;
                border: transparent;
                position: relative;
                left: 1vw;
                .text{
                    font-family: Gilroy ☞;
                    font-size: 1.46vw;
                    line-height: 1.3;
                    font-weight: 600;
                    color: #fff;
                }
            }

        }
    }
</style>
