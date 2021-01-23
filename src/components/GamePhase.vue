<template>
  <div class="game-phase__main-panel">
    <MapManager class="game-phase__map-manager"/>
    <GameSideBarNormal class="game-phase__game-stats" v-if="!user.is_mister_x" :game="game" :user="user"/>
    <GameSideBarMisterX class="game-phase__game-stats" v-else :game="game" :user="user"/>
  </div>
</template>

<script>
import MapManager from "./gamePhaseComponents/MapManager";
import GameSideBarNormal from "./gamePhaseComponents/GameSideBarNormal";
import GameSideBarMisterX from "./gamePhaseComponents/GameSideBarMisterX";
export default {
  name: "GamePhase",
  components: {GameSideBarNormal, GameSideBarMisterX, MapManager},
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
@import "../styles/global";

.game-phase__main-panel{
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  width: 100%;
  height: 100%;
  background: linear-gradient($theme-color-light, $theme-color-dark);
  color: white;
}

</style>