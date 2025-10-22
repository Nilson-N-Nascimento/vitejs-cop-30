<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import Botao from './components/Botao.vue';
</script>

<template>
  <div id="app">
    <NavBar />
    
    <!-- Exemplo de uso do componente Botao com props -->
    <div style="padding: 20px; text-align: center; background-color: #f0f0f0;">
      <h3>Atividade Prática 1: Botão com Props</h3>
      <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
        <Botao mensagem="Bem-vindo ao Portal COP-30!" />
        <Botao mensagem="Confira os eventos disponíveis" cor="#0077be" />
        <Botao mensagem="Obrigado por participar!" cor="#20a357" />
      </div>
    </div>
    
    <RouterView />
    <FooterComponent />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
