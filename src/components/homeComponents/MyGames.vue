<template>
  <div class="my-games__main-panel">
    <span>Active games</span>
    <Game v-for="game in myGames" :key="game.gameId" :game="game"/>
  </div>
</template>

<script>
import Game from "@/components/homeComponents/Game";
import { myGames } from "@/constants/constants";

export default {
  name: "MyGames",
  components: {Game},
  data() {
    return{
      myGames
    }
  }
}
</script>

<style lang="scss" scoped>

.my-games__main-panel{
  grid-area: my-games;
  margin-left: 5%;
  align-self: start;
  justify-self: start;
  width: 60%;
  text-align: right;

  span{
    color: white;
  }
}

</style>