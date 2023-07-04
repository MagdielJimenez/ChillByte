<template>
  <div id="animatedBanner">
  <b-container class="d-block">
    <span class="firstText">Somos
      <vue-typer
        :text="['creatividad', 'planeación', 'oportunidad', 'ingenio', 'eficiencia']"
        initial-action="erasing"
        erase-style="backspace"
        :type-delay="100"
        :pre-erase-delay="2000"
        :erase-delay="100"
      ></vue-typer>
      .</span>
      </b-container>
  </div>
</template>
<script>
export default {
  name: "AnimatedBanner",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
