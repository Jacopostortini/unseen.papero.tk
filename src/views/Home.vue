<template>
<div class="main-panel">
  <Header/>
  <GameHistory :games="games"/>
  <GameButtons/>
  <UserHamburgerMenu :src="require('@/assets/hamburger_icon_light.png')"
                     :show="showHamburgerMenu"
                     @toggle-show="showHamburgerMenu=$event"/>
</div>
</template>

<script>
import Header from "@/components/homeComponents/Header";
import GameButtons from "@/components/homeComponents/GameButtons";
import axios from "axios";
import {getAllGamesUrl} from "../constants/constants";
import GameHistory from "../components/homeComponents/GameHistory";
import {defineAsyncComponent} from "vue";

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
        .get(getAllGamesUrl)
        .then((response)=>{this.games = response.data})
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