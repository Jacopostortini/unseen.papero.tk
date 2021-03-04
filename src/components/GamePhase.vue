<template>
  <div class="game-phase__main-panel">
    <transition name="status-changed-panel-transition">
      <StatusChangedPanel
          v-if="changedStatusPanel.show"
          :title="changedStatusPanel.title"
          :description="changedStatusPanel.description"/>
    </transition>
    <MapManager class="game-phase__map-manager"
                :players="players"
                @station-clicked="stationClicked"/>
    <GameSideBar class="game-phase__game-stats"
                       :players="players"
                       :current-player="currentPlayer"
                       :game="game"/>
  </div>
</template>

<script>
import GameSideBar from "./gamePhaseComponents/GameSideBar";
import {defineAsyncComponent} from "vue";
import LoadingMap from "./gamePhaseComponents/LoadingMap";
import {loaderParameters} from "../constants/mapConstants";
import StatusChangedPanel from "./gamePhaseComponents/StatusChangedPanel";

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
  name: "GamePhase",
  components: {
    StatusChangedPanel,
    GameSideBar,
    MapManager
  },
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
    },
    changedStatusPanel: Object
  },
  methods: {
    stationClicked(number){
      if (this.currentPlayer.local_id === this.game.playingPlayer){
        let taxiAvailable = this.currentPlayer.available_moves.taxi.includes(number);
        let busAvailable = this.currentPlayer.available_moves.bus.includes(number);
        let undergroundAvailable = this.currentPlayer.available_moves.underground.includes(number);
        if(!taxiAvailable && !busAvailable && !undergroundAvailable) return;
        if(taxiAvailable && !busAvailable && !undergroundAvailable) this.$emit("move", {
          _from: this.currentPlayer.position,
          _to: number,
          transport: 0
        });
        else if(!taxiAvailable && busAvailable && !undergroundAvailable) this.$emit("move", {
          _from: this.currentPlayer.position,
          _to: number,
          transport: 1
        });
        else if(!taxiAvailable && !busAvailable && undergroundAvailable) this.$emit("move", {
          _from: this.currentPlayer.position,
          _to: number,
          transport: 2
        });

        //this.$emit("move", number);
      }
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

.status-changed-panel-transition-enter-active,
.status-changed-panel-transition-leave-active {
  transition: all 1s ease;
}

.status-changed-panel-transition-enter-from{
  transform: translateX(-2000px);
}

.status-changed-panel-transition-leave-to{
  transform: translateX(2000px);
}

</style>