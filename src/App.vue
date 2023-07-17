<template>
  <div id="app">
    <router-view>
      <HomeView/>
    </router-view>
   
  </div>
</template>

<script>
import HomeView from './views/HomeView'
export default {
  name: "App",
  components: {
   HomeView:HomeView
  },
};
</script>

<style lang="scss">
@import "./assets/styles/styles.scss";
</style>
