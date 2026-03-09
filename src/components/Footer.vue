<!-- src/components/Footer.vue -->
<template>
  <footer class="bg-brand-500 text-brand-200 py-12 px-8 mt-auto">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      <!-- Columna 1 — Marca + Nav -->
      <div class="flex flex-col gap-4">
        <RouterLink to="/" class="font-display text-2xl text-white"> SmartBudget </RouterLink>
        <ul class="flex flex-col gap-2 text-sm">
          <li>
            <RouterLink to="/about" class="hover:text-white transition-colors"
              >¿Qué es SmartBudget?</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/learn" class="hover:text-white transition-colors">Aprende</RouterLink>
          </li>
          <li>
            <RouterLink to="/pricing" class="hover:text-white transition-colors">Planes</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Columna 2 — Legal -->
      <div class="flex flex-col gap-4">
        <p class="text-white font-medium text-sm">Legal</p>
        <ul class="flex flex-col gap-2 text-sm">
          <li>
            <RouterLink to="/privacy" class="hover:text-white transition-colors"
              >Política de Privacidad</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/terms" class="hover:text-white transition-colors"
              >Términos y Condiciones</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/cookies" class="hover:text-white transition-colors"
              >Política de Cookies</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="max-w-6xl mx-auto mt-10 pt-6 border-t border-brand-400">
      <p class="text-sm text-brand-300 text-center">
        © {{ year }} SmartBudget. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
