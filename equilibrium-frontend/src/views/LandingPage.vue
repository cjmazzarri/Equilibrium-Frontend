<template>
  <div class="LandingPage">
    <b-navbar class="navbar navbar-dark bg-transparent">
      <b-navbar-brand href="#">
        <img src="../assets/EquilibriumMini.png" class="d-inline-block align-top nav-logo" style="width: 28px; height: auto" alt="Equilibrium">
      </b-navbar-brand>

      <b-navbar-nav id="nav-text">
        <b-nav-item class="text-primary">AÑADE CLIENTES</b-nav-item>
        <b-nav-item>VER CUENTAS</b-nav-item>
        <b-nav-item>REGISTRAR PAGOS</b-nav-item>
        <b-nav-item>REGISTRAR VENTAS</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="nav-text">
        <b-nav-item>
          <b-button size="lg" class="nav-btn-registrarse">
            <p class="text">REGISTRARSE</p>
          </b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button size="lg" class="nav-btn-iniciar">
            <p class="text">INICIAR SESIÓN</p>
          </b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
}
</script>

<style scoped>
</style>
