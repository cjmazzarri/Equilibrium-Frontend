<template>
    <div class="RegisterPaymentS1">
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
            <b-button class="category category-active" href="/view-accounts">
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
                        <b-button class="pr-action" to="/login">
                            <div class="pr-text"><p>• Cerrar sesión</p></div>
                        </b-button>
                    </b-dropdown>
                </b-navbar-nav>
            </b-navbar>
            <div class="main-body">
                <div class="title"><h1>Movimientos</h1></div>
                <div class="medium-card">
                    <b-card class="top">
                        <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                        <b-card-body class="title">
                          {{clientInfo.firstName+' '+clientInfo.lastName}}
                        </b-card-body>
                        <div v-if="clientInfo.creditAmount >= 0" class="flex-column-amount">{{'S/'+clientInfo.creditAmount}}</div>
                        <div v-else class="flex-column-amount" style="color: #F35454">{{'S/'+clientInfo.creditAmount}}</div>
                    </b-card>
                    <b-card class="bottom" style="align-items: center;">
                       <div>
                           <li v-for="(movement, index) in movementInfo" :key="index" class="mov-list">
                               <b-list-group horizontal>
                                   <b-list-group-item class="flex-column">
                                       <div class="list-text">
                                           {{movement.createdAt}}
                                       </div>
                                   </b-list-group-item>
                                   <b-list-group-item class="flex-column-center">
                                       <div class="list-text">
                                           {{movement.description}}
                                       </div>
                                   </b-list-group-item>
                                   <b-list-group-item class="flex-column-right">
                                       <div v-if="movement.amount > 0" class="list-text">
                                           S/{{movement.amount}}
                                       </div>
                                       <div v-else class="list-text" style="color: red">
                                           -S/{{-movement.amount}}
                                       </div>
                                   </b-list-group-item>
                               </b-list-group>
                           </li>
                       </div>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { baseUrl} from "@/shared/baseUrl";

    export default {
        name: "Movements",
        data(){
            return {
                movementInfo: [],
                clientInfo: null
            }
        },
        mounted(){
            //get all movements
            this.axios
                .get(baseUrl + 'commerces/1/clients/'+this.$route.params.id+'/movements')
                .then(responseMovement => {
                    this.movementInfo = responseMovement.data.content;
                    this.simpleDate();
                });
            //get client
            this.axios
                .get(baseUrl + 'commerces/1/clients/'+this.$route.params.id)
                .then(responseClient => {
                    this.clientInfo = responseClient.data;
                });
        },
        methods: {
            simpleDate() {
                for (let i = 0; i < this.movementInfo.length; i++) {
                    let date = this.movementInfo[i].createdAt;
                    let splitDate = date.split("-")
                    let formatDate = splitDate[2][0] + splitDate[2][1] + '/' + splitDate[1] + '/' + splitDate[0][2] + splitDate[0][3];
                    this.movementInfo[i].createdAt = formatDate;
                    this.movementInfo[i].amount=Math.round(this.movementInfo[i].amount*100)/100
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
      height: auto;
      min-height: 100vh;
      background-image: url("../assets/DashboardBG.png");
      background-position: top left;
      background-color: #202020;
      background-repeat: repeat-y;
      background-origin: content-box;
      border-left: #888 solid 2px;
    }

    div.card-header {
        background-color: transparent;
    }

    .medium-card {
        width: 81.1vw;
        min-height: 52vh;
        height: auto;
        margin: 2.5vw auto 0vw;
        padding-bottom: 7vh;
        .top {
            width: 81.1vw;
            height: auto;
            display: inline-flex;
            justify-content: space-between;
            align-items: flex-start;
            background: linear-gradient(90deg, #a5e6ff 0%, #4f76d1 100%);
            border-radius: 1.5vw 1.5vw 0 0;
            border: transparent;
            .graph-icon {
              display: inline-block;
              position: relative;
              top: 0;
              left: 1vw;
            }
            .title{
              font-size: 2vw;
              line-height: 1;
              font-weight: 600;
              color: #000;
              display: inline-block;
              margin-top: -1.5vh;
              margin-left: 2vw;
              position: relative;
              top: 0.8vh;
            }
            .flex-column-amount {
              display: inline-block;
              font-size: 2.5vw;
              line-height: 1;
              font-weight: 600;
              color: #000;
              position: absolute;
              right: 2vw;
              margin-top: 1vh;
            }
        }
        .bottom{
            height: auto;
            border-radius: 0 0 1.5vw 1.5vw;
            border: transparent;
            padding: 1vw 0;
        }
    }
    .list-text{
        font-size: 1.65vw;
        font-weight: 600;
        color: #000;
        vert-align: middle;
        max-width: 40vw;
        min-width: 3.5vw;
    }
    .flex-column-center{
        min-width: 60vw;
        text-align: left;
        vert-align: middle;
    }
    .flex-column-right{
        max-width: 15vw;
        min-width: 10vw;
        vert-align: middle;
        text-align: right;
    }
    .mov-list{
        list-style: none;
    }
</style>
