<template>
    <div class="LoginComplete vh-100 vw-100" style="align-content: center">
        <b-container align="center">
            <b-row no-gutters class="back">
                <b-col>
                    <img src="../assets/LoginBGWithLine.png" style="width: 28.5vw; height: auto;">
                </b-col>
                <b-col>
                    <img class="red-x" src="../assets/RedCloseX.png">
                    <img class="checkmark" src="../assets/CyanCheckmark.png">
                    <h1 class="correo-enviado-header">Inicio de sesión
                        exitoso!</h1>
                    <label class="text">Has iniciado sesión en Equilibrium
                        de manera satisfactoria.
                        Redirigiendo a la página principal.</label>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "LoginComplete"
    }
</script>

<style lang="scss">
    .LoginComplete {
        height: 100%;
        display: grid;
        background-image: url("../assets/SimpleBG.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: auto;
    }

    .correo-enviado-header{
        font-family: Gilroy ☞;
        font-size: 30px;
        font-weight: 700;
        text-decoration: underline;
        color: #202020;
        text-align: left;
        width: 75%;
        margin-right: 12%;
    }

    .text{
        font-family: Gilroy ☞;
        font-size: 16px;
        line-height: (35 / 25);
        font-weight: 400;
        color: #202020;
        text-align: left;
        width: 67%;
        margin-top: 7%;
        margin-right: 20%;
    }

    .text-italic{
        font-family: Gilroy-MediumItalic ☞;
        font-size: 16px;
        line-height: (35 / 25);
        font-weight: 400;
        font-style: italic;
        color: #202020;
        width: 73%;
        text-align: left;
        margin-right: 12%;
        position: relative;
        bottom: 1%;
    }

    .checkmark{
        position: relative;
        margin-right: 80%;
        margin-top: 54%;
        margin-bottom: 6%;
        width: 3vw;
        height: auto;
    }

    .red-x{
        bottom: 16%;
        width: 1vw;
        height: auto;
        left: 85%;
        position: relative;
    }

    .back{
        background-color: white;
        margin: auto;
        width: 57vw;
    }

    .login-form > * {
        margin-bottom: 2.8vw;
        padding-left: 2vw;
    }
</style>
