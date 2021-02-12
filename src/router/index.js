import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home";
import Game from "../views/Game";
import axios from "axios";
import {createLocalAccountUrl} from "../constants/constants";
import store from "../store";


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

router.beforeEach(async (to, from, next)=>{
  if(to.name==="Game"){ //Se è diretto ad una partita
    if(store.state.username) next(); //se è loggato con account local o con google
    else { //se non è loggato nè con google nè con account local
      axios
          .get(createLocalAccountUrl)
          .then(()=>{next()});
    }
  } else next(); //Se non è diretto ad una partita
})

export default router
