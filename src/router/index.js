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
    console.log("going on a game page")
    axios
        .get(getLoginInfoUrl)
        .then((response)=>{
          if(!response.data){
            console.log("user not logged")
            axios
                .get(createLocalAccountUrl)
                .then(()=>{
                  console.log("new local user created")
                  next();
                });
          } else {
            console.log("user logged")
            next();
          }
        })
  } else {
    console.log("not going to game page")
    next();
  }
})

export default router
