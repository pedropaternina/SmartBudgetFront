<template>
  <header class="flex items-center justify-between px-8 py-6 bg-brand-500 shadow-sm">
    <RouterLink to="/" class="text-2xl font-bold text-white font-display"> SmartBudget </RouterLink>

    <nav>
      <ul class="flex items-center gap-8">
        <li>
          <RouterLink
            to="/about"
            class="text-brand-200 hover:text-white transition-colors text-sm font-medium"
          >
            ¿Qué es SmartBudget?
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/learn"
            class="text-brand-200 hover:text-white transition-colors text-sm font-medium"
          >
            Aprende
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/pricing"
            class="text-brand-200 hover:text-white transition-colors text-sm font-medium"
          >
            Planes
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div class="flex items-center gap-4">
      <RouterLink
        to="/login"
        class="text-sm font-medium text-brand-200 hover:text-white transition-colors"
      >
        Iniciar Sesión
      </RouterLink>

      <RouterLink
        to="/register"
        class="bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
      >
        Comienza Ya
      </RouterLink>
    </div>
  </header>
</template>
