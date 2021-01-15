<template>
  <div class="SignUp vh-100 vw-100" style="align-content: center">
    <b-container style="display: grid; place-items: center">
      <b-row no-gutters class="back" align-v="center">
        <b-col>
          <img src="../assets/SignUpBG.png" style="width: 28.5vw; height: auto;">
        </b-col>
        <b-col>
          <router-link to="/">
            <img class="close-x" src="../assets/CloseX.png">
          </router-link>
          <form class="login-form">
            <h1 class="registrate-header">Regístrate en Equilibrium</h1>
            <h3 class="text">¿Ya tienes cuenta? <a class="form-link" href="/login" rel="noopener">Inicia sesión aquí</a></h3>
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
          <b-button class="register-btn text" text to="/sign-up-complete">
            REGISTRARSE
          </b-button>
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
  height: 100vh;
  display: grid;
  background-image: url("../assets/SimpleBG.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto;
}

.registrate-header {
  text-align: left;
  font-size: 1.7vw;
  font-weight: 700;
  color: #202020;
}

.form-text {
  text-align: left;
  font-size: 1vw;
  font-weight: 500;
  color: #707070;
  width: 85%;
  margin-right: 25%;
}

.form-text:focus-within {
  text-align: left;
  font-size: 1vw;
  font-weight: 500;
  color: #202020;
}

.form-link {
  font-size: 1vw;
  font-weight: 500;
  position: relative;
  left: 4%;
  text-decoration: underline;
  color: #4D56D1;
}

.form-control {
  text-align: left;
  font-size: 1vw;
  font-weight: 500;
  color: #202020;
}

.text {
  text-align: left;
  font-size: 1vw;
  font-weight: 500;
  color: #202020;
}

.close-x {
  width: 1vw;
  height: auto;
  position: relative;
  left: 40%;
  bottom: 6%;
}

.back {
  background-color: white;
  margin: auto;
  width: 57vw;
  height: auto;
}

.register-btn {
  width: 25vw;
  height: 3vw;
  border-radius: 50px;
  background: linear-gradient(90deg, #7591ff 0%, #4dd1be 100%);
  font-size: 1vw;
  line-height: (9 / 20);
  font-weight: 500;
  color: #fff;
  border-width: 0;
  display: grid;
  place-items: center;
  margin-left: 2vw;
  margin-top: 3vw;
}

.login-form>* {
  margin-left: 2.3vw;
  margin-bottom: 2vw;
}

#InputUsername,
#InputPassword,
#InputEmail,
#InputConfirmPassword,
#FechaNac {
  transition: all .5s ease;
  width: 24vw;
  margin-left: 0;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-radius: 0;
  border-width: 0.2vw;
}

#InputUsername:focus,
#InputPassword:focus,
#InputEmail:focus,
#InputConfirmPassword:focus,
#FechaNac:focus {
  border-color: #4D56D1;
  outline: none 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}
</style>
