<template>
  <NavbarComponent />
  <main class="main" id="app">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <FooterComponent />
</template>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   min-height: 100vh;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
  name: 'App',
  components: {
    FooterComponent,
    NavbarComponent
  },
  created() {
    // Ao mudar de rota, a página será movida para o topo se estiver rolando para baixo
    this.$router.afterEach(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    })
  },
  mounted() { }
}
</script>