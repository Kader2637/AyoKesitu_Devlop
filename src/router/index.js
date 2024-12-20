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
    {
      path: '/chekout',
      name: 'chekout',
      component: () => import('../views/CheckOutView.vue'),
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/PaymentView.vue'),
    },
    {
      path: '/goingto',
      name: 'goingto',
      component: () => import('../views/GoingToView.vue'),
    },
  ],
})

export default router
