<template>
  <div id="navBar" class="navbar-size">
    <b-navbar toggleable="lg" type="dark" >
      <b-navbar-brand href="#">
        <img
          class="d-inline-block align-top mx-3"
          height="50px"
          alt="Vue logo"
          src="../../assets/chillbytelogohorizontal.png"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#"><span class="orangeColor">01.</span>HOME</b-nav-item>
          <b-nav-item href="#"><span class="orangeColor">02.</span>ACERCA DE</b-nav-item>
          <b-nav-item href="#"><span class="orangeColor">03.</span>COSTOS</b-nav-item>
          <b-nav-item href="#"><span class="orangeColor">04.</span>CONTACTO</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
