import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import PageExample from '@/pages/PageExample'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/example',
    name: 'ExamplePage',
    component: PageExample
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
