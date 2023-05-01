import MainCard from '../views/MainCard.vue'
import Impressum from '@/views/Impressum.vue'
import Datenschutz from '@/views/Datenschutz.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: MainCard },
  { path: '/legel/imprint', component: Impressum },
  { path: '/legal/data', component: Datenschutz },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router