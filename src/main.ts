import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap CSS e JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Estilos customizados
import './assets/styles.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
