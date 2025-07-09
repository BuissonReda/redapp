import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import GetStartedPage from '../views/GetStartedPage.vue'
import PersonalInformationsPage from '../views/PersonalInformationsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/getStarted'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/getStarted',
    name: 'GetStarted',
    component: GetStartedPage
  },
    {
    path: '/personalInformations',
    name: 'PersonalInformations',
    component: PersonalInformationsPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
