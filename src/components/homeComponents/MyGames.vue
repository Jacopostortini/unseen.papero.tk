<template>
  <div class="my-games__main-panel" v-if="games && games.length>0">
    <span>Active games</span>
    <Game v-for="game in games" :key="game.game_id" :game="game"/>
  </div>
</template>

<script>
import Game from "@/components/homeComponents/Game";

export default {
  name: "MyGames",
  components: {Game},
  props: {
    games: {
      type: Array,
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

  span{
    color: white;
  }
}

</style>