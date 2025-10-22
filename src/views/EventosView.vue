<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { eventosService } from '../services/eventos';
import type { Evento, Filtros } from '../types';
import HeroBanner from '../components/HeroBanner.vue';
import EventoCard from '../components/EventoCard.vue';

const eventos = ref<Evento[]>([]);
const loading = ref(true);

// Filtros - Demonstração de v-model
const filtros = ref<Filtros>({
  categoria: 'todas',
  data: '',
  busca: ''
});

const categorias = ['Cerimônia', 'Painel', 'Workshop', 'Mesa Redonda', 'Palestra', 'Exposição'];

// Computed para filtrar eventos
const eventosFiltrados = computed(() => {
  let resultado = [...eventos.value];

  // Filtro por categoria
  if (filtros.value.categoria !== 'todas') {
    resultado = resultado.filter(e => e.categoria === filtros.value.categoria);
  }

  // Filtro por data
  if (filtros.value.data) {
    resultado = resultado.filter(e => e.data === filtros.value.data);
  }

  // Filtro por busca
  if (filtros.value.busca) {
    const termo = filtros.value.busca.toLowerCase();
    resultado = resultado.filter(e =>
      e.titulo.toLowerCase().includes(termo) ||
      e.descricao.toLowerCase().includes(termo) ||
      e.local.toLowerCase().includes(termo)
    );
  }

  return resultado;
});

const limparFiltros = () => {
  filtros.value = {
    categoria: 'todas',
    data: '',
    busca: ''
  };
};

onMounted(async () => {
  try {
    eventos.value = await eventosService.getEventos();
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main>
    <HeroBanner 
      titulo="Todos os Eventos"
      subtitulo="Explore a programação completa da COP-30 Belém"
    />

    <section class="py-5">
      <div class="container">
        <!-- Filtros - Demonstração de v-model e v-if -->
        <div class="filtros-container">
          <h5 class="mb-3">
            <i class="bi bi-funnel me-2"></i>
            Filtrar Eventos
          </h5>
          <div class="row g-3">
            <div class="col-md-4">
              <label class="form-label fw-bold">Buscar</label>
              <input 
                v-model="filtros.busca"
                type="text" 
                class="form-control" 
                placeholder="Título, descrição ou local..."
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Categoria</label>
              <select v-model="filtros.categoria" class="form-select">
                <option value="todas">Todas as Categorias</option>
                <option 
                  v-for="cat in categorias" 
                  :key="cat" 
                  :value="cat"
                >
                  {{ cat }}
                </option>
              </select>
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Data</label>
              <input 
                v-model="filtros.data"
                type="date" 
                class="form-control"
              />
            </div>
          </div>
          
          <!-- Botão para limpar filtros - v-if -->
          <div v-if="filtros.busca || filtros.categoria !== 'todas' || filtros.data" class="mt-3">
            <button @click="limparFiltros" class="btn btn-outline-secondary">
              <i class="bi bi-x-circle me-2"></i>
              Limpar Filtros
            </button>
          </div>
        </div>

        <!-- Contador de Resultados -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h5 class="mb-0">
            <span v-if="eventosFiltrados.length > 0">
              {{ eventosFiltrados.length }} evento<span v-if="eventosFiltrados.length !== 1">s</span> encontrado<span v-if="eventosFiltrados.length !== 1">s</span>
            </span>
            <span v-else class="text-muted">
              Nenhum evento encontrado
            </span>
          </h5>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border spinner-border-cop30" role="status">
            <span class="visually-hidden">Carregando...</span>
          </div>
        </div>

        <!-- Grid de Eventos - Demonstração de v-for e v-else -->
        <div v-else-if="eventosFiltrados.length > 0" class="row g-4">
          <div 
            v-for="evento in eventosFiltrados" 
            :key="evento.id" 
            class="col-lg-4 col-md-6"
          >
            <EventoCard :evento="evento" />
          </div>
        </div>

        <!-- Mensagem quando não há eventos - v-else -->
        <div v-else class="text-center py-5">
          <i class="bi bi-calendar-x text-muted" style="font-size: 4rem;"></i>
          <h4 class="mt-3 text-muted">Nenhum evento encontrado</h4>
          <p class="text-muted">Tente ajustar os filtros de busca</p>
          <button @click="limparFiltros" class="btn btn-cop30 mt-3">
            Limpar Filtros
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
