import { createApp } from 'vue';
import App from './App.vue';
import mainRouter from './router';

createApp(App)
  .use(mainRouter)
  .mount('#app');