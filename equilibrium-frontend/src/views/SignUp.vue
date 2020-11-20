<template>
    <div class="back">
        <form>
            <h1>Regístrate en Equilibrium</h1>
            <h3>¿Ya tienes cuenta? <li><a href="" target="_blank" rel="noopener">Inicia sesión aquí</a></li></h3>
            <div class="form-group">
                <label for="InputUsername">Nombre de usuario </label>
                <input type="email" class="form-control" id="InputUsername">
            </div>
            <div class="form-group">
                <label for="InputEmail">Correo electrónico </label>
                <input type="email" class="form-control" id="InputEmail" placeholder="correo@ejemplo.com">
            </div>
            <div class="form-group">
                <label for="InputPassword">Contraseña</label>
                <input type="password" class="form-control" id="InputPassword">
            </div>
            <div class="form-group">
                <label for="InputConfirmPassword">Confirme la contraseña</label>
                <input type="password" class="form-control" id="InputConfirmPassword">
            </div>
            <div class="form-group">
                <label for="FechaNac">Fecha de Nacimiento</label>
                <input id="FechaNac" type="date" name="FechaNac"/>
            </div>
            <button>Registrarse</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SignUp"
    }
</script>



<style scoped>

</style>
