<template>
    <div class="Recover-pwd vh-100 vw-100" style="align-content: center">
        <b-container align="center">
            <b-row no-gutters class="back" align-v="center">
                <b-col>
                    <img src="../assets/LoginBGWithLine.png" style="width: 28.5vw; height: auto;">
                </b-col>
                <b-col>
                    <router-link to="/">
                        <img src="../assets/CloseX.png" style="position: relative; left: 12vw; bottom: 25%">
                    </router-link>
                    <form class="login-form">
                        <h1 class="recuperar-contrasena-header">Recuperar contraseña</h1>
                        <div class="form-group">
                            <label class="form-text" for="InputUsername">Introduce tu correo electrónico para mandarte
                                un correo de restablecimiento:</label>
                            <label></label>
                            <label class="form-text" for="InputUsername">Email</label>
                            <input type="text" class="form-control" id="InputUsername">
                        </div>
                        <b-button class="submit-btn" type="submit" text to="/forget-password-complete">MANDAR CORREO</b-button>
                    </form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "RecoverPassword"
    }
</script>

<style lang="scss">
    .Recover-pwd {
        height: 100%;
        display: grid;
        background-image: url("../assets/SimpleBG.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: auto;
    }

    .recuperar-contrasena-header{
        font-family: Gilroy ☞;
        text-align: left;
        font-size: 20px;
        font-weight: 700;
        color: #202020;
        padding-left: 2vw;
        margin-top: 10%;
    }

    .form-text{
        font-family: Gilroy ☞;
        text-align: left;
        font-size: 16px;
        font-weight: 500;
        color: #202020;
    }

    .back{
        background-color: white;
        margin: auto;
        width: 57vw;
    }

    .submit-btn {
        width: 25vw;
        height: 35px;
        border-radius: 50px;
        background: linear-gradient(90deg, #7591ff 0%, #4dd1be 100%);
        font-family: Gilroy ☞;
        font-size: 16px;
        margin-top: 10%;
        line-height: (9 / 20);
        font-weight: 500;
        color: #fff;
        border-width: 0;
    }

    .login-form > * {
        margin-bottom: 3vw;
        padding-left: 2vw;
    }

</style>
