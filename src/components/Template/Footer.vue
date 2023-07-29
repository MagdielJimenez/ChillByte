<template>
    <div id="Footer">
        <b-container class="mt-4">
            <b-row>
                <b-col >
                    <img class="d-inline-block align-top " height="50px" alt="Chill Byte logo"
                        src="../../assets/chillbytelogohorizontal.png" />
                        <div>
                            <p>
                                Somos la empresa que necesitas para llevar tus proyectos y negocios a otro nivel.
                            </p>
                        </div>
                </b-col>
                <b-col class="mt-1">
                    <p style="text-align: center;">¡Hablemos de tu proyecto!</p>
                    <p style="text-align: center;" class="text-purple">
                        <font-awesome-icon icon="fa-brands fa-whatsapp" /> 442 333 6440
                    </p>
                    <p style="text-align: center;" class="text-blue">
                        <font-awesome-icon icon="fa-regular fa-envelope" /> info@chillbytesolutions.com
                    </p>
                </b-col>
                <b-col class="d-flex justify-content-center">
                    <a class="text-purple" href="https://www.instagram.com/chill.byte/" style="text-decoration: none;">
                        <font-awesome-icon icon="fa-brands fa-instagram" /> chill.byte
                    </a>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default
    {
        name: 'FooterComponent'
    }
</script>