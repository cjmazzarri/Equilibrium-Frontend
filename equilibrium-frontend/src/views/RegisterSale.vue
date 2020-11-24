<template>
    <div class="RegisterPayment">
        <div class="sidenav">
            <img src="../assets/EquilibriumLogo.png" class="logo" alt="LogoEquilibrium">
            <b-button class="category" href="#">
                <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                <p class="s-text s-text-active">Dashboard</p>
            </b-button>
            <b-button class="category" href="#">
                <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                <p class="s-text">Añadir cliente</p>
            </b-button>
            <b-button class="category" href="#">
                <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                <p class="s-text">Ver cuentas</p>
            </b-button>
            <b-button class="category" href="#">
                <svg class="s-circle" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                <p class="s-text">Registrar pago</p>
            </b-button>
            <b-button class="category category-active" href="#">
                <img class="category-indicator" src="../assets/CategoryIndicator.png">
                <svg class="s-circle s-circle-active" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
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
                        <b-button class="pr-action">
                            <div class="pr-text"><p>• Cerrar sesión</p></div>
                        </b-button>
                    </b-dropdown>
                </b-navbar-nav>
            </b-navbar>
            <div class="main-body">
                <div class="title"><h1>Registrar una venta</h1></div>

                <div class="sale-card">
                    <b-card class="top cyan">
                        <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                        <b-card-body class="title">José Torres</b-card-body>
                        <div class="amount-1 title">S/1,356.02</div>
                    </b-card>
                    <b-card class="bottom">
                        <b-row>
                            <b-col>
                                <div class="info">Último pago: S/50 - 29/12</div>
                                <b-button class="sale-btn">
                                    <div class="text">Registrar venta</div>
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>

                <div class="sale-card">
                    <b-card class="top dark-cyan">
                        <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                        <b-card-body class="title">Marina Zárate</b-card-body>
                        <div class="amount-3 title">S/920.09</div>
                    </b-card>
                    <b-card class="bottom">
                        <b-row>
                            <b-col>
                                <div class="info">Último pago: S/20 - 28/12</div>
                                <b-button class="sale-btn">
                                    <div class="text">Registrar venta</div>
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>

                <div class="sale-card">
                    <b-card class="top purple">
                        <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                        <b-card-body class="title">Jenny Castro</b-card-body>
                        <div class="amount-1 title">S/846.50</div>
                    </b-card>
                    <b-card class="bottom">
                        <b-row>
                            <b-col>
                                <div class="info">Último pago: S/100 - 02/01</div>
                                <b-button class="sale-btn">
                                    <div class="text">Registrar venta</div>
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>

                <div class="sale-card">
                    <b-card class="top pink">
                        <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                        <b-card-body class="title">Julieta Olórtegui</b-card-body>
                        <div class="amount-5 title">S/645.12</div>
                    </b-card>
                    <b-card class="bottom">
                        <b-row>
                            <b-col>
                                <div class="info">Último pago: S/10 - 29/12</div>
                                <b-button class="sale-btn">
                                    <div class="text">Registrar venta</div>
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>

                <div class="sale-card">
                    <b-card class="top cyan">
                        <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                        <b-card-body class="title">Jesús Ramos</b-card-body>
                        <div class="amount-1 title">S/356.02</div>
                    </b-card>
                    <b-card class="bottom">
                        <b-row>
                            <b-col>
                                <div class="info">Último pago: S/50 - 29/12</div>
                                <b-button class="sale-btn">
                                    <div class="text">Registrar venta</div>
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>

                <div class="sale-card">
                    <b-card class="top dark-cyan">
                        <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                        <b-card-body class="title">Dino Pérez</b-card-body>
                        <div class="amount-2 title">S/256.69</div>
                    </b-card>
                    <b-card class="bottom">
                        <b-row>
                            <b-col>
                                <div class="info">Último pago: S/50 - 29/12</div>
                                <b-button class="sale-btn">
                                    <div class="text">Registrar venta</div>
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>

                <div class="sale-card">
                    <b-card class="top purple">
                        <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                        <b-card-body class="title">Daniel Ko</b-card-body>
                        <div class="amount-6 title">S/156.56</div>
                    </b-card>
                    <b-card class="bottom">
                        <b-row>
                            <b-col>
                                <div class="info">Último pago: S/50 - 29/12</div>
                                <b-button class="sale-btn">
                                    <div class="text">Registrar venta</div>
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>

                <div class="sale-card">
                    <b-card class="top pink">
                        <div class="graph-icon"><img src="../assets/MovementIcon.png"></div>
                        <b-card-body class="title">Lucía Marino</b-card-body>
                        <div class="amount-4 title">S/46.57</div>
                    </b-card>
                    <b-card class="bottom">
                        <b-row>
                            <b-col>
                                <div class="info">Último pago: S/50 - 29/12</div>
                                <b-button class="sale-btn">
                                    <div class="text">Registrar venta</div>
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegisterSale"
    }
</script>

<style lang="scss">
    /*scrollbar*/
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #222222;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #4FC0D1;
        border-radius: 3px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #7ADFCD;
    }
    body{
        overflow-x: hidden;
    }
    .sidenav {
        height: 100%;
        width: 14.74vw;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #202020;
        overflow-x: hidden;
        padding-top: 1.77vw;
    }

    .sidenav .logo {
        margin: 0 auto 1.7vw auto;
        width: 10.83vw;
        height: auto;
    }

    .sidenav .category {
        width: 11.5vw;
        height: 3.1vw;
        margin: 0 auto 1.7vh 1.9vw;
        text-decoration: none;
        font-size: 1em;
        color: #818181;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.42vw;
        background: #fff;
        text-align: left;
        border: transparent;
    }

    .sidenav .category:hover {
        background: #ddd;
    }

    .sidenav .category:focus {
        background: #fff;
    }

    .sidenav .category-indicator {
        position: absolute;
        left: 0;
        top: 44.25vh;
        fill: #A5FFC9;
        width: 0.55vw;
    }

    .sidenav .category-active {
        border-radius: 0.42vw;
        background: linear-gradient(90deg, #a5ffc9 0%, #4dbfd1 100%);
    }

    .sidenav .category-active:hover, .sidenav .category-active:focus {
        background: linear-gradient(135deg, #a5ffc9 0%, #4dbfd1 100%);
    }

    .sidenav .s-circle {
        position: absolute;
        left: 3vw;
        margin: auto;
        width: 1.04vw;
        height: 1.04vw;
        fill: #282a3f;
    }

    .sidenav .s-circle-active {
        fill: #584FD8;
    }

    .sidenav .s-text {
        margin: 0.81vh auto auto 2.5vw;
        font-size: 1.1vw;
        font-weight: 500;
        color: #282a3f;
        white-space: nowrap;
    }

    .sidenav .s-text-active {
        position: relative;
        left: -0.5vw;
        font-weight: 600;
        color: #584fd8;
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

    .main .navbar {
        padding: 1vw 2.29vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main .navbar .nav-hamburger {
        width: 1.04vw;
        height: auto;
        margin: auto 0;
    }

    .main .navbar .nav-search {
        width: 0.89vw;
        height: auto;
        margin: auto 0 auto 2.81vw;
    }

    .nav-text {
        font-size: 1vw;
        line-height: 1.1vw;
        font-weight: 500;
        letter-spacing: 0.025em;
        color: #8e8e8e;
        margin: auto 0 auto 0.83vw;
        padding-top: 0.18vh;
    }

    .main .nav-notification {
        width: 5.57vw;
        height: 3.33vw;
        border-radius: 0.89vw;
        background: #fff;
        margin-left: 53.13vw;
    }

    .not-title {
        font-size: 1.8vw;
        margin: 1.8vh auto 0 1.5vw;
        color: #584FD8;
    }

    .nav-notification /deep/ .dropdown-menu {
        background-color: #fff;
        border-radius: 0.89vw;
        margin-top: 1.8vh;
        border: transparent !important;
        box-shadow: -6px -4px 30px rgba(0, 0, 0, 0.2);
    }

    .not-card {
        font-size: 1vw;
        width: 15vw;
        border-radius: 0.89vw;
        background: #eee;
        border: transparent !important;
        margin: 1.24vh 0.5vw;
        box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.2);
    }

    .not-card-text {
        color: #444;
        font-weight: 400;
    }

    .nav-profile {
        margin-left: 1.93vw;
        width: 12.24vw;
        height: 3.33vw;
        border-radius: 0.89vw;
        background: linear-gradient(90deg, #a5ffc9 0%, #4dbfd1 100%);
    }

    .pr-name {
        font-size: 0.9vw;
        font-weight: 600;
        display: block;
        width: 5.88vw;
        height: 1.98vw;
        color: #202020;
    }

    .pr-business{
        font-size: 0.8vw;
        font-weight: 400;
        display: block;
        width: 4.53vw;
        height: 0.94vw;
        color: #727272;
    }

    .nav-profile /deep/ .dropdown-menu {
        background-color: #fff;
        border-radius: 0.89vw;
        border: transparent;
        box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.2);
        margin-top: 1.8vh;
        width: 12.24vw;
    }

    .pr-title {
        color: #4DBFD1;
        margin-bottom: 2.13vh;
    }

    .pr-action {
        width: 10vw;
        height: 3.07vw;
        border-radius: 0.42vw;
        background: #fff !important;
        border: transparent !important;
        margin: 0.89vh 0 1.8vh 1vw;
        box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.2);
    }

    .pr-text {
        font-size: 1.15vw;
        font-weight: 600;
        margin: 0.53vh 0 0 0;
        color: #282a3f;
        white-space: nowrap;
    }

    .title {
        margin-left: 2.2vw;
        text-align: left;
        font-size: 2.6vw;
        font-weight: 600;
        color: #e5e5e5;
    }

    .sale-card{
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
            .sale-btn{
                width: 14.32vw;
                height: 5.74vh;
                border-radius: 2.24vw;
                background: linear-gradient(90deg, #f96ea6 0%, #f8a74b 100%);
                display: inline-block;
                border: transparent;
                position: relative;
                left: 1vw;
                .text{
                    font-family: Gilroy ☞;
                    font-size: 1.46vw;
                    line-height: 0;
                    font-weight: 600;
                    color: #fff;
                }
            }

        }
    }
</style>
