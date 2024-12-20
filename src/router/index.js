import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/detail/destination',
      name: 'detail/destination',
      component: () => import('../views/DetailDestinationView.vue'),
    },
  ],
})

export default router
