<template>
    <div class="Login vh-100 vw-100" style="align-content: center">
        <b-container align="center">
            <b-row no-gutters class="back" align-v="center">
                <b-col>
                    <img src="../assets/LoginBGWithLine.png" style="width: 28.5vw; height: auto;">
                </b-col>
                <b-col>
                    <router-link to="/">
                        <img src="../assets/CloseX.png" style="position: relative; left: 12vw; bottom: 18%">
                    </router-link>
                    <form class="login-form">
                        <h1 class="iniciar-sesion-header">Inicia sesión</h1>
                        <b-row>
                            <b-col>
                                <label style="font-size: 16px" class="form-text">¿No tienes cuenta?</label>
                            </b-col>
                            <b-col style="text-align: left">
                                <a class="form-link" href="/sign-up" rel="noopener">Regístrate aquí</a>
                            </b-col>
                        </b-row>
                        <div class="form-group">
                            <label class="form-text" for="InputUsername">Email o Username</label>
                            <input type="text" class="form-control" id="InputUsername">
                        </div>
                        <div class="form-group">
                            <label class="form-text" for="InputPassword">Contraseña</label>
                            <input type="password" class="form-control" id="InputPassword">
                        </div>
                        <div class="form-group form-check" style="text-align: left">
                            <input type="checkbox" class="form-check-input" id="KeepLoggedInCheck">
                            <label class="form-check-text" for="KeepLoggedInCheck">Mantener la sesión iniciada</label>
                        </div>
                        <button class="login-btn" type="submit">INICIAR SESIÓN</button>
                        <a class="form-link" style="left: -2vw" href="" target="_blank" rel="noopener">¿No recuerdas tu username o contraseña?</a>
                    </form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style lang="scss">
    .Login {
        height: 100%;
        display: grid;
        background-image: url("../assets/SimpleBG.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: auto;
    }

    .text {
        position: relative;
        top: 6px;
        font-family: Gilroy ☞, Avenir, Helvetica, Arial, sans-serif;
        font-size: 17px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        font-weight: 700;
        color: #fff;
    }

    .iniciar-sesion-header{
        font-family: Gilroy ☞;
        text-align: left;
        font-size: 20px;
        font-weight: 700;
        color: #202020;
        padding-left: 2vw;
    }

    .form-text{
        font-family: Gilroy ☞;
        text-align: left;
        font-size: 16px;
        font-weight: 500;
        color: #202020;
    }

    .form-link{
        font-family: Gilroy ☞;
        font-size: 16px;
        font-weight: 500;
        position: relative;
        left: -3vw;
        top: 2px;
        text-decoration: underline;
    }

    .back{
        background-color: white;
        margin: auto;
        width: 57vw;
    }

    .login-btn {
        width: 25vw;
        height: 35px;
        border-radius: 50px;
        background: linear-gradient(90deg, #7591ff 0%, #4dd1be 100%);
        font-family: Gilroy ☞;
        font-size: 16px;
        margin: auto;
        line-height: (9 / 20);
        font-weight: 500;
        color: #fff;
        border-width: 0;
    }

    .login-form > * {
        margin-bottom: 2.8vw;
        padding-left: 2vw;
    }

    .form-check-input{
        position: relative;
        left: 4vw;
    }

    .form-check-text{
        font-family: Gilroy ☞;
        font-size: 16px;
        font-weight: 500;
        color: #202020;
        position: relative;
        left: 3vw;
    }
</style>
