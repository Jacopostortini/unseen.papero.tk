<template>
  <div class="game-phase__main-panel">
    <transition name="status-changed-panel-transition">
      <StatusChangedPanel v-if="changedStatusPanel.show"
                          :title="changedStatusPanel.title"
                          :description="changedStatusPanel.description"
                          @close-status-changed-panel="$emit('close-status-changed-panel')"/>
    </transition>
    <MapManager class="game-phase__map-manager"
                :players="players"
                :current-player="currentPlayer"
                :auto-zoom="true"
                @station-clicked="stationClicked"/>
    <GameSideBar class="game-phase__game-stats"
                 :players="players"
                 :current-player="currentPlayer"
                 :game="game"
                 @use-double-turn="$emit('use-double-turn')"/>
    <ChoiceOfTransportPopup v-if="transportChoice.show"
                            :choices="transportChoice.choices"
                            @transport-chosen="onTransportChosen"
                            @close-popup="transportChoice.show=false"/>
  </div>
</template>

<script>
import GameSideBar from "./gamePhaseComponents/GameSideBar";
import {defineAsyncComponent} from "vue";
import LoadingMap from "./gamePhaseComponents/LoadingMap";
import {loaderParameters} from "../constants/mapConstants";
import StatusChangedPanel from "./gamePhaseComponents/StatusChangedPanel";
import ChoiceOfTransportPopup from "./gamePhaseComponents/ChoiceOfTransportPopup";
import {gameConfig} from "../constants/constants";

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
    ChoiceOfTransportPopup,
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
  data(){
    return {
      transportChoice: {
        show: false,
        choices: []
      }
    }
  },
  methods: {
    stationClicked(number){
      if (this.currentPlayer.local_id === this.game.playingPlayer){
        let available = [];
        let taxiAvailable = this.currentPlayer.available_moves.taxi.includes(number);
        let busAvailable = this.currentPlayer.available_moves.bus.includes(number);
        let undergroundAvailable = this.currentPlayer.available_moves.underground.includes(number);
        available.push(taxiAvailable, busAvailable, undergroundAvailable);
        let choices = [];
        available.forEach((a,index) => {
          if(a) choices.push(index);
        });
        if(choices.length===0) return;
        if(this.currentPlayer.is_mister_x && this.currentPlayer.used_secret_moves<gameConfig.secret_moves) choices.push(3);
        if(choices.length===1) {
          this.$emit("move", {
            _from: this.currentPlayer.position,
            _to: number,
            transport: choices[0]
          });
        } else {
          this.showChoicePopup(choices, number);
        }
      }
    },
    showChoicePopup(choices, number){
      this.transportChoice.choices = choices;
      this.transportChoice.show = true;
      this.transportChoice.number = number
    },
    onTransportChosen(transport){
      this.transportChoice.show = false;
      this.$emit("move", {
        _from: this.currentPlayer.position,
        _to: this.transportChoice.number,
        transport: transport
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.game-phase__main-panel{
  user-select: none;
  display: grid;
  grid-template-columns: #{"min(150vh, 80%)"} 1fr;
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