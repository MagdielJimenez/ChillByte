<template>
  <div id="EquipoChillByte" class="mt-4" style="margin-bottom: 100px;">
    <h1 class="pl-2 thin h1-size">El equipo que lo hará <span class="text-purple">posible</span>.</h1>
    <b-container fluid>
      <b-row>
        <b-col sm="12" md="3" class="d-flex justify-content-center">
          <div v-if="isVisible" class="bounce-in-down-enter-active">

            <b-card title="Ricardo López Ortiz"
              img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/FotoRichi.png?alt=media&token=6211aa03-3914-4bed-a522-5dd750d9d7bd"
              img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text>
                <p>Desarrollador Netsuite, web y móvil</p>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col sm="12" md="3" class="d-flex justify-content-center">
          <div v-if="secondIsVisible" class="bounce-in-down-enter-active">
            <b-card title="Magdiel Jiménez Tabla"
              img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/FotoMag.png?alt=media&token=8df97263-2f3e-4cba-be9c-d48b803fa9f2"
              img-alt="Image" img-top tag="article" style="max-width: 20rem;margin:0px;" class="mb-2">
              <b-card-text>
                <p>Desarrolladora web y móvil</p>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col sm="12" md="3" class="d-flex justify-content-center">
          <div v-if="thirdIsVisible" class="bounce-in-down-enter-active">
            <b-card title="Francisco Vaca Silva"
              img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/FotoPacoVaca.png?alt=media&token=7842bfe7-75fa-4e72-984d-7e6d9bde1f90"
              img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text>
                <p>Fotografía, video y diseño</p>
              </b-card-text>
            </b-card>
          </div>

        </b-col>
        <b-col sm="12" md="3" class="d-flex justify-content-center">
          <div v-if="fourthIsVisible" class="bounce-in-down-enter-active">

            <b-card title="Adrián Aguilar"
              img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/FotoPaco.png?alt=media&token=72d68281-3872-4927-a6eb-c553b9da3395"
              img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text>
                <p>Arquitecto de Soluciones</p>
              </b-card-text>
            </b-card>
          </div>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "EquipoChillByte",

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
      threshold: 0.9 // Adjust this threshold value to trigger the visibility
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
  },
};
</script>
<style>
.bounce-in-down-enter-active {
  animation: bounce-in-down 0.7s;
}

@keyframes bounce-in-down {
  0% {
    transform: translateY(-100px);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  60% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }

  75% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
  }

  90% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translateY(0);
    animation-timing-function: ease-in;
    opacity: 1;
  }
}
</style>