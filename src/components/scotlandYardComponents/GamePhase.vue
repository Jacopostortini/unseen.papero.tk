<template>
  <div class="game-phase__main-panel">
    <MapManager class="game-phase__map-manager"/>
    <GameSideBarNormal class="game-phase__game-stats" :game="game" :user="user"/>
  </div>
</template>

<script>
import MapManager from "./gamePhaseComponents/MapManager";
import GameSideBarNormal from "./gamePhaseComponents/GameSideBarNormal";
export default {
  name: "GamePhase",
  components: {GameSideBarNormal, MapManager},
  props: {
    game: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.game-phase__main-panel{
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  width: 100%;
  height: 100%;
}

</style>