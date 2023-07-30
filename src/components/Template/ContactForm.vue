<template>
    <div id="ContactForm" class="mb-4 mt-4" >
        <b-container>
            <b-row >
                <b-col class="p-3">
                    <b-form>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                                    <b-form-input
                                      id="input-1"
                                      v-model="name"
                                      required
                                    ></b-form-input>
                                  </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-2" label="Apellido:" label-for="input-2">
                                    <b-form-input
                                      id="input-2"
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
                                    <b-form-input id="input-3" v-model="email" type="email" placeholder="ejemplo@gmail.com"
                                        required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-2" label="Asunto:" label-for="input-2">
                                    <b-form-input
                                      id="input-2"
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
                                    <b-form-textarea id="textarea" v-model="textAreaInput" rows="3"
                                        max-rows="6"></b-form-textarea>
        
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-button class="mt-3 btn-submit" type="submit" >Enviar</b-button>
                    </b-form>
                </b-col>
                <b-col>
                    <h1 class="text-blue" style="text-align: right;">Mantente en contacto con nuestro equipo.</h1>
                </b-col>
            </b-row>
            
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            email: null,
            textAreaInput:null,
            name:null,
            lastname:null,
            subject:null
        }
    }
}
</script>