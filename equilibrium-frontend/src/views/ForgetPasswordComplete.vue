<template>
    <div class="SentEmail vh-100 vw-100" style="align-content: center">
        <b-container align="center">
            <b-row no-gutters class="back">
                <b-col>
                    <img src="../assets/LoginBGWithLine.png" style="width: 28.5vw; height: auto;">
                </b-col>
                <b-col>
                    <img src="../assets/RedCloseX.png" style="position: relative; left: 13.5vw; bottom: 14%; width: 1vw; height: auto">
                    <img src="../assets/CyanCheckmark.png" style="position: relative; right: 11vw; margin-top: 46%;
                    margin-bottom: 6%; width: 3vw; height: auto">
                    <h1 class="correo-enviado-header">Correo de
                        restablecimiento
                        enviado!</h1>
                    <label class="text">Te hemos enviado el correo de
                        restablecimiento a
                        MariaParedes20@gmail.com</label>
                    <label class="text-italic">
                        Revisa tu carpeta de spam en
                        caso no lo veas en tu bandeja.
                    </label>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "SentEmail"
    }
</script>

<style lang="scss">
    .SentEmail {
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
        padding-left: 2vw;
    }

    .text{
        font-family: Gilroy ☞;
        font-size: 16px;
        line-height: (35 / 25);
        font-weight: 400;
        color: #202020;
        text-align: left;
        width: 73%;
        margin-top: 5%;
        margin-right: 12%;
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
