<template>
  <div class="container" style="padding-top: 80px;">
    <h3 class="text-center">B1/B2 - Turista/Negócios</h3>
    <div class="d-flex justify-content-center">
      <div style="max-width: 800px; text-align: justify;">
        <p style="line-height: 2;text-align: justify;">
          O visto para os EUA de turismo e negócios é destinado às pessoas que queiram ir aos Estados Unidos para passear,
          turismo, visita a parentes ou fazer negócios em solo americano. Quanto mais vínculos você tiver no Brasil,
          maiores são as chances de conseguir tirar o seu tão sonhado visto para os Estados Unidos. O consulado americano
          exige a presença da própria pessoa na entrevista. Damos toda assessoria referente aos documentos que deverá
          enviar na hora da entrevista bem como no preenchimento do formulário que tem cerca de 233 questões. Efetuamos
          também o agendamento para a data mais próxima disponível de acordo com a sua disponibilidade.
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