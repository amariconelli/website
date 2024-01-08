<template>
    <hr class="mb-0 mt-4 me-0 ms-0">
    <div class="container-fluid" style="background-color: #F8F9FA;">
        <footer class="text-center">
            <section class="row justify-content-around pt-4 pb-4 pe-0 ps-0" style="padding: 0;">
                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Fale Conosco</h6>
                    <p class="mb-2">
                        <a href="mailto:contato@amariconelli.com" class="link-hover">
                            <i class="fas fa-envelope me-1" style="color: #3b5998;"></i> contato@amariconelli.com
                        </a>
                    </p>
                    <p class="mb-2">
                        <a href="tel:+5511976917787" class="link-hover">
                            <i class="fas fa-phone me-1" style="color: #3b5998;"></i> (11) 97691-7787
                        </a>
                    </p>
                    <p>
                        <a href="https://wa.me/message/L57OUXXHQ6VUB1" class="link-hover" target="_blank">
                            <i class="fab fa-whatsapp me-1" style="font-size: 20px; color: forestgreen;"></i> (11)
                            97691-7787
                        </a>
                    </p>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Atendimento</h6>
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <img src="../assets/earth.svg" alt="earthIcon" style="width: 50px; height: 50px;" class="mb-2">
                            <p class="fs-6">Nacional e Internacional</p>
                        </div>
                        <div class="col-md-6 text-center">
                            <img src="../assets/lock.svg" alt="Ícone de Cadeado" style="width: 50px; height: 50px;"
                                class="mb-2">
                            <p class="fs-6">Segurança Máxima</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Redes Sociais, Siga-nos</h6>
                    <div class="d-flex justify-content-center">
                        <a href="https://www.facebook.com/amariconellivisto" target="_blank" class="me-5">
                            <i class="fab fa-facebook-square fs-2 link-hover"></i>
                        </a>
                        <a href="https://www.instagram.com/amariconelli_/" target="_blank" class="me-5">
                            <i class="fab fa-instagram fs-2 instagram-icon"></i>
                        </a>
                        <a href="https://wa.me/message/L57OUXXHQ6VUB1" target="_blank">
                            <i class="fab fa-whatsapp fs-2" style="color: #1CBD3C;"></i>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Esclarecimento Legal</h6>
                    <div style="text-align: justify;font-size: 14px;">
                        Amariconelli é uma empresa que fornece suporte a procedimentos de viagem. O
                        preço de nossos serviços inclui assistência profissional para facilitar o processo de obtenção da
                        autorização para entrada nos Estados Unidos. Este site e seus serviços não são afiliados aos EUA. A
                        decisão final fica exclusivamente a cargo das autoridades governamentais.
                    </div>
                </div>
            </section>
            <div class="row justify-content-center">
                <div class="col-12">
                    <hr style="margin: 0;">
                    <p class="text-center p-3 mb-0">
                        © Amariconelli. Todos os direitos reservados
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.instagram-icon {
    background: linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.link-hover {
    color: #3b5998;
    /* Cor do texto inicial */
    transition: color 0.3s;
    /* Transição suave ao passar o mouse */
    font-weight: bold;
    /* Fonte em negrito */
}

.link-hover:hover {
    color: #013878;
    /* Nova cor ao passar o mouse */
    cursor: pointer;
    /* Mostrar cursor ao passar o mouse */
}
</style>

<script>
export default {
    data() {
        return {}
    },
    computed: {},
    watch: {},
    methods: {},
    mounted() { }
}
</script>