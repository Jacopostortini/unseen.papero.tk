<template>
<div class="main-panel">
  <Header/>
  <GameHistory :games="games"/>
  <GameButtons/>
  <UserHamburgerMenu :src="require('@/assets/hamburger_icon_dark.png')"
                     :show="showHamburgerMenu"
                     @toggle-show="showHamburgerMenu=$event"/>
</div>
</template>

<script>
import Header from "@/components/homeComponents/Header";
import GameButtons from "@/components/homeComponents/GameButtons";
import axios from "axios";
import {urls} from "../constants/constants";
import GameHistory from "../components/homeComponents/GameHistory";
import {defineAsyncComponent} from "vue";
import store from "../store";

const UserHamburgerMenu = defineAsyncComponent(() => import("../components/UserHamburgerMenu" /* webpackChunkName: "userHamburgerMenu" */));
export default {
  name: "Home",
  components: {
    UserHamburgerMenu,
    GameButtons,
    GameHistory,
    Header
  },
  data(){
    return {
      games: null,
      showHamburgerMenu: false
    }
  },
  mounted() {
    axios
        .get(urls.getAllGamesUrl)
        .then((response)=>{this.games = response.data})
  },
  beforeRouteEnter(to, from, next) {
    //next();
    if(store.state.username === "" && store.state.logged === -1) { //se non è ancora stato cercato il logged
      axios
          .get(urls.getLoginInfoUrl)
          .then((response) => {
            if (response.data) { //se è loggato in qualche modo
              store.dispatch("setLogged", response.data.google_signed_in);
              store.dispatch("setUsername", decodeURIComponent(response.data.username));

              next(); //se è loggato in qualche modo può andare dove vuole

            } else { //se non è loggato
              store.dispatch("setUsername", null);
              store.dispatch("setLogged", false);
              next();
            }
          })
          .catch(()=>{
            location.href = location.origin+"/error?from="+location.pathname;
          });
    } else next();
  }
}
</script>

<style lang="scss">
@import "../styles/global";

.main-panel{
  background-image: url("../assets/background_image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  display: grid;
  justify-items: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 700px) {
    grid-template-rows: auto auto auto;
    grid-template-areas: "header" "x" "my-games";
    overflow: scroll;
  }
  @media (min-width: 701px) {
    grid-template-rows: 20vh 80vh;
    grid-template-columns: 40vw 60vw;
    grid-template-areas: "header header" "my-games x";
  }
  height: 100%;
}

button {
  color: white;
  padding: 2% 3% 2% 3%;
  background: transparent;
  border: 2px solid white;
  transition: all 0.5s;

  &:hover{
    background-color: white;
    color: $theme-color-dark;
  }

  &:focus{
    outline: none;
  }
}


</style>