<template>
  <div class="LandingPage">
    <b-navbar class="navbar navbar-dark bg-transparent">
      <b-navbar-nav id="nav-text">
        <b-navbar-brand href="#">
          <img src="../assets/EquilibriumMini.png" class="d-inline-block align-top nav-logo" style="width: 41px; height: auto" alt="Equilibrium">
        </b-navbar-brand>
        <b-nav-item class="text-primary">AÑADE CLIENTES</b-nav-item>
        <b-nav-item>VER CUENTAS</b-nav-item>
        <b-nav-item>REGISTRAR PAGOS</b-nav-item>
        <b-nav-item>REGISTRAR VENTAS</b-nav-item>
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
    <div class="cta">
      <p class="title">Maneja <u>créditos</u>
        <br><u>otorgados</u> por tu
        <br><u>pequeño negocio</u>
        <br>facilito con
      </p>
      <img src="../assets/EquilibriumLogo.png" class="logo" alt="LogoEquilibrium">
      <b-button size="lg" class="btn-comenzar-ya">
        <svg class="RightArrow" viewBox="0 0 41.9 25.8"><path d="M21 25.8L0 5.9 6.2 0 21 14 35.7 0 41.9 5.9 21 25.8Z"/></svg>
        <p class="text">Comienza ya!</p>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
}
</script>

<style scoped>
</style>
