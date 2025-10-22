<script setup lang="ts">
defineProps<{
  mensagem: string;
  cor?: string;
}>();

const mostrarAlerta = (msg: string) => {
  alert(msg);
};
</script>

<template>
  <button 
    @click="mostrarAlerta(mensagem)"
    :style="{ backgroundColor: cor || '#0d5e3a', color: 'white' }"
    class="botao"
  >
    Clique Aqui
  </button>
</template>

<style scoped>
.botao {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.botao:hover {
  opacity: 0.8;
}
</style>
