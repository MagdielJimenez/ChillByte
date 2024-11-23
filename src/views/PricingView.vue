<template>
    <div id="HomeComponent">
        <b-container fluid>
            <NavBar />
            <h1 class="align-text-center thin">Precios a tu manera</h1>
            <h3 class="align-text-center thin h3-text">Descubre lo fácil que es personalizar tu cotización. Selecciona los servicios que necesitas, ajusta las opciones y obtén tu precio al momento. ¡Empieza ahora y cotiza sin complicaciones!</h3>
            <b-row class="d-flex justify-content-center">
                <b-col md="9">
                    <b-table dark :items="services" :fields="fields" class="text-white" responsive>
                        <template #cell(serviceCategory)="data">
                            <template v-if="isFirstInCategory(data.index)">
                                <b-row class="no-border">
                                    <b-col class="no-border">
                                        <strong>{{ data.item.serviceCategory }}</strong>
                                    </b-col>
                                </b-row>
                            </template>
                        </template>
                        <template #cell(volume)="data">
                            <b-form-input id="range-1" v-model="data.item.volume" type="range" min="0" :max="data.item.maximum" :step="1"></b-form-input>
                            <span style="margin-left:20px;">{{ data.item.volume }}</span>
                        </template>
                        <template #cell(total)="data">
                            <span>$ {{ formatNumber(calculateTotal(data.item)) }}</span>
                        </template>
                        
                    </b-table>
                    <b-row class="d-flex justify-content-end">
                        <b-col md="3" sm="12" xs="12">
                            <b-card bg-variant="primary" text-variant="white" class="text-white">
                                <b-card-text>
                                    <h4 class="thin align-text-right">Total: $ {{ formatNumber(grandTotal) }} MXN</h4>
                                </b-card-text>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
        <ContactForm />
        <FooterChillByte />
    </div>
</template>

<script>
import NavBar from "../components/Template/NavBar.vue";
import Footer from '../components/Template/Footer.vue';
import ContactForm from "@/components/Template/ContactForm.vue";

export default {
    name: "PricingView",
    components: {
        NavBar,
        FooterChillByte: Footer,
        ContactForm,
    },
    data() {
        return {
            fields: [
                { key: 'serviceCategory', label: 'Tipo',thStyle: { width: '150px' }, tdStyle: { width: '150px' } },
                { key: 'category', label: 'Servicio'},
                { key: 'volume', label: 'Cantidad',thStyle: { width: '200px' }, tdStyle: { width: '200px' } },
                // { key: 'total', label: 'Total' ,thStyle: 'w-25', tdStyle:'w-25'}
                { key: 'total', label: 'Total' ,thStyle: { width: '120px' }, tdStyle: { width: '120px' }}
            ],
            services: [
                { serviceCategory: 'Oracle Netsuite', category: 'Bolsa de Horas de Desarrollo', volume: 1, description: '$999 p/hora', maximum: 40 },
                { serviceCategory: 'Oracle Netsuite', category: 'Bolsa de Horas de Consultoria', volume: 1, description: '$999 p/hora', maximum: 40 },
                { serviceCategory: 'Oracle Netsuite', category: 'Integración API (desarrollo hasta 30 horas, si excede hay que consultar bolsa de horas)', volume: 1, description: '$25000 p/hora', maximum: 10 },
                { serviceCategory: 'Desarrollo Web', category: 'Página Web, se cobra por página informativa (no incluye dominio ni hosting)', volume: 1, description: '$900 p/hora', maximum: 10 },
                { serviceCategory: 'Desarrollo Web', category: 'Carrito de Compras (mínimo 20 artículos)', volume: 20, description: '$750 p/hora', maximum: 100 },
                { serviceCategory: 'Desarrollo Web', category: 'Bolsa de Horas de Desarrollo Web', volume: 1, description: '$850 p/hora', maximum: 40 },
            ]
        };
    },
    computed: {
        grandTotal() {
            return this.services.reduce((sum, service) => sum + this.calculateTotal(service), 0);
        }
    },
    methods: {
        calculateTotal(service) {
            if (service.description === 'Free') {
                return 0;
            }
            const pricePerUnit = parseFloat(service.description.replace('$', '').replace(' p/hora', '').replace(' per unit', ''));
            return service.volume * pricePerUnit;
        },
        formatNumber(value) {
            value = parseFloat(value.toFixed(2));
            return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        },
        isFirstInCategory(index) {
            if (index === 0) return true;
            return this.services[index].serviceCategory !== this.services[index - 1].serviceCategory;
        },
        isLastInCategory(index) {
            if (index === this.services.length - 1) return true;
            return this.services[index].serviceCategory !== this.services[index + 1].serviceCategory;
        }
    }
};
</script>

<style scoped>
.align-text-center {
    text-align: center;
}
.align-text-right {
    text-align: right;
}   

.thin {
    font-weight: 300;
}

.no-border {
    border-bottom: none !important;
}
</style>