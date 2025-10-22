<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div id="app">
    <NavBar />
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
