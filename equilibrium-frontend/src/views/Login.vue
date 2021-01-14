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
                            <input class="form-control" id="InputUsername" type="email">
                        </div>
                        <div class="form-group">
                            <label class="form-text" for="InputPassword">Contraseña</label>
                            <input type="password" class="form-control" id="InputPassword">
                        </div>
                        <div class="form-group form-check" style="text-align: left">
                          <label class="checkbox path">
                            <input type="checkbox">
                            <svg viewBox="0 0 21 21">
                              <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                            </svg>
                          </label>
                            <label class="form-check-text">Mantener la sesión iniciada</label>
                        </div>
                      <b-button class="login-btn" to="/dashboard" type="submit"><p class="text">INICIAR SESIÓN</p></b-button>
                        <a class="form-link-1" style="left: -2vw" href="/forget-password" rel="noopener">No recuerdas tu username o contraseña?</a>
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
        height: 100vh;
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
        text-align: left;
        font-size: 2vw;
        font-weight: 700;
        color: #202020;
        padding-left: 2vw;
    }

    .form-text{
        text-align: left;
        font-size: 16px;
        font-weight: 500;
        color: #202020;
    }

    .form-link{
        font-size: 16px;
        font-weight: 500;
        position: relative;
        left: -3vw;
        top: 2px;
        text-decoration: underline;
    }

    .form-link-1 {
      font-size: 16px;
      font-weight: 500;
      position: relative;
      left: -3vw;
      margin-left: -2vw;
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
        height: 5vh;
        border-radius: 50px;
        background: linear-gradient(90deg, #7591ff 0%, #4dd1be 100%);
        font-size: 1vw;
        display: flex;
        justify-content: center;
        align-self: center;
        line-height: (9 / 20);
        font-weight: 500;
        color: #fff;
        border-width: 0;
        .text{
            font-size: 1vw;
            font-weight: 500;
            margin-left: -0.5vw;
            margin-top: 0.6vh;
        }
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
        margin-left: -1vw;
        font-size: 1.1vw;
        font-weight: 500;
        color: #202020;
        position: relative;
        left: 3vw;
        top: 0.1vw;
    }
    #InputUsername, #InputPassword{
      width: 24vw;
      margin-left: -2vw;
      border-top: transparent;
      border-left: transparent;
      border-right: transparent;
      border-radius: 0;
      border-width: 0.2vw;
    }
    #InputUsername:focus, #InputPassword:focus{
      border-color: #4D56D1;
      outline: none 0 !important;
      box-shadow: none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
    }
    #KeepLoggedInCheck{
      margin-left: -2vw;
      margin-right: 2vw;
    }

    //

    .checkbox {
      --background: #fff;
      --border: #D1D6EE;
      --border-hover: #BBC1E1;
      --border-active: #1E2235;
      --tick: #fff;
      position: relative;
      top: 2.2vh;
      left: 0.5vw;
      input,
      svg {
        width: 28px;
        height: 28px;
        display: block;
      }
      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        outline: none;
        background: var(--background);
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
        border-radius: 4px;
        transition: box-shadow .3s;
        box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
        &:hover {
          --s: 2px;
          --b: var(--border-hover);
        }
        &:checked {
          --b: var(--border-active);
        }
      }
      svg {
        pointer-events: none;
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: var(--stroke, var(--border-active));
        position: absolute;
        top: 0;
        left: 0;
        width: 28px;
        height: 28px;
        transform: scale(var(--scale, 1)) translateZ(0);
      }
      &.path {
        input {
          &:checked {
            --s: 2px;
            transition-delay: .4s;
            & + svg {
              --a: 16.1 86.12;
              --o: 102.22;
            }
          }
        }
        svg {
          stroke-dasharray: var(--a, 86.12);
          stroke-dashoffset: var(--o, 86.12);
          transition: stroke-dasharray .6s, stroke-dashoffset .6s;
        }
      }
      &.bounce {
        --stroke: var(--tick);
        input {
          &:checked {
            --s: 11px;
            & + svg {
              animation: bounce .4s linear forwards .2s;
            }
          }
        }
        svg {
          --scale: 0;
        }
      }
    }

    @keyframes bounce {
      50% {
        transform: scale(1.2);
      }
      75% {
        transform: scale(.9);
      }
      100% {
        transform: scale(1);
      }
    }

    html {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }

    * {
      box-sizing: inherit;
      &:before,
      &:after {
        box-sizing: inherit;
      }
    }
</style>
