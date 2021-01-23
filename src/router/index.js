import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home";
import Game from "../views/Game";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:gameTag',
    name: 'Game',
    component: Game
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
