import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../pages/AppHome.vue'
import ProjectView from '../pages/AppProjects.vue'
import ContactView from '../pages/AppContact.vue'
import AboutView from '../pages/AppAbout.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectView },
  { path: '/contact', component: ContactView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
