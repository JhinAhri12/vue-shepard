import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SpecieDetails from '@/views/specie/SpecieDetails.vue'
import NotFound from "@/views/NotFound.vue";
import NetworkError from "@/views/NetworkError.vue";
import SpecieLayout from "@/views/specie/SpecieLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/species/:id",
      name: "SpecieLayout",
      props: true,
      component: SpecieLayout,
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
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/404/:resource",
      name: "404Resource",
      component: NotFound,
      props: true,
    },
    {
      path: "/network-error",
      name: "NetworkError",
      component: NetworkError,
    },
  ]
})

export default router
