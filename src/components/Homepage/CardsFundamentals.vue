<template>
  <div id="CardsFundamentals">

    <b-container fluid>
      <b-row>
        <b-col sm="12" md="3">
          <div v-if="isVisible" class="bounce-in-down-enter-active" >
            <b-card title="Planeación"
              img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/iconoPlaneaci%C3%B3n.png?alt=media&token=0641c3b1-372d-4db7-a47d-fb350d9261e8"
              img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text>
                Marcamos nuestros objetivos con fechas establecidas para poder entregarte en tiempo y forma.
              </b-card-text>
            </b-card>
          </div>

        </b-col>
        <b-col sm="12" md="3">
          <div v-if="secondIsVisible" class="bounce-in-down-enter-active">
            <b-card title="Calidad"
              img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/iconoCalidad.png?alt=media&token=0051a605-8c88-497d-8218-1958efb5439c"
              img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text>
                Usamos las mejores tecnologías, haciéndolo funcional y escalable para cuando tu negocio crezca.
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col sm="12" md="3">
          <div v-if="thirdIsVisible" class="bounce-in-down-enter-active" >

            <b-card title="Orientación al cliente"
              img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/iconoCliente.png?alt=media&token=47dbac27-d50a-40a4-a2f0-4e9552da4bab"
              img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text>
                La comunicación contigo es esencial para nosotros. Estamos para servirte y apoyarte.
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col sm="12" md="3">
          <div v-if="fourthIsVisible" class="bounce-in-down-enter-active">

            <b-card title="Responsabilidad social"
              img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/iconoResponsabilidad.png?alt=media&token=bd8074c6-5d15-441e-a814-30dd6a2e7ae3"
              img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text>
                Nos comprometemos a crear tus aplicaciones web y/o móviles con responsabilidad social.
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
  name: "FundamentalCards",
  data() {
  return {
    isVisible: false,
    secondIsVisible:false,
    thirdIsVisible:false,
    fourthIsVisible:false
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

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
