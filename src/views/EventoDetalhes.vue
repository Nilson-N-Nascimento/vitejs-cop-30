<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { eventosService } from '../services/eventos';
import type { Evento } from '../types';

// Props recebida da rota
const props = defineProps<{
  id: string;
}>();

const router = useRouter();
const evento = ref<Evento | null>(null);
const loading = ref(true);

// Formulário de inscrição
const inscricao = ref({
  nome: '',
  email: '',
  telefone: '',
  instituicao: ''
});

const inscricaoEnviada = ref(false);

const enviarInscricao = () => {
  // Simulação de envio
  console.log('Inscrição enviada:', inscricao.value);
  inscricaoEnviada.value = true;
  
  setTimeout(() => {
    router.push('/eventos');
  }, 3000);
};

onMounted(async () => {
  try {
    const eventoId = parseInt(props.id);
    const eventoEncontrado = await eventosService.getEventoPorId(eventoId);
    
    if (eventoEncontrado) {
      evento.value = eventoEncontrado;
    } else {
      router.push('/eventos');
    }
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main>
    <!-- Loading -->
    <div v-if="loading" class="container text-center py-5">
      <div class="spinner-border spinner-border-cop30" role="status">
        <span class="visually-hidden">Carregando...</span>
      </div>
    </div>

    <!-- Detalhes do Evento -->
    <div v-else-if="evento" class="fade-in">
      <!-- Imagem de Capa -->
      <div 
        class="hero" 
        :style="`background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${evento.imagem}'); background-size: cover; background-position: center;`"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <span :class="`badge badge-${evento.categoria.replace(' ', '-')} fs-6 mb-3`">
                {{ evento.categoria }}
              </span>
              <h1 class="display-4 fw-bold text-white">{{ evento.titulo }}</h1>
            </div>
          </div>
        </div>
      </div>

      <section class="py-5">
        <div class="container">
          <div class="row">
            <!-- Coluna Principal -->
            <div class="col-lg-8">
              <!-- Informações Rápidas -->
              <div class="row g-3 mb-4">
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-calendar3 d-block"></i>
                    <h6 class="fw-bold">Data e Hora</h6>
                    <p class="mb-0">
                      {{ new Date(evento.data).toLocaleDateString('pt-BR', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      }) }}
                      <br>
                      às {{ evento.hora }}
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-geo-alt d-block"></i>
                    <h6 class="fw-bold">Local</h6>
                    <p class="mb-0">{{ evento.local }}</p>
                  </div>
                </div>
              </div>

              <!-- Descrição -->
              <div class="card mb-4">
                <div class="card-body">
                  <h4 class="card-title mb-3">
                    <i class="bi bi-info-circle me-2 text-primary"></i>
                    Sobre o Evento
                  </h4>
                  <p class="lead">{{ evento.descricao }}</p>
                  <p>
                    Este evento faz parte da programação oficial da COP-30 Belém e oferece 
                    uma oportunidade única de aprendizado e networking com especialistas 
                    renomados na área de mudanças climáticas e sustentabilidade.
                  </p>
                </div>
              </div>

              <!-- Palestrantes -->
              <div class="card mb-4">
                <div class="card-body">
                  <h4 class="card-title mb-3">
                    <i class="bi bi-person-badge me-2 text-success"></i>
                    Palestrantes
                  </h4>
                  <ul class="list-group list-group-flush">
                    <li 
                      v-for="(palestrante, index) in evento.palestrantes" 
                      :key="index"
                      class="list-group-item"
                    >
                      <i class="bi bi-check-circle text-success me-2"></i>
                      {{ palestrante }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Coluna Lateral - Inscrição -->
            <div class="col-lg-4">
              <div class="card sticky-top" style="top: 20px;">
                <div class="card-body">
                  <!-- Mensagem de Sucesso -->
                  <div v-if="inscricaoEnviada" class="alert alert-success">
                    <i class="bi bi-check-circle me-2"></i>
                    <strong>Inscrição realizada com sucesso!</strong>
                    <p class="mb-0 mt-2 small">
                      Você receberá um e-mail de confirmação em breve.
                    </p>
                  </div>

                  <!-- Formulário de Inscrição -->
                  <div v-else>
                    <h5 class="card-title mb-3">
                      <i class="bi bi-pencil-square me-2"></i>
                      Inscrever-se
                    </h5>
                    
                    <div class="alert alert-info mb-3">
                      <i class="bi bi-people me-2"></i>
                      <strong>{{ evento.vagasDisponiveis }}</strong> vagas disponíveis
                    </div>

                    <form @submit.prevent="enviarInscricao">
                      <div class="mb-3">
                        <label class="form-label">Nome Completo *</label>
                        <input 
                          v-model="inscricao.nome"
                          type="text" 
                          class="form-control" 
                          required
                        />
                      </div>

                      <div class="mb-3">
                        <label class="form-label">E-mail *</label>
                        <input 
                          v-model="inscricao.email"
                          type="email" 
                          class="form-control" 
                          required
                        />
                      </div>

                      <div class="mb-3">
                        <label class="form-label">Telefone</label>
                        <input 
                          v-model="inscricao.telefone"
                          type="tel" 
                          class="form-control"
                        />
                      </div>

                      <div class="mb-3">
                        <label class="form-label">Instituição</label>
                        <input 
                          v-model="inscricao.instituicao"
                          type="text" 
                          class="form-control"
                        />
                      </div>

                      <button type="submit" class="btn btn-cop30 w-100">
                        <i class="bi bi-check-lg me-2"></i>
                        Confirmar Inscrição
                      </button>
                    </form>
                  </div>

                  <hr class="my-3" />

                  <div class="d-grid gap-2">
                    <button class="btn btn-outline-secondary">
                      <i class="bi bi-share me-2"></i>
                      Compartilhar
                    </button>
                    <button class="btn btn-outline-secondary">
                      <i class="bi bi-calendar-plus me-2"></i>
                      Adicionar à Agenda
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
