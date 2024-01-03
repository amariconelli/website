<template>
    <div class="container" style="padding-top: 80px;">
        <h3 class="text-center">Petições - (Petições familiares ou mudança de status)</h3>
        <div class="d-flex justify-content-center">
            <div style="max-width: 800px; text-align: justify;">
                <p style="line-height: 2;text-align: justify;">
                    Se você deseja se tornar um residente permanente baseado no fato de que você tem um parente que é
                    cidadão americano ou residente permanente, você deve passar por um processo de várias etapa.
                    e você já está nos Estados Unidos, você pode aplicar para mudar seu status para residente permanente
                    depois que um número de visto se torna disponível para você. Esta é a maneira de você aplicar para
                    garantir seu número de visto de imigrante. Se você estiver fora dos Estados Unidos quando um número de
                    visto de imigrante está disponível para você, se torna necessário que você compareça ao consulado
                    americano mais próximo da área em que reside para completar o seu requerimento. Esta é a outra maneira
                    de garantir seu número de visto de imigrante.
                </p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="text-center">
                    <h3>Tipos de petições mais comuns:</h3>
                    <ul style="line-height: 1.5; text-align: center;list-style-position: inside; margin: 0;">
                        <li>Petição para noivo(a) estrangeiro(a)</li>
                        <li>Petição para parente estrangeiro</li>
                        <li>Pedido de Documento de Viagem</li>
                        <li>Petição de Imigrante para Trabalhadores Estrangeiros</li>
                        <li>Requerimento para Registro de Residência Permanente ou Ajuste de Status</li>
                        <li>Pedido de Extensão/Mudança de Status de Não Imigrante</li>
                        <li>Pedido de Asilo e Retenção de Remoção</li>
                        <li>Pedido de Autorização de Trabalho</li>
                        <li>Pedido de Naturalização</li>
                    </ul>
                </div>
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
            <div class="col-md-4 mt-2">
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

            <div class="col-md-4 mt-2">
                <div class="card text-center h-100 d-flex flex-column justify-content-between">
                    <div class="card-body">
                        <div class="mb-3">
                            <i class="fas fa-chart-line icon" style="font-size: 2em;"></i>
                        </div>
                        <div class="mb-4">
                            <h5 class="card-title fw-bold">Proficiência</h5>
                            <p class="card-text fs-6">Direcionamento especializado para otimizar suas oportunidades de êxito
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mt-2">
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