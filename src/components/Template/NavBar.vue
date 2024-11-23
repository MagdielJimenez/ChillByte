<template>
  <div id="navBar">
    <b-navbar toggleable="lg" type="dark" class="d-flex justify-content-between" >
      <b-navbar-brand href="/" class="pl-2">

        <img
          class="d-inline-block align-top mx-3"
          height="50px"
          alt="Vue logo"
          src="../../assets/chillbytelogohorizontal.png"
        />
      </b-navbar-brand>
      
      <b-navbar-toggle v-if="isSmallScreen" target="nav-collapse" style="margin-right:20px;">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up" style="color:white"></b-icon>
          <b-icon v-else icon="chevron-bar-down" style="color:white"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav style="margin-right:20px;">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/"><span class="orangeColor">01.</span>HOME</b-nav-item>
           <b-nav-item href="#" disabled><span class="orangeColor">02.</span>ACERCA DE</b-nav-item>
          <b-nav-item href="/#costos" ><span class="orangeColor">03.</span>COSTOS</b-nav-item>
          <b-nav-item href="#" disabled><span class="orangeColor">04.</span>CONTACTO</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      expanded:true,
      isSmallScreen:false
    };
  },
  mounted(){
    this.checkScreenSize();
    window.addEventListener("resize",this.checkScreenSize);
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.checkScreenSize);
  },
  methods:{
    checkScreenSize(){
      this.isSmallScreen=window.innerWidth<768;
    }
  }
};
</script>
