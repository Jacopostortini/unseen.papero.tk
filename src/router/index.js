import { createRouter, createWebHistory } from 'vue-router';

const Error = () => import("../views/Error" /* webpackChunkName: "error" */);
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
    },
    {
        path: '/error/',
        name: 'Error',
        component: Error
    }
];

const router = createRouter({
  history: createWebHistory(),
  base: "unseen",
  routes
});

/*router.beforeEach(async (to, from, next)=>{
    //next();
    next({name: "Error"});
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
                  .then((response)=>{
                      store.dispatch("setUsername", response.data.username);
                      store.dispatch("setLogged", false);
                      next();
                  })
                  .catch(()=>{
                      next({name: "Error"});
                  });
            } else next(); //se non sta andando in una partita non c'è bisogno dell'account

          }
        })
        .catch(()=>{
            next({name: "Error"});
        });
  } else {
      if(store.state.username === null && to.name === "Game"){ //se non è loggato e sta andando in partita
          axios
              .get(createLocalAccountUrl)
              .then((response)=>{
                  store.dispatch("setUsername", response.data.username);
                  store.dispatch("setLogged", false);
                  next();
              })
              .catch(()=>{
                  next({name: "Error"});
              });
      } else next(); //se è loggato
  }
})*/

export default router
