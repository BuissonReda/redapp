import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import ConnectionPage from '@/views/ConnectionPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/connection'
  },
  {
    path: '/connection',
    name: 'Connection',
    component: ConnectionPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
