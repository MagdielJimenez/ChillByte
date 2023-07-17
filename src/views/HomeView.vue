<template>
    <div id="HomeComponent">
        <b-container-fluid>
            <div class="img-first-cover">
                <NavBar />
                <b-row>
                    <b-col>
                        <div>
                            <h1 class="mmt-4 ml-2">Tu idea y negocio plasmado al mundo de manera única.</h1>
                            <h2 class="ml-2">Somos los indicados para llevar tu negocio o idea a otro nivel</h2>
                            <button type="button" class="btn btn-outline-light mt-4 py-2 px-3 btnCorners ml-2">
                                <span style="font-size: 22px">Quiero información</span>
                            </button>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container-fluid>
        <AnimatedBanner />
        <FundamentalCards />
        <NuestrosClientes />
        <EquipoChillByte />
    </div>
</template>
<script>
import NavBar from "../components/Template/NavBar.vue";
import AnimatedBanner from "../components/Homepage/AnimatedBanner.vue";
import FundamentalCards from "../components/Homepage/CardsFundamentals";
import NuestrosClientes from '../components/Homepage/NuestrosClientes.vue';
import EquipoChillByte from '../components/Homepage/EquipoChillByte.vue';
export default {
    name: "HomeView",
    components: {
        NavBar: NavBar,
        AnimatedBanner: AnimatedBanner,
        FundamentalCards: FundamentalCards,
        NuestrosClientes: NuestrosClientes,
        EquipoChillByte: EquipoChillByte
    },
};
</script>