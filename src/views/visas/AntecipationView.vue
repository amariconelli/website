<template>
    <div class="container" style="padding-top: 80px;">
        <h3 class="text-center">Antecipação de Entrevista</h3>
        <div class="d-flex justify-content-center">
            <div style="max-width: 800px; text-align: justify;">
                <p style="line-height: 2;text-align: justify;">
                    Brasileiros que pretendem ir aos Estados Unidos necessitam de visto. Uma etapa para obtenção do visto é
                    o agendamento das entrevistas.
                    Em geral é necessário o comparecimento no Centro de Solicitação de Visto (CASV) para coleta de dados
                    biométricos e no Consulado Americano para entrevista.
                    Atualmente há uma grande espera para conseguir agendar essas entrevistas. Com isso, disponibilizamos uma
                    equipe capacitada para buscar uma vaga dentro das necessidades de nossos clientes.
                    Monitoramos praticamente 24 horas por dia, 7 dias por semana sem interrupções o calendário com o
                    objetivo de viabilizar a sua viagem.
                    Lembramos que o monitoramento é feito dentro dos critérios estabelecidos pelo consulado americano.
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
                            <i class="fas fa-sync-alt icon" style="font-size: 2em;"></i>
                        </div>
                        <div class="mb-4">
                            <h5 class="card-title fw-bold">Atualização Constante</h5>
                            <p class="card-text fs-6">Mantenha-se atualizado com as últimas regulamentações e evite
                                imprevistos</p>
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