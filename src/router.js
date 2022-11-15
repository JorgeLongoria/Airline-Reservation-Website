import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/Home', name: 'Home', component: () => import('@/views/HomePage.vue') },
  { path: '/BookFlight', name: 'BookFlight', component: () => import('@/views/BookFlight.vue') },
  { path: '/Destinations', name: 'Destinations', component: () => import('@/views/Destinations.vue') },
  { path: '/Login', name: 'Login', component: () => import('@/views/LoginPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
