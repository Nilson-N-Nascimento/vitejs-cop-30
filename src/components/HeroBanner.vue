<script setup lang="ts">
defineProps<{
  titulo: string;
  subtitulo?: string;
}>();
</script>

<template>
  <div class="hero">
    <div class="container position-relative">
      <h1 class="fade-in">{{ titulo }}</h1>
      <p v-if="subtitulo" class="lead fade-in">{{ subtitulo }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.hero {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
