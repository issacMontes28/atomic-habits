import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LawDetails from '@/components/Law/LawDetails.vue'
//@ts-ignore
import LawSteps from '@/views/Laws/LawSteps.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/law/:id',
      name: 'LawDetails',
      props: true,
      component: LawDetails,
    },
    {
      path: '/lawSteps',
      name: 'LawSteps',
      component: LawSteps,
      props: route => ({ lawId: route.query.lawId , page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
