<template>
    <div class="Login vh-100 vw-100">
        <b-container style="padding-top: 1%">
            <b-row no-gutters class="back" align-v="center">
                <b-col>
                    <img src="../assets/LoginBG.png" style="width: 28.5vw; height: auto;">
                </b-col>
                <b-col>
                    <form class="login-form">
                        <h1 class="iniciar-sesion-header">Inicia sesión</h1>
                        <b-row>
                            <b-col cols>
                                <label style="font-size: 16px" class="form-text">¿No tienes cuenta?</label>
                            </b-col>
                            <b-col style="text-align: left">
                                <a class="form-link" href="" target="_blank" rel="noopener">Regístrate aquí</a>
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
                        <a class="form-link" href="" target="_blank" rel="noopener">¿No recuerdas tu username o contraseña?</a>
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

<style scoped>
</style>
