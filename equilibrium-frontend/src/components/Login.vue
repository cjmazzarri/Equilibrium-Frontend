<template>
    <div class="back">
        <form>
            <h1>Inicia sesión</h1>
            <h3>¿No tienes cuenta?</h3>  <li><a href="" target="_blank" rel="noopener">Regístrate aquí</a></li>
            <div class="form-group">
                <label for="InputUsername">Email o Username</label>
                <input type="text" class="form-control" id="InputUsername">
            </div>
            <div class="form-group">
                <label for="InputPassword">Contraseña</label>
                <input type="password" class="form-control" id="InputPassword">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="KeepLoggedInCheck">
                <label class="form-check-label" for="KeepLoggedInCheck">Mantener la sesión iniciada</label>
            </div>
            <button type="submit">Iniciar Sesión</button>
            <div></div>
            <li><a href="" target="_blank" rel="noopener">¿No recuerdas tu username o contraseña?</a></li>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
