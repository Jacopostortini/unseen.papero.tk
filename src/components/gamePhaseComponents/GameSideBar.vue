<template>
  <div class="game-sidebar-normal__main-panel">
    <div class="game-sidebar-normal__players">
      <PlayerLabel v-for="player in players"
                   :key="player.local_id"
                   :player="player"
                   :is-playing="player.local_id===game.playingPlayer"/>
    </div>


    <div class="game-sidebar-normal__transport-cards" v-if="!currentPlayer.is_mister_x">
      <div class="game-sidebar-normal__transport-wrapper" v-if="remainingTaxis">
        <TransportCard v-for="n in remainingTaxis"
                      :key="n"
                      :src="require('@/assets/meansOfTransport/taxi_icon.png')"
                      color="yellow"/>
      </div>
      <div class="game-sidebar-normal__transport-wrapper" v-if="remainingBuses">
        <TransportCard v-for="n in remainingBuses"
                      :key="n"
                      :src="require('@/assets/meansOfTransport/bus_icon.png')"
                      color="blue"/>
      </div>
      <div class="game-sidebar-normal__transport-wrapper" v-if="remainingUndergrounds">
        <TransportCard v-for="n in remainingUndergrounds"
                      :key="n"
                      :src="require('@/assets/meansOfTransport/underground_icon.svg')"
                      color="red"/>
      </div>
    </div>
    <div class="game-sidebar-normal__transport-cards" v-else>
      <div class="game-sidebar-normal__transport-wrapper" v-if="remainingSecretMoves">
        <TransportCard v-for="n in remainingSecretMoves"
                       :key="n"
                       :src="require('@/assets/meansOfTransport/secret_transport_icon.png')"
                       color="black"/>
      </div>
      <div class="game-sidebar-normal__transport-wrapper" v-if="remainingDoubleTurn">
        <TransportCard v-for="n in remainingDoubleTurn"
                       :key="n"
                       :src="require('@/assets/meansOfTransport/2x_icon.png')"
                       color="black"/>
      </div>
    </div>


    <div class="game-sidebar-normal__misterx-table">
      <MisterXTable/>
    </div>
  </div>
</template>

<script>
import PlayerLabel from "./PlayerLabel";
import TransportCard from "./TransportCard";
import { gameConfig } from "../../constants/constants";
import MisterXTable from "./MisterXTable";
export default {
  name: "GameSideBar",
  components: {MisterXTable, TransportCard, PlayerLabel},
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
  },
  computed: {
    remainingTaxis: function (){
      return gameConfig.taxi-this.currentPlayer.used_taxi;
    },
    remainingBuses: function (){
      return gameConfig.bus-this.currentPlayer.used_bus;
    },
    remainingUndergrounds: function (){
      return gameConfig.underground-this.currentPlayer.used_underground;
    },
    remainingSecretMoves: function (){
      console.log(gameConfig.taxi-this.currentPlayer.used_secret_moves);
      return gameConfig.secret_moves-this.currentPlayer.used_secret_moves;
    },
    remainingDoubleTurn: function (){
      return gameConfig.double_turns-this.currentPlayer.used_double_turns;
    },
  }
}
</script>

<style lang="scss" scoped>

.game-sidebar-normal__main-panel{
  grid-area: sidebar;

  background-image: url("../../assets/background_image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr;

  justify-content: left;
  padding-top: 10px;

  .game-sidebar-normal__players{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

  .game-sidebar-normal__transport-cards{
    display: flex;
    flex-flow: column;

    .game-sidebar-normal__transport-wrapper{
      margin: 1%;
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
    }
  }

  .game-sidebar-normal__misterx-table{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>