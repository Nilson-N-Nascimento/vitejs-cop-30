import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EventosView from '../views/EventosView.vue';
import SobreView from '../views/SobreView.vue';
import ContatoView from '../views/ContatoView.vue';
import EventoDetalhes from '../views/EventoDetalhes.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: EventosView
    },
    {
      path: '/eventos/:id',
      name: 'evento-detalhes',
      component: EventoDetalhes,
      props: true
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContatoView
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
