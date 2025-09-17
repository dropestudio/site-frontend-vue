import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
    },
    {
      path: '/job/:id',
      name: 'job',
      component: () => import('../views/JobItemView.vue'),
    },
    {
      path: '/orcamento',
      name: 'budget',
      component: () => import('../views/BudgetView.vue'),
    },
  ],
})

export default router
