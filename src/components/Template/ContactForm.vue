<template>
    <div id="ContactForm" class="mt-4" style="margin-bottom: 100px;">
        <b-container>
            <b-row >
                <b-col class="p-3" sm="12" md="6">
                    <b-form ref="form" @submit="sendEmail">
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                                    <b-form-input
                                      id="input-1"
                                      name="name"
                                      v-model="name"
                                      required
                                    ></b-form-input>
                                  </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-2" label="Apellido:" label-for="input-2">
                                    <b-form-input
                                      id="input-2"
                                      name="lastname"
                                      v-model="lastname"
                                      required
                                    ></b-form-input>
                                  </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-3" label="Correo electrónico:" label-for="input-3"
                                    description="Nunca compartiremos tus datos con alguien más">
                                    <b-form-input id="input-3" name="email"  v-model="email" type="email" placeholder="ejemplo@gmail.com"
                                        required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-2" label="Asunto:" label-for="input-2">
                                    <b-form-input
                                      id="input-2"
                                      name="subject"
                                      v-model="subject"
                                      required
                                    ></b-form-input>
                                  </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-2" label="Mensaje:" label-for="input-1"
                                    >
                                    <b-form-textarea id="textarea" name="textAreaInput" v-model="textAreaInput" rows="3"
                                        max-rows="6"></b-form-textarea>
        
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-button class="mt-3 btn-submit" type="submit" :disabled="disable_btn">Enviar</b-button>
                    </b-form>
                    <small :class="isSuccessful==true? 'text-green':'text-red'" v-show="show_msg">{{result_msg}}</small>
                </b-col>
                <b-col sm="12" md="6">
                    <h1 class="text-blue" style="text-align: right;">Mantente en contacto con nuestro equipo.</h1>
                </b-col>
            </b-row>
            
        </b-container>
    </div>
</template>
<script>
import emailjs from '@emailjs/browser';

export default {
    name: 'ContactForm',
    data() {
        return {
            email: null,
            textAreaInput:null,
            name:null,
            lastname:null,
            subject:null,
            result_msg:'mensaje',
            disable_btn:false,
            show_msg:false,
            isSuccessful:false
        }
    },
    methods:{
        sendEmail(e){
            e.preventDefault();
            
            emailjs.sendForm('service_dmrrpaf', 'template_bffaznl', this.$refs.form, 'ASBixielQUS5RZAzs')
        .then((result) => {
            this.result_msg='¡Mensaje enviado con éxito!';
            this.show_msg=true;
            this.disable_btn=true;
            this.isSuccessful=true;
            console.log('SUCCESS!', result.text);
        }, (error) => {
            this.result_msg='Error al enviar mensaje, inténtalo más tarde.'
            this.show_msg=true;
            this.disable_btn=false;
            this.isSuccessful=false;
            console.log('FAILED...', error.text);
        });
        }
    }
}
</script>