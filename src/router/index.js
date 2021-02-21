import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home";
import Game from "../views/Game";
import axios from "axios";
import {createLocalAccountUrl, getLoginInfoUrl} from "../constants/constants";
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
  if(store.state.username === "" && store.state.logged === -1){ //se non è ancora stato trovato il logged
    axios
        .get(getLoginInfoUrl)
        .then((response)=>{
          if(response.data){ //se è loggato in qualche modo
            store.dispatch("setLogged", response.data.google_signed_in);
            store.dispatch("setUsername", decodeURIComponent(response.data.username));

            next(); //se è loggato in qualche modo può andare dove vuole

          } else { //se non è loggato
            store.dispatch("setUsername", null);
            store.dispatch("setLogged", false);

            if(to.name==="Game"){ //se sta andando in una partita
              axios
                  .get(createLocalAccountUrl)
                  .then(()=>{
                      next();
                  });
            } else next(); //se non sta andando in una partita non c'è bisogno dell'account

          }
        });
  } else {
      if(store.status.username === null && to.name === "Game"){ //se non è loggato e sta andando in partita
          axios
              .get(createLocalAccountUrl)
              .then(()=>{
                  next();
              });
      } else next();
  }
})

export default router
