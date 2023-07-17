<template>
    <div id="NuestrosClientes" class="mt-4">
        <h1 class="pr-2 thin h1-size" style="text-align: right;"><span class="text-purple">Creamos</span> con nuestros clientes.</h1>
        <b-container>
            <b-row class="mt-4">
                <b-col md="3" sm="4" class="d-flex align-content-end justify-content-center mb-3">
                    <div v-show="fourthIsVisible" class="align-self-end slide-enter-active slide-enter">
                        <img class="align-self-end" width="170px" src="../../assets/img/clientes/logoCharlie.png"
                            alt="PinguinoCharlie">
                    </div>
                </b-col>

                <b-col md="3" sm="4" class="d-flex align-content-end justify-content-center mb-3">
                    <div v-if="thirdIsVisible" class="align-self-end slide-enter-active slide-enter">
                        <img class="align-self-end" width="170px" src="../../assets/img/clientes/imefLogo.png"
                            alt="PinguinoCharlie">
                    </div>
                </b-col>
                <b-col md="3" sm="4" class="d-flex align-content-end justify-content-center mb-3">
                    <div v-if="secondIsVisible" class="align-self-end slide-enter-active slide-enter">
                        <img class="align-self-end" width="170px" src="../../assets/img/clientes/logocinves.png"
                            alt="PinguinoCharlie">
                    </div>
                </b-col>
                <b-col md="3" sm="4" class="d-flex align-content-end justify-content-center mb-3">
                    <div v-show="isVisible" class="align-self-end slide-enter-active slide-enter">
                        <img class="align-self-end" width="170px" src="../../assets/img/clientes/ZAVERIA_logo.png"
                            alt="PinguinoCharlie">
                    </div>
                </b-col>

            </b-row>

        </b-container>
    </div>
</template>
<script>
export default {
    name: 'NuestrosClientes',
    data() {
        return {
            isVisible: false,
            secondIsVisible: false,
            thirdIsVisible: false,
            fourthIsVisible: false
        };
    },
    mounted() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Adjust this threshold value to trigger the visibility
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("INTERSECTING CLIENTS")
                    this.isVisible = true;
                    setTimeout(() => {
                        this.secondIsVisible = true;
                    }, 300);
                    setTimeout(() => {
                        this.thirdIsVisible = true;
                    }, 600);
                    setTimeout(() => {
                        this.fourthIsVisible = true;
                    }, 900);
                    observer.unobserve(entry.target);
                }
                
            });
        }, options);
        observer.observe(this.$el);
    }
};
</script>
<style>
.slide-enter-active {
    animation: slide-right 0.7s;
}

@keyframes slide-right {
    0% {
      transform: translateX(-100px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
  
    60% {
      transform: translateX(0px);
      animation-timing-function: ease-out;
    }
  
    75% {
      transform: translateX(0px);
      animation-timing-function: ease-in;
    }
  
    90% {
      transform: translateX(0px);
      animation-timing-function: ease-out;
    }
  
    100% {
      transform: translateX(0);
      animation-timing-function: ease-in;
      opacity: 1;
    }
  }
</style>