<template>
<div class="main-panel">
  <Header :logged="logged"/>
  <GameHistory :games="games"/>
  <GameButtons :logged="logged"/>
  <UserHamburgerMenu :login="{username: username}"/>
</div>
</template>

<script>
import Header from "@/components/homeComponents/Header";
import GameHistory from "@/components/homeComponents/GameHistory";
import GameButtons from "@/components/homeComponents/GameButtons";
import axios from "axios";
import {getAllGamesUrl, getLoginInfoUrl} from "../constants/constants";
import UserHamburgerMenu from "../components/UserHamburgerMenu";
export default {
  name: "Home",
  components: {UserHamburgerMenu, GameButtons, GameHistory, Header},
  data(){
    return {
      logged: true,
      games: null,
      username: null
    }
  },
  mounted() {
    axios
        .get(getLoginInfoUrl)
        .then((response)=>{this.logged = !!response.data; this.username=response.data.username});
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
  grid-template-rows: 20vh 80vh;
  grid-template-columns: 40vw 60vw;
  grid-template-areas: "header header" "my-games x";
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