<script setup lang="ts">
//
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <h5 class="mb-3">
            <i class="bi bi-tree-fill me-2"></i>
            COP-30 Belém
          </h5>
          <p>Portal oficial de eventos da 30ª Conferência das Partes sobre Mudanças Climáticas.</p>
          <div class="social-links mt-3">
            <a href="#" class="me-3"><i class="bi bi-facebook fs-4"></i></a>
            <a href="#" class="me-3"><i class="bi bi-twitter fs-4"></i></a>
            <a href="#" class="me-3"><i class="bi bi-instagram fs-4"></i></a>
            <a href="#"><i class="bi bi-linkedin fs-4"></i></a>
          </div>
        </div>
        
        <div class="col-md-4 mb-4">
          <h5 class="mb-3">Links Rápidos</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <router-link to="/">
                <i class="bi bi-chevron-right me-1"></i>Início
              </router-link>
            </li>
            <li class="mb-2">
              <router-link to="/eventos">
                <i class="bi bi-chevron-right me-1"></i>Eventos
              </router-link>
            </li>
            <li class="mb-2">
              <router-link to="/sobre">
                <i class="bi bi-chevron-right me-1"></i>Sobre a COP-30
              </router-link>
            </li>
            <li class="mb-2">
              <router-link to="/contato">
                <i class="bi bi-chevron-right me-1"></i>Contato
              </router-link>
            </li>
          </ul>
        </div>
        
        <div class="col-md-4 mb-4">
          <h5 class="mb-3">Contato</h5>
          <p>
            <i class="bi bi-geo-alt me-2"></i>
            Belém, Pará - Brasil
          </p>
          <p>
            <i class="bi bi-envelope me-2"></i>
            contato@cop30belem.com
          </p>
          <p>
            <i class="bi bi-telephone me-2"></i>
            +55 (91) 3333-4444
          </p>
        </div>
      </div>
      
      <hr class="mt-4 mb-3" style="border-color: rgba(255,255,255,0.1);" />
      
      <div class="text-center">
        <p class="mb-0">
          &copy; {{ new Date().getFullYear() }} COP-30 Belém. Todos os direitos reservados.
          <span class="mx-2">|</span>
          Desenvolvido com <i class="bi bi-heart-fill text-danger"></i> para a Amazônia
        </p>
      </div>
    </div>
  </footer>
</template>
