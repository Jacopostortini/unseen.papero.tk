<template>
  <div class="post-game-phase__main-panel">
    <MapManager class="post-game-phase__map-manager"
                :players="players"
                :current-player="currentPlayer"
                :auto-zoom="false"/>
    <PostGameSideBar :players="players"
                     :game="game"
                     :current-player="currentPlayer"
                     :game-restarted="gameRestarted"
                     @restart-game="$emit('restart-game')"/>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import {loaderParameters} from "../constants/mapConstants";
import LoadingMap from "./gamePhaseComponents/LoadingMap";
import PostGameSideBar from "./postGamePhaseComponents/PostGameSideBar";

const MapManager = defineAsyncComponent({
  loader: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./gamePhaseComponents/MapManager" /* webpackChunkName: "mapManager" */))
    }, loaderParameters.latency);
  }),
  delay: loaderParameters.delay,
  timeout: loaderParameters.timeout,
  errorComponent: LoadingMap,
  loadingComponent: LoadingMap,
  onError: (error, retry) => {
    retry();
  }
});
export default {
  name: "PostGamePhase",
  components: {MapManager, PostGameSideBar},
  props: {
    players: Array,
    currentPlayer: Object,
    game: Object,
    gameRestarted: Boolean
  }
}
</script>

<style lang="scss" scoped>

.post-game-phase__main-panel{
  user-select: none;
  display: grid;
  grid-template-columns: #{"min(150vh, 80%)"} 1fr;
  grid-template-areas: "map sidebar";
  width: 100%;
  height: 100%;
  color: white;
}
</style>