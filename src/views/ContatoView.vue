<script setup lang="ts">
import { ref } from 'vue';
import HeroBanner from '../components/HeroBanner.vue';

const formulario = ref({
  nome: '',
  email: '',
  telefone: '',
  assunto: '',
  mensagem: ''
});

const enviado = ref(false);
const enviando = ref(false);

const enviarFormulario = async () => {
  enviando.value = true;
  
  // Simulação de envio
  setTimeout(() => {
    console.log('Mensagem enviada:', formulario.value);
    enviado.value = true;
    enviando.value = false;
    
    // Limpar formulário
    formulario.value = {
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    };
    
    // Resetar mensagem de sucesso após 5 segundos
    setTimeout(() => {
      enviado.value = false;
    }, 5000);
  }, 1500);
};
</script>

<template>
  <main>
    <HeroBanner 
      titulo="Entre em Contato"
      subtitulo="Estamos aqui para ajudar. Envie sua mensagem!"
    />

    <section class="py-5">
      <div class="container">
        <div class="row g-5">
          <!-- Informações de Contato -->
          <div class="col-lg-4">
            <h3 class="mb-4">Informações de Contato</h3>
            
            <div class="info-box mb-4">
              <i class="bi bi-geo-alt"></i>
              <h6 class="fw-bold mt-3">Endereço</h6>
              <p class="mb-0">
                Centro de Convenções Hangar<br>
                Avenida Dr. Freitas<br>
                Belém, PA - Brasil<br>
                CEP: 66000-000
              </p>
            </div>

            <div class="info-box mb-4">
              <i class="bi bi-envelope"></i>
              <h6 class="fw-bold mt-3">E-mail</h6>
              <p class="mb-0">
                <a href="mailto:contato@cop30belem.com">contato@cop30belem.com</a><br>
                <a href="mailto:eventos@cop30belem.com">eventos@cop30belem.com</a>
              </p>
            </div>

            <div class="info-box mb-4">
              <i class="bi bi-telephone"></i>
              <h6 class="fw-bold mt-3">Telefone</h6>
              <p class="mb-0">
                +55 (91) 3333-4444<br>
                +55 (91) 98888-9999 (WhatsApp)
              </p>
            </div>

            <div class="info-box">
              <i class="bi bi-clock"></i>
              <h6 class="fw-bold mt-3">Horário de Atendimento</h6>
              <p class="mb-0">
                Segunda a Sexta: 8h às 18h<br>
                Sábado: 9h às 13h<br>
                Domingo: Fechado
              </p>
            </div>

            <div class="mt-4">
              <h6 class="fw-bold mb-3">Redes Sociais</h6>
              <div class="d-flex gap-3">
                <a href="#" class="btn btn-outline-cop30 btn-sm">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="btn btn-outline-cop30 btn-sm">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="#" class="btn btn-outline-cop30 btn-sm">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#" class="btn btn-outline-cop30 btn-sm">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Formulário de Contato -->
          <div class="col-lg-8">
            <h3 class="mb-4">Envie sua Mensagem</h3>

            <!-- Mensagem de Sucesso -->
            <div v-if="enviado" class="alert alert-success alert-dismissible fade show">
              <i class="bi bi-check-circle me-2"></i>
              <strong>Mensagem enviada com sucesso!</strong>
              <p class="mb-0 mt-2">
                Obrigado por entrar em contato. Responderemos em breve.
              </p>
            </div>

            <form @submit.prevent="enviarFormulario" class="needs-validation" novalidate>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Nome Completo *</label>
                  <input 
                    v-model="formulario.nome"
                    type="text" 
                    class="form-control" 
                    required
                    placeholder="Seu nome"
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label">E-mail *</label>
                  <input 
                    v-model="formulario.email"
                    type="email" 
                    class="form-control" 
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label">Telefone</label>
                  <input 
                    v-model="formulario.telefone"
                    type="tel" 
                    class="form-control"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label">Assunto *</label>
                  <select v-model="formulario.assunto" class="form-select" required>
                    <option value="">Selecione...</option>
                    <option value="inscricao">Dúvidas sobre Inscrição</option>
                    <option value="eventos">Informações sobre Eventos</option>
                    <option value="parcerias">Parcerias e Patrocínios</option>
                    <option value="imprensa">Assessoria de Imprensa</option>
                    <option value="outros">Outros Assuntos</option>
                  </select>
                </div>

                <div class="col-12">
                  <label class="form-label">Mensagem *</label>
                  <textarea 
                    v-model="formulario.mensagem"
                    class="form-control" 
                    rows="6" 
                    required
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                  <small class="text-muted">
                    {{ formulario.mensagem.length }} / 1000 caracteres
                  </small>
                </div>

                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="termos" required />
                    <label class="form-check-label" for="termos">
                      Concordo em receber comunicações sobre a COP-30 *
                    </label>
                  </div>
                </div>

                <div class="col-12">
                  <button 
                    type="submit" 
                    class="btn btn-cop30 btn-lg"
                    :disabled="enviando"
                  >
                    <span v-if="enviando">
                      <span class="spinner-border spinner-border-sm me-2"></span>
                      Enviando...
                    </span>
                    <span v-else>
                      <i class="bi bi-send me-2"></i>
                      Enviar Mensagem
                    </span>
                  </button>
                  <p class="text-muted small mt-2">
                    * Campos obrigatórios
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa (opcional - pode ser substituído por um mapa real) -->
    <section class="py-5 bg-light">
      <div class="container">
        <h3 class="text-center mb-4">Localização</h3>
        <div class="ratio ratio-21x9 rounded overflow-hidden shadow">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4442823088283!2d-48.488157!3d-1.445562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjYnNDQuMCJTIDQ4wrAyOScxNy40Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-5">
      <div class="container">
        <h3 class="text-center mb-5">Perguntas Frequentes</h3>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    Como posso me inscrever nos eventos?
                  </button>
                </h2>
                <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Acesse a página de Eventos, escolha o evento desejado e clique em "Ver Detalhes". 
                    Na página do evento, preencha o formulário de inscrição com seus dados.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    Os eventos são gratuitos?
                  </button>
                </h2>
                <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    A maioria dos eventos da COP-30 são gratuitos, mas alguns workshops e cursos 
                    específicos podem ter taxa de inscrição. Verifique os detalhes de cada evento.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    Posso participar online?
                  </button>
                </h2>
                <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Sim! Muitos eventos terão transmissão online ao vivo. Você receberá o link 
                    de acesso por e-mail após a confirmação da inscrição.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                    Há hospedagem disponível?
                  </button>
                </h2>
                <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    A organização da COP-30 possui parcerias com hotéis em Belém. 
                    Entre em contato conosco para mais informações sobre hospedagem.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
