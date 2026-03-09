import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        { path: '', name: 'Home', component: () => import('@/pages/Home.vue') },
        { path: 'about', name: 'About', component: () => import('@/pages/About.vue') },
        { path: 'learn', name: 'Learn', component: () => import('@/pages/Learn.vue') },
        { path: 'pricing', name: 'Pricing', component: () => import('@/pages/Pricing.vue') },
      ],
    },

    {
      path: '/auth',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        { path: 'login', name: 'Login', component: () => import('@/pages/Login.vue') },
        { path: 'register', name: 'Register', component: () => import('@/pages/Register.vue') },
      ],
    },

    // 404
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/NotFound.vue') },
  ],
})

export default router
