<template>
  <div class="my-games__main-panel">
    <span v-if="games && games.length>0">Active games</span>
    <Game v-for="game in games" :key="game.game_id" :game="game"/>
  </div>
</template>

<script>
import Game from "@/components/homeComponents/Game";

export default {
  name: "GameHistory",
  components: {Game},
  props: {
    games: {
      required: true
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
  overflow-y: scroll;
  max-height: 60vh;
  @media (max-width: 700px) {
    justify-self: center;
    text-align: center;
    margin: 0;
  }
  span{
    color: white;
  }
}

</style>