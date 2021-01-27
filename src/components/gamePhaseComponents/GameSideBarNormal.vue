<template>
  <div class="game-sidebar-normal__main-panel">
    <div class="game-sidebar-normal__players">
      <PlayerLabel v-for="player in players"
                   :key="player.local_id"
                   :player="player"
                   :is-playing="player.local_id===game.playingPlayer"/>
    </div>
    <div class="game-sidebar-normal__transport-cards">
      <div class="game-sidebar-normal__transport-wrapper">
        <TransportCard v-for="n in remainingTaxis"
                      :key="n"
                      src="/assets/taxi_icon.png"
                      color="yellow"/>
      </div>
      <div class="game-sidebar-normal__transport-wrapper">
        <TransportCard v-for="n in remainingBuses"
                      :key="n"
                      src="/assets/bus_icon.png"
                      color="blue"/>
      </div>
      <div class="game-sidebar-normal__transport-wrapper">
        <TransportCard v-for="n in remainingUndergrounds"
                      :key="n"
                      src="/assets/underground_icon.svg"
                      color="red"/>
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
  name: "GameSideBarNormal",
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
    }
  }
}
</script>

<style lang="scss" scoped>

.game-sidebar-normal__main-panel{
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  row-gap: 3%;
  justify-content: space-evenly;

  .game-sidebar-normal__players{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 5%;
  }

  .game-sidebar-normal__transport-cards{
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;

    .game-sidebar-normal__transport-wrapper{
      margin: 2%;
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