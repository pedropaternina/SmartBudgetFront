<script setup>
import SkeletonLoader from '@/components/SkeletonLoader.vue'

const goals = [
  { key: 'debt', label: 'Pagar deudas' },
  { key: 'car', label: 'Comprar un auto' },
  { key: 'house', label: 'Tu primera casa' },
  { key: 'travel', label: 'Viajar por el mundo' },
  { key: 'emergency', label: 'Fondo de emergencia' },
]
</script>

<template>
  <section class="flex flex-col items-center justify-center text-center px-8 py-24 gap-8">
    <h2 class="font-display text-5xl md:text-6xl text-text max-w-3xl leading-tight">
      Registra tus gastos, analiza tus hábitos y toma el control de tus finanzas personales.
      <span class="text-accent-500">Todo en un solo lugar.</span>
    </h2>

    <button
      class="bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-3 rounded-full transition-colors text-lg"
    >
      Comienza tu periodo gratuito
    </button>

    <SkeletonLoader width="w-[45vw]" height="h-[45vh]" rounded="rounded-2xl" />
  </section>
  <section class="flex flex-col items-center text-center px-8 py-24 gap-12 bg-surface">
    <h3 class="font-display text-4xl md:text-5xl text-text max-w-2xl leading-tight">
      Tus sueños tienen un precio,
      <span class="text-accent-500">nosotros te ayudamos a pagarlo</span>
    </h3>

    <!-- Carrusel -->
    <div class="flex gap-6 overflow-x-auto pb-4 w-full max-w-5xl scrollbar-hide">
      <div v-for="goal in goals" :key="goal.key" class="flex flex-col items-center gap-3 shrink-0">
        <SkeletonLoader width="w-48" height="h-48" rounded="rounded-2xl" />
        <p class="text-sm font-medium text-text-muted">{{ goal.label }}</p>
      </div>
    </div>
  </section>

  <section class="px-8 py-24 bg-background">
    <div class="max-w-5xl mx-auto flex flex-col gap-6">
      <!-- Título y subtítulo a la izquierda -->
      <div class="flex flex-col gap-4 items-start text-left">
        <h4 class="font-display text-4xl md:text-5xl text-text max-w-2xl leading-tight">
          Finanzas inteligentes para
          <span class="text-accent-500">decisiones que importan</span>
        </h4>
        <p class="text-text-muted text-lg max-w-xl leading-relaxed">
          SmartBudget te ayuda a registrar cada gasto, descubrir tus hábitos financieros y entender
          a dónde va tu dinero cada mes. Porque cuando conoces tus patrones, tienes el poder de
          cambiarlos.
        </p>
      </div>

      <!-- Cards centradas -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6 mx-auto">
        <div class="flex flex-col gap-4 bg-surface border border-border rounded-2xl p-6 text-left">
          <h5 class="font-display text-2xl text-text">Flujo del Mes</h5>
          <p class="text-text-muted text-sm leading-relaxed">
            Compara tus ingresos y gastos a lo largo del tiempo. Detecta patrones, identifica tus
            mejores meses.
          </p>
          <SkeletonLoader width="w-full" height="h-52" rounded="rounded-xl" />
        </div>

        <div class="flex flex-col gap-4 bg-surface border border-border rounded-2xl p-6 text-left">
          <h5 class="font-display text-2xl text-text">¿A dónde va tu plata?</h5>
          <p class="text-text-muted text-sm leading-relaxed">
            Visualiza de un vistazo cuánto gastas en comida, transporte, entretenimiento y más.
          </p>
          <SkeletonLoader width="w-full" height="h-52" rounded="rounded-xl" />
        </div>
      </div>
    </div>
  </section>
</template>
