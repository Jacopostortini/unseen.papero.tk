import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import("../views/Home" /* webpackChunkName: "home" */);
const Game = () => import("../views/Game" /* webpackChunkName: "game" */);

const routes = [
    {
        path: '/unseen',
        name: 'Home',
        component: Home
    },
    {
        path: '/unseen/:gameId',
        name: 'Game',
        component: Game
    }
];

const router = createRouter({
  history: createWebHistory(),
  base: "unseen",
  routes
});

export default router
