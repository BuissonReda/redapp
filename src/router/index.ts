import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue'
import GetStartedPage from '@/views/GetStartedPage.vue'
import PersonalInformationsPage from '@/views/PersonalInformationsPage.vue'
import TodosPage from '@/views/TodosPage.vue'
import NotesPage from '@/views/NotesPage.vue';

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
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodosPage
  },
  {
    path: '/notes',
    name: 'Notes',
    component: NotesPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
