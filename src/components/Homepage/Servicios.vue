<template>
    <div id="ServiciosComp">
        <h1 class="pr-2 thin h1-size" style="text-align: right;">Nuestros <span class="text-purple">Servicios</span>.</h1>
      <div class="w-100 m-0 d-flex justify-content-center mx-0" style="margin-right:0px !important;">
        <b-row class="w-100 d-flex justify-content-center">
          <b-col sm="12" md="3" class="d-flex justify-content-center">
            <div v-if="isVisible" class="bounce-in-down-enter-active" >
              <b-card title="Páginas Web"
                img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/web2.png?alt=media&token=f0465a34-2218-4727-8b50-01bffbfbcad2"
                img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2 no-border">
                
                <b-card-text>
                  Creamos la página web de tu negocio para que el mundo te conozca.
                </b-card-text>
              </b-card>
            </div>
  
          </b-col>
          <b-col sm="12" md="3" class="d-flex justify-content-center">
            <div v-if="secondIsVisible" class="bounce-in-down-enter-active">
              <b-card title="Aplicaciones móviles"
                img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/movil2.png?alt=media&token=c4e67700-dc79-4f66-b48e-316e666da6e8"
                img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2 no-border">
                <b-card-text>
                  Creamos aplicaciones móviles para android a la medida.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
          <b-col sm="12" md="3" class="d-flex justify-content-center">
            <div v-if="thirdIsVisible" class="bounce-in-down-enter-active" >
  
              <b-card title="Fotografía y video"
                img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/fotografia.png?alt=media&token=f20ae268-44d3-43f6-86e7-e75768d364e2"
                img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2 no-border">
                <b-card-text>
                  Una buena imagen es de alto valor para tu negocio.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
          <b-col sm="12" md="3" class="d-flex justify-content-center">
            <div v-if="fourthIsVisible" class="bounce-in-down-enter-active">
  
              <b-card title="Aprendizaje para todos"
                img-src="https://firebasestorage.googleapis.com/v0/b/bloona-55051.appspot.com/o/chillbyteacademy.png?alt=media&token=e7a6cd88-519f-4557-88b0-d216103d364d"
                img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2 no-border">
                <b-card-text>
                  Cursos desde computación básica hasta programación avanzada.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServiciosComp",
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
  