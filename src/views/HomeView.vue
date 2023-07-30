<template>
    <div id="HomeComponent">
        <b-container fluid>
            <div class="img-first-cover">
                <NavBar />
                <b-row>
                    <b-col>
                        <div>
                            <h1 class="mmt-4 ml-2">Tu idea y negocio plasmado al mundo de manera única.</h1>
                            <h2 class="ml-2">Somos los indicados para llevar tu negocio o idea a otro nivel</h2>
                            <button type="button" class="btn btn-outline-light mt-4 py-2 px-3 btnCorners ml-2 btn-info">
                                <!-- <span style="font-size: 22px">Quiero información</span> -->
                                <a style="font-size: 22px;text-decoration:none;color:white" href="https://api.whatsapp.com/send?phone=4423336440&text=Hola, quisiera información"><font-awesome-icon icon="fa-brands fa-whatsapp" /> Quiero información</a>
                            </button>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
        <NuestrosServicios style="margin-top: 70px;"/>
        <AnimatedBanner />
        <FundamentalCards style="margin-bottom: 100px;"/>
        <NuestrosClientes style="margin-bottom: 70px;"/>
        <img
          class="d-inline-block mt-4"
          style="width: 100%;height:auto;margin-bottom:100px;"
          alt="Equipo chill byte"
          src="../assets/img/homepage/portadachillbytehp2.png"
        />
        <EquipoChillByte />
        <ContactForm/>
        <FooterChillByte/>
    </div>
</template>
<script>
import NavBar from "../components/Template/NavBar.vue";
import AnimatedBanner from "../components/Homepage/AnimatedBanner.vue";
import FundamentalCards from "../components/Homepage/CardsFundamentals";
import NuestrosClientes from '../components/Homepage/NuestrosClientes.vue';
import EquipoChillByte from '../components/Homepage/EquipoChillByte.vue';
import Footer from '../components/Template/Footer.vue'
import ContactForm from "@/components/Template/ContactForm.vue";
import Servicios from '@/components/Homepage/Servicios.vue';
export default {
    name: "HomeView",
    components: {
        NavBar: NavBar,
        AnimatedBanner: AnimatedBanner,
        FundamentalCards: FundamentalCards,
        NuestrosClientes: NuestrosClientes,
        EquipoChillByte: EquipoChillByte,
        FooterChillByte:Footer,
        ContactForm:ContactForm,
        NuestrosServicios:Servicios
    },
};
</script>