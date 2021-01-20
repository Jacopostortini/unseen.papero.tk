import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ScotlandYardHome from "../views/scotlandYardViews/ScotlandYardHome";
import ScotlandYardGame from "../views/scotlandYardViews/ScotlandYardGame";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/scotland-yard',
    name: 'ScotlandYardHome',
    component: ScotlandYardHome
  },
  {
    path: '/scotland-yard/:gameTag',
    name: 'ScotlandYardGame',
    component: ScotlandYardGame
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
