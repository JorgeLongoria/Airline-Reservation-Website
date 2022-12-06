import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated } = useAuth()

const routes = [
  { path: '/Home', name: 'Home', component: () => import('@/views/HomePage.vue') },
  { path: '/BookFlight', name: 'BookFlight', component: () => import('@/views/BookFlight.vue') },
  { path: '/Destinations', name: 'Destinations', component: () => import('@/views/Destinations.vue') },
  { path: '/MyAccount', name: 'myAccountPage', component: () => import('@/views/myAccountPage.vue'), meta: { requiresAuth: true } },
  { path: '/Login', name: 'Login', component: () => import('@/views/LoginPage.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/components/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router
