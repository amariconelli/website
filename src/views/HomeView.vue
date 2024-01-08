<template>
  <BannerImageComponent />
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h3 class="mt-4">Na Amariconelli</h3>
        <p>
          Nós simplificamos seu processo de solicitação. Sem filas de espera e preços acessíveis para emitir ou renovar
          seu Visto Americano. Veja abaixo os vistos que trabalhamos!
        </p>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-4 mb-4">
        <router-link :to="{ name: 'b1&b2' }" class="card">
          <div class="image-hover">
            <img src="../assets/tourism.jpg" class="card-img-top" alt="">
            <div class="overlay">
              <h5 class="card-title font-weight-bold">B1-B2 - Turista/Negócios</h5>
              <p>
                Elaboramos sua solicitação cuidadosamente para o Visto de Turismo e Negócios, cuidando de todas as etapas do
                processo, como preenchimento de formulários, cadastro, orientações e pagamento de taxas.
              </p>
              <button class="btn btn-primary">Saiba Mais</button>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="image-hover">
            <img src="../assets/student2.jpg" class="card-img-top" alt="">
            <div class="overlay">
              <router-link :to="{ name: 'f1&m1' }" class="btn btn-primary">Saiba mais</router-link>
            </div>
          </div>
          <div class="card-body">
            <h6 class="card-title">F1/M1 - Estudante (Curso de Inglês - acadêmico ou vocacionais)</h6>
            <p>
              Auxiliamos em todo o processo do visto de estudante F1, cuidando de todas as etapas do processo, como por
              exemplo:
              preenchimento de formulários, cadastro, orientações e pagamento de taxas.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="image-hover">
            <img src="../assets/work.jpg" class="card-img-top" alt="">
            <div class="overlay">
              <router-link :to="{ name: 'work' }" class="btn btn-primary">Saiba mais</router-link>
            </div>
          </div>
          <div class="card-body">
            <h6 class="card-title">Trabalho</h6>
            <p>
              Auxiliamos no seu Visto de Trabalho nos EUA, cuidando das etapas do seu processo, desde a elegibilidade até
              a
              preparação da documentação, garantindo uma experiência fluida e ágil aumentando suas chances.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="image-hover">
            <img src="../assets/mormon.jpg" class="card-img-top" alt="">
            <div class="overlay">
              <router-link :to="{ name: 'eb4' }" class="btn btn-primary">Saiba mais</router-link>
            </div>
          </div>
          <div class="card-body">
            <h6 class="card-title">EB4 - (Religiosos)</h6>
            <p>
              Auxiliamos na sua solicitação para o Visto Religioso, avaliando sua elegibilidade e intenções para exercer
              atividades religiosas nos EUA.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="image-hover">
            <img src="../assets/petition.jpg" class="card-img-top" alt="">
            <div class="overlay">
              <router-link :to="{ name: 'petitions' }" class="btn btn-primary">Saiba mais</router-link>
            </div>
          </div>
          <div class="card-body">
            <h6 class="card-title">Petições - (Petições familiares ou mudança de status)</h6>
            <p>
              Auxiliamos no seu pedido de Petição, cuidando do seu processo, desde a elegibilidade até a preparação da
              documentação, garantindo uma experiência fluida e ágil aumentando suas chances.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="image-hover">
            <img src="../assets/antecipation.jpg" class="card-img-top" alt="">
            <div class="overlay">
              <router-link :to="{ name: 'antecipation' }" class="btn btn-primary">Saiba mais</router-link>
            </div>
          </div>
          <div class="card-body">
            <h6 class="card-title">Antecipação de Entrevista</h6>
            <p>
              Monitoramos 24 horas por dia e 7 dias por semana o calendário do consulado americano com o objetivo de
              encontrar a data mais próxima para a sua entrevista.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center">Segurança</h2>
            <hr class="my-4">
            <p>
              Temos o maior respeito com as suas informações pessoais, elas são guardadas com sigilo absoluto. Após a
              conclusão do serviço todos os seus dados são apagados do nosso banco de dados, seguindo as normas de
              segurança N.13.709/2018.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Porque nos contratar?</h2>
            <hr class="my-4">
            <p>
              Oferecemos o melhor custo-benefício, agilidade no processo e condições especiais para pagamentos de vistos
              superiores ao Turista (B1/B2). Além disso, proporcionamos assistência em cada etapa do processo de obtenção
              do visto, garantindo que você tenha todas as informações necessárias.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerImageComponent from '@/components/BannerImageComponent.vue'

export default {
  components: {
    BannerImageComponent
  }
}
</script>

<style scoped>
/* Ajustes para garantir que o texto e os títulos estejam dentro da imagem */
.card {
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  transition: transform 0.3s ease;
}

.card img {
  width: 100%;
  height: auto; /* Garante que a altura se ajuste automaticamente */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
}

.card-title,
.card-text {
  padding: 10px; /* Adapte conforme necessário */
  margin: 0; /* Remove margens padrão */
}
.card:hover {
  transform: scale(1.1);
}
.card:hover .overlay {
  opacity: 1;
}

.btn-primary {
  margin-top: 10px; /* Adapte conforme necessário */
}
</style>


