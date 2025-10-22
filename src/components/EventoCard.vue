<script setup lang="ts">
import type { Evento } from '../types';

defineProps<{
  evento: Evento;
}>();
</script>

<template>
  <div class="card evento-card">
    <div class="position-relative overflow-hidden">
      <img :src="evento.imagem" :alt="evento.titulo" class="card-img-top" />
      <span :class="`badge badge-categoria badge-${evento.categoria.replace(' ', '-')}`">
        {{ evento.categoria }}
      </span>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ evento.titulo }}</h5>
      <p class="card-text text-muted">{{ evento.descricao }}</p>
      
      <div class="mb-2">
        <i class="bi bi-calendar3 text-primary me-2"></i>
        <small>{{ new Date(evento.data).toLocaleDateString('pt-BR') }}</small>
        <i class="bi bi-clock ms-3 text-primary me-2"></i>
        <small>{{ evento.hora }}</small>
      </div>
      
      <div class="mb-2">
        <i class="bi bi-geo-alt text-danger me-2"></i>
        <small>{{ evento.local }}</small>
      </div>
      
      <div class="mb-3">
        <i class="bi bi-people text-success me-2"></i>
        <small>{{ evento.vagasDisponiveis }} vagas disponíveis</small>
      </div>

      <div class="d-flex gap-2">
        <router-link 
          :to="`/eventos/${evento.id}`" 
          class="btn btn-cop30 flex-grow-1"
        >
          Ver Detalhes
        </router-link>
        <button class="btn btn-outline-cop30">
          <i class="bi bi-bookmark"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
