<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
})
</script>

<template>
  <div class="min-h-screen flex bg-background">
    <div class="hidden md:flex w-1/2 bg-brand-500 relative flex-col justify-end p-12">
      <div class="absolute inset-0 flex items-center justify-center p-12">
        <SkeletonLoader width="w-full" height="h-full" rounded="rounded-3xl" />
      </div>

      <div class="relative z-10 flex flex-col gap-3">
        <h2 class="font-display text-4xl text-white leading-tight">
          {{ title }}
        </h2>
        <p class="text-brand-200 text-base leading-relaxed max-w-sm">
          {{ subtitle }}
        </p>
      </div>
    </div>

    <div class="flex flex-1 items-center justify-center px-8 py-12">
      <div class="w-full max-w-md bg-surface border border-border rounded-2xl p-8 shadow-sm">
        <RouterLink to="/" class="font-display text-2xl text-accent-500 mb-8 block">
          SmartBudget
        </RouterLink>

        <!-- Slot: aquí va LoginForm o RegisterForm -->
        <slot />
      </div>
    </div>
  </div>
</template>
