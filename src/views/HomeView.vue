<template>
  <BannerImageComponent />
  <div class="container" style="text-align: center;">
    <div class="row">
      <div class="col">
        <h3 class="text-center mt-2">Na Amariconelli</h3>
        <p class="text-justify">
          nós simplificamos seu processo de solicitação. Sem filas de espera e preços que cabem no seu bolso para emitir
          ou renovar seu Visto Americano. Veja abaixo os vistos que trabalhamos!
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <!-- card turista/negocios -->
        <div class="col-md-4 mb-4">
          <div class="card" style="width: auto; height: 100%;">
            <img src="../assets/tourism.jpg" class="card-img-top" alt="">
            <div class="card-body d-flex flex-column">
              <h6 class="card-title">B1-B2 - Turista/Negócios</h6>
              <p class="card-text" style="text-align: center; font-size: 14px;">
                Elaboramos sua solicitação cuidadosamente para o Visto de Turismo e Negócios cuidando de todas as etapas
                do
                processo, como por exemplo: preenchimento de formulários, cadastro, orientações e pagamento de taxas.
              </p>
              <router-link :to="{ name: 'b1&b2' }" class="mt-auto btn btn-primary align-self-end">Saiba mais</router-link>
            </div>
          </div>
        </div>

        <!-- Card 2 - Estudante -->
        <div class="col-md-4 mb-4">
          <div class="card" style="width: auto; height: 100%;">
            <img src="../assets/student.jpg" class="card-img-top" alt="">
            <div class="card-body d-flex flex-column">
              <h6 class="card-title">F1/M1 - Estudante (Curso de Inglês - acadêmico ou vocacionais)</h6>
              <p class="card-text" style="text-align: center; font-size: 14px;">
                Auxiliamos em todo o processo do visto de estudante F1, cuidando de todas as etapas do processo, como por
                exemplo: preenchimento de formulários, cadastro, orientações e pagamento de taxas.
              </p>
              <router-link :to="{ name: 'f1&m1' }" class="mt-auto btn btn-primary align-self-end">Saiba mais</router-link>
            </div>
          </div>
        </div>
        <!-- Card 2 - Trabalho -->
        <div class="col-md-4 mb-4">
          <div class="card" style="width: auto; height: 100%;">
            <img src="../assets/work.jpg" class="card-img-top" alt="">
            <div class="card-body d-flex flex-column">
              <h6 class="card-title">Trabalho</h6>
              <p class="card-text" style="text-align: center; font-size: 14px;">
                Auxiliamos no seu Visto de Trabalho nos EUA, cuidando das etapas do seu processo, desde a elegibilidade
                até a preparação da documentação, garantindo uma experiência fluida e ágil aumentando suas chances.
              </p>
              <router-link :to="{ name: 'work' }" class="mt-auto btn btn-primary align-self-end">Saiba mais</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        
        <div class="col-md-4 mb-4">
          <div class="card" style="width: auto; height: 100%;">
            <img src="../assets/mormon.jpg" class="card-img-top" alt="">
            <div class="card-body d-flex flex-column">
              <h6 class="card-title">EB4 - (Religiosos)</h6>
              <p class="card-text" style="text-align: center; font-size: 14px;">
                Auxiliamos na sua solicitação para o Visto Religioso, avaliando sua elegibilidade e intenções para exercer
                atividades religiosas nos EUA.
              </p>
              <router-link :to="{ name: 'eb4' }" class="mt-auto btn btn-primary align-self-end">Saiba mais</router-link>
            </div>
          </div>
        </div>
       
        <div class="col-md-4 mb-4">
          <div class="card" style="width: auto; height: 100%;">
            <img src="../assets/petition.jpg" class="card-img-top" alt="">
            <div class="card-body d-flex flex-column">
              <h6 class="card-title">Petições - (Petições familiares ou mudança de status)</h6>
              <p class="card-text" style="text-align: center; font-size: 14px;">
                Auxiliamos no seu pedido de Petição, cuidando do seu processo, desde a elegibilidade até a preparação da
                documentação, garantindo uma experiência fluida e ágil aumentando suas chances.
              </p>
              <router-link :to="{ name: 'petitions' }" class="mt-auto btn btn-primary align-self-end">Saiba mais</router-link>
            </div>
          </div>
        </div>
        
        <div class="col-md-4 mb-4">
          <div class="card" style="width: auto; height: 100%;">
            <img src="../assets/antecipation.jpg" class="card-img-top" alt="">
            <div class="card-body d-flex flex-column">
              <h6 class="card-title">Antecipação de Entrevista</h6>
              <p class="card-text" style="text-align: center; font-size: 14px;">
                Monitoramos 24 horas por dia e 7 dias por semana o calendário do consulado americano com o objetivo de
                encontrar a data mais próxima para a sua entrevista.
              </p>
              <router-link :to="{ name: 'antecipation' }" class="mt-auto btn btn-primary align-self-end">Saiba mais</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6 mb-3 d-flex align-items-stretch">
        <div class="card h-100">
          <div class="card-body d-flex flex-column justify-content-center">
            <div>
              <h2 class="card-title text-center">Segurança</h2>
              <hr> <!-- Linha horizontal abaixo do título -->
            </div>
            <div>
              <p class="card-text text-justify">
                Temos o maior respeito com as suas informações pessoais, elas são guardadas com sigilo absoluto. Após a
                conclusão do serviço todos os seus dados são apagados do nosso banco de dados, seguindo as normas de
                segurança N.13.709/2018.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3 d-flex align-items-stretch">
        <div class="card h-100">
          <div class="card-body d-flex flex-column justify-content-center">
            <div>
              <h2 class="card-title text-center mb-0">Porque nos contratar?</h2>
              <hr> <!-- Linha horizontal abaixo do título -->
            </div>
            <div>
              <p class="card-text text-justify">
                O melhor Custo benefício, agilidade no processo e condições especiais para pagamentos de vistos
                superiores
                ao Turista (B1/B2). Além disso, proporcionamos assistência em cada etapa do processo de obtenção do
                visto,
                garantindo que você tenha todas as informações necessárias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BannerImageComponent from '@/components/BannerImageComponent.vue'

export default {  
  data() {
    return {
      //routes: this.$router.getRoutes(),     
    }
  },
  components: {
    BannerImageComponent
  }
}
</script>
