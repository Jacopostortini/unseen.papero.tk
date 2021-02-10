import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home";
import Game from "../views/Game";
import axios from "axios";
import {createLocalAccountUrl, getLoginInfoUrl} from "../constants/constants";

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

router.beforeEach((to, from, next)=>{
  if(to.name==="Game"){
    axios
        .get(getLoginInfoUrl)
        .then((response)=>{
          if(!response.data){
            axios
                .get(createLocalAccountUrl)
                .then(()=>{
                  next();
                });
          } else {
            next();
          }
        })
  } else {
    next();
  }
})

export default router
