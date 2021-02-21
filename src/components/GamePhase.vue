<template>
  <div class="game-phase__main-panel">
    <MapManager class="game-phase__map-manager"/>
    <GameSideBar class="game-phase__game-stats"
                       :players="players"
                       :current-player="currentPlayer"
                       :game="game"/>
  </div>
</template>

<script>
import MapManager from "./gamePhaseComponents/MapManager";
import GameSideBar from "./gamePhaseComponents/GameSideBar";
export default {
  name: "GamePhase",
  components: {GameSideBar, MapManager},
  props: {
    players: {
      type: Array,
      required: true
    },
    currentPlayer: {
      required: true
    },
    game: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.game-phase__main-panel{
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-areas: "map sidebar";
  width: 100%;
  height: 100%;
  color: white;
}

</style>