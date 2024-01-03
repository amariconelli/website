<template>
    <div class="container" style="padding-top: 80px;">
        <h3 class="text-center">Trabalho</h3>
        <div class="d-flex justify-content-center">
            <div style="max-width: 800px; text-align: justify;">
                <p style="line-height: 2;text-align: justify;">
                    O visto Trabalho para os EUA permite a profissionais exercerem suas atividades em solo americano,
                    integrando-se ao vibrante mercado de trabalho do país
                </p>
            </div>
        </div>
        <div class="buttons-container mt-4">
            <div class="buttons-container">
                <a class="btn btn-success" href="https://wa.me/message/L57OUXXHQ6VUB1" target="_blank">
                    <i class="fab fa-whatsapp" style="font-size: 18px;"></i> Fale Conosco
                </a>
                <router-link to="/contact" class="btn btn-primary">
                    <i class="far fa-envelope" style="font-size: 18px;"></i> Envie um Email
                </router-link>
            </div>
        </div>
        <div class="row justify-content-center mt-5 mb-3">
            <div class="col-md-4">
                <div class="card text-center h-100 d-flex flex-column justify-content-between">
                    <div class="card-body">
                        <div class="mb-3">
                            <i class="fas fa-cogs icon" style="font-size: 2em;"></i>
                        </div>
                        <div class="mb-4">
                            <h5 class="card-title fw-bold">Personalização Sob Medida</h5>
                            <p class="card-text fs-6">Estratégias adaptadas de acordo com suas necessidades específicas</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card text-center h-100 d-flex flex-column justify-content-between">
                    <div class="card-body">
                        <div class="mb-3">
                            <i class="fas fa-check-circle icon" style="font-size: 2em;"></i>
                        </div>
                        <div class="mb-4">
                            <h5 class="card-title fw-bold">Segurança na Documentação</h5>
                            <p class="card-text fs-6">Deixe toda a burocracia relacionada à documentação conosco.</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card text-center h-100 d-flex flex-column justify-content-between">
                    <div class="card-body">
                        <div class="mb-3">
                            <i class="fas fa-bullseye icon" style="font-size: 2em;"></i>
                        </div>
                        <div class="mb-4">
                            <h5 class="card-title fw-bold">Eficácia</h5>
                            <p class="card-text fs-6">
                                Simplifique o processo de visto com orientações de profissionais qualificados
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
}
</script>
  
<style scoped>
.buttons-container {
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>