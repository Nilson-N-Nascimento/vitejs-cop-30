<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { eventosService } from '../services/eventos';
import type { Evento } from '../types';
import HeroBanner from '../components/HeroBanner.vue';
import EventoCard from '../components/EventoCard.vue';

const eventos = ref<Evento[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    eventos.value = await eventosService.getEventos();
  } finally {
    loading.value = false;
  }
});

// Pega apenas os 3 primeiros eventos para a home
const eventosDestaque = ref<Evento[]>([]);
onMounted(async () => {
  const todosEventos = await eventosService.getEventos();
  eventosDestaque.value = todosEventos.slice(0, 3);
});
</script>

<template>
  <main>
    <!-- Hero Banner -->
    <HeroBanner 
      titulo="COP-30 Belém 2025"
      subtitulo="30ª Conferência das Partes sobre Mudanças Climáticas"
    >
      <div class="mt-4">
        <router-link to="/eventos" class="btn btn-cop30 btn-lg me-3">
          <i class="bi bi-calendar-event me-2"></i>
          Ver Todos os Eventos
        </router-link>
        <router-link to="/sobre" class="btn btn-outline-light btn-lg">
          <i class="bi bi-info-circle me-2"></i>
          Saiba Mais
        </router-link>
      </div>
    </HeroBanner>

    <!-- Estatísticas -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-3 col-sm-6">
            <div class="stat-box">
              <h3>{{ eventos.length }}+</h3>
              <p>Eventos</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="stat-box">
              <h3>150+</h3>
              <p>Palestrantes</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="stat-box">
              <h3>5000+</h3>
              <p>Participantes</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="stat-box">
              <h3>20+</h3>
              <p>Países</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre a COP-30 -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="mb-4">Sobre a COP-30</h2>
            <p class="lead">
              A 30ª Conferência das Partes (COP-30) será realizada em Belém do Pará, 
              coração da Amazônia brasileira, em 2025.
            </p>
            <p>
              Este evento histórico reunirá líderes mundiais, cientistas, ativistas e 
              representantes da sociedade civil para discutir ações urgentes contra as 
              mudanças climáticas e a preservação da maior floresta tropical do planeta.
            </p>
            <router-link to="/sobre" class="btn btn-cop30 mt-3">
              Ler Mais
              <i class="bi bi-arrow-right ms-2"></i>
            </router-link>
          </div>
          <div class="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800" 
              alt="Amazônia" 
              class="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Eventos em Destaque -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="mb-3">Eventos em Destaque</h2>
          <p class="lead text-muted">
            Confira alguns dos principais eventos da COP-30
          </p>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border spinner-border-cop30" role="status">
            <span class="visually-hidden">Carregando...</span>
          </div>
        </div>

        <!-- Grid de Eventos -->
        <div v-else class="row g-4">
          <div 
            v-for="evento in eventosDestaque" 
            :key="evento.id" 
            class="col-lg-4 col-md-6"
          >
            <EventoCard :evento="evento" />
          </div>
        </div>

        <div class="text-center mt-5">
          <router-link to="/eventos" class="btn btn-outline-cop30 btn-lg">
            Ver Todos os Eventos
            <i class="bi bi-arrow-right ms-2"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-5" style="background: linear-gradient(135deg, var(--cop30-green) 0%, var(--cop30-blue) 100%);">
      <div class="container text-center text-white">
        <h2 class="mb-4">Faça Parte da Mudança</h2>
        <p class="lead mb-4">
          Inscreva-se nos eventos e contribua para um futuro mais sustentável
        </p>
        <router-link to="/eventos" class="btn btn-light btn-lg">
          <i class="bi bi-calendar-check me-2"></i>
          Inscrever-se Agora
        </router-link>
      </div>
    </section>
  </main>
</template>
