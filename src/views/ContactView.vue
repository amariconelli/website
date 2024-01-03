<template>
  <div class="container" style="padding-top: 80px;text-align: center;">
    <h3>Fale Conosco</h3>
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <form ref="form" @submit.prevent="sendEmail" class="form-control mb-2">
          <div class="mb-3">
            <label for="name" class="form-label">Nome*</label>
            <input type="text" class="form-control background-input" id="name" placeholder="Seu Nome"
              v-model="formData.name" required name="user_name">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email*</label>
            <input type="email" class="form-control background-input" id="email" placeholder="Email"
              v-model="formData.email" required name="user_email">
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Telefone*</label>
            <input type="tel" class="form-control background-input" id="phone" placeholder="Telefone"
              v-model="formData.phone" required name="user_phone" v-mask="'(##) #####-####'">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Sua Mensagem</label>
            <textarea class="form-control background-input" id="mensagem" rows="5" placeholder="Mensagem"
              v-model="formData.message" name="user_message"></textarea>
          </div>
          <div class="mb-3">
            <div id="g-recaptcha"></div>
          </div>
          <div style="display: flex; align-items: center;">
            <button type="submit" class="btn btn-success" :disabled="sendFormData.btnLoading"
              style="display: flex; align-items: center; justify-content: center;margin-right: 5px;">
              <span style="display: flex; align-items: center;">
                Enviar
              </span>
            </button>
            <dotlottie-player v-show="sendFormData.btnLoading"
              src="https://lottie.host/5494671a-e571-494c-a66b-c4cb384ccd4e/h09Ni1bJma.json" background="transparent"
              speed="1" style="width: 25px; height: 20px;" loop autoplay></dotlottie-player>
            <span v-html="sendFormData.message"></span>
          </div>
        </form>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg-6">
          <h4>Redes Sociais</h4>
          <div>
            <a href="https://www.facebook.com/seu-facebook" target="_blank" style="margin-right: 25px;">
              <i class="fab fa-facebook-square" style="font-size: 30px;"></i>
            </a>
            <a href="https://www.instagram.com/seu-instagram" target="_blank" style="margin-right: 25px;">
              <i class="fab fa-instagram instagram-icon" style="font-size: 30px;"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=seu-numero" target="_blank">
              <i class="fab fa-whatsapp" style="font-size: 30px;color: #1CBD3C;"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-5 centralizado">
        <b>Esclarecimento legal:</b> Amariconelli é uma empresa que fornece suporte a procedimentos de viagem. O preço de
        nossos
        serviços inclui assistência profissional para facilitar o processo de obtenção da autorização para entrada nos
        Estados Unidos. Este site e seus serviços não são afiliados aos EUA. A decisão final fica exclusivamente a cargo
        das autoridades governamentais.
      </div>
    </div>
  </div>
</template>

<style scoped>
.instagram-icon {
  font-size: 30px;
  background: linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.centralizado {
  text-align: justify;
  margin: 0 auto;
  max-width: 800px;
}

.background-input {
  background-color: #f2f2f2;
}
</style>

<script>

import emailjs from '@emailjs/browser';
import { mask } from 'vue-the-mask'

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      sendFormData: {
        btnLoading: false,
        isRecaptchaRendered: false,
        message: '',
      },
    };
  },
  computed: {
    isValidPhone() {
      let phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
      return phoneRegex.test(this.formData.phone);
    },
  },
  directives: { mask },
  methods: {
    sendEmail() {
      this.sendFormData.btnLoading = true;
      emailjs.sendForm('service_99qub15', 'template_l3cj23p', this.$refs.form, 'xAy7NnpOGrrgTtrbx')
        .then(() => {
          this.sendFormData.message = "<span style='color: green'>Mensagem enviada!</span>";
          setTimeout(() => {
            this.sendFormData.message = "";
          }, 4000);
        }, () => {
          this.sendFormData.message = "<span style='color: red'>Erro ao enviar!</span>";
          setTimeout(() => {
            this.sendFormData.message = "";
          }, 4000);
        })
        .finally(() => {
          this.sendFormData.btnLoading = false;
        })
    },
    loadRecaptcha() {
      if (typeof window.grecaptcha.render !== 'undefined' && !this.sendFormData.isRecaptchaRendered) {
        window.grecaptcha.render('g-recaptcha', {
          sitekey: '6Lfsf0IpAAAAAChw_n91KgE33ng7tpUWAV3JQWfK'
        });
        this.sendFormData.isRecaptchaRendered = true;
      } else {
        setTimeout(this.loadRecaptcha, 1000);
      }
    }
  },
  mounted() {
    this.loadRecaptcha();
  }
}
</script>