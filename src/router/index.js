import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SpecieDetails from '@/views/specie/SpecieDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: "",
          name: "SpecieDetails",
          component: SpecieDetails,
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
