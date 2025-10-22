<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-cop30 sticky-top">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">
        <i class="bi bi-tree-fill me-2"></i>
        COP-30 Belém
      </RouterLink>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">
              <i class="bi bi-house-door me-1"></i>
              Início
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/eventos" class="nav-link">
              <i class="bi bi-calendar-event me-1"></i>
              Eventos
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/sobre" class="nav-link">
              <i class="bi bi-info-circle me-1"></i>
              Sobre
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contato" class="nav-link">
              <i class="bi bi-envelope me-1"></i>
              Contato
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
