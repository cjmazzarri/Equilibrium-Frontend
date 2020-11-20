<template>
    <div class="SignUp vh-100 vw-100" style="align-content: center">
        <b-container align="center">
            <b-row no-gutters class="back" align-v="center">
                <b-col>
                    <img src="../assets/SignUpBG.png" style="width: 28.5vw; height: auto;">
                </b-col>
                <b-col>
                    <img class="close-x" src="../assets/CloseX.png">
                    <form class="login-form">
                        <h1 class="registrate-header">Regístrate en Equilibrium</h1>
                        <h3 class="text">¿Ya tienes cuenta? <a class="form-link" href="" target="_blank" rel="noopener">Inicia sesión aquí</a></h3>
                        <div class="form-text">
                            <label for="InputUsername">Username</label>
                            <input type="text" class="form-control" required id="InputUsername">
                        </div>
                        <div class="form-text">
                            <label for="InputEmail">Correo electrónico </label>
                            <input type="email" class="form-control" required id="InputEmail" placeholder="correo@ejemplo.com">
                        </div>
                        <div class="form-text">
                            <label for="InputPassword">Contraseña</label>
                            <input type="password" class="form-control" required id="InputPassword">
                        </div>
                        <div class="form-text">
                            <label for="InputConfirmPassword">Confirme la contraseña</label>
                            <input type="password" class="form-control" required id="InputConfirmPassword">
                        </div>
                        <div class="form-text">
                            <label for="FechaNac">Fecha de Nacimiento</label>
                            <input class="form-control" required style="alignment: left" id="FechaNac" type="date" name="FechaNac"/>
                        </div>

                    </form>
                    <button class="register-btn">REGISTRARSE</button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "SignUp"
    }
</script>

<style lang="scss">
    .SignUp {
        height: 100%;
        display: grid;
        background-image: url("../assets/SimpleBG.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: auto;
    }

    .registrate-header{
        font-family: Gilroy ☞;
        text-align: left;
        font-size: 20px;
        font-weight: 700;
        color: #202020;
        position: relative;

    }

    .form-text {
        font-family: Gilroy ☞;
        text-align: left;
        font-size: 14px;
        font-weight: 500;
        color: #707070;
        width: 85%;
        margin-right: 25%;
    }

    .form-text:focus-within {
        font-family: Gilroy ☞;
        text-align: left;
        font-size: 14px;
        font-weight: 500;
        color: #202020;
    }

    .form-link{
        font-family: Gilroy ☞;
        font-size: 14px;
        font-weight: 500;
        position: relative;
        left: 4%;
        text-decoration: underline;
    }

    .form-control{
        font-family: Gilroy ☞;
        text-align: left;
        font-size: 16px;
        font-weight: 500;
        color: #202020;
    }

    .text {
        font-family: Gilroy ☞;
        text-align: left;
        font-size: 14px;
        font-weight: 500;
        color: #202020;
    }

    .close-x{
        width: 1vw;
        height: auto;
        position: relative;
        left: 40%;
        bottom: 6%;
    }

    .back{
        background-color: white;
        margin: auto;
        width: 57vw;
    }

    .register-btn {
        width: 25vw;
        height: 35px;
        border-radius: 50px;
        background: linear-gradient(90deg, #7591ff 0%, #4dd1be 100%);
        font-family: Gilroy ☞;
        font-size: 16px;
        line-height: (9 / 20);
        font-weight: 500;
        color: #fff;
        border-width: 0;
        margin-top: 5%;
        margin-bottom: 4%;
    }

    .login-form > * {
        margin-left: 6.5%;
        margin-bottom: 5%;
    }
</style>
