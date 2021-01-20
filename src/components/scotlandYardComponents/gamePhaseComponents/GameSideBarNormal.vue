<template>
  <div class="game-sidebar-normal__main-panel">
    <div class="game-sidebar-normal__players">
      <PlayerLabel v-for="(player, index) in game.players"
                   :key="index"
                   :name="player.name"
                   :is-mister-x="player.is_mister_x" :is-playing="index===game.total_moves%game.players.length"/>
    </div>
    <div class="game-sidebar-normal__transport-cards">
      <TransportCard v-for="n in gameConfig.taxi-user.used_taxi"
                     :key="n"
                     src="/assets/taxi_icon.png"
                     color="yellow"/>
      <TransportCard v-for="n in gameConfig.bus-user.used_bus"
                     :key="n"
                     src="/assets/bus_icon.png"
                     color="blue"/>
      <TransportCard v-for="n in gameConfig.underground-user.used_underground"
                     :key="n"
                     src="/assets/underground_icon.svg"
                     color="red"/>
    </div>
    <MisterXTable/>
  </div>
</template>

<script>
import PlayerLabel from "./PlayerLabel";
import TransportCard from "./TransportCard";
import { gameConfig } from "@/constants/scotlandYardConstants"
import MisterXTable from "./MisterXTable";
export default {
  name: "GameSideBarNormal",
  components: {MisterXTable, TransportCard, PlayerLabel},
  props: {
    game: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      gameConfig
    }
  }
}
</script>

<style lang="scss" scoped>
.game-sidebar-normal__main-panel{

  .game-sidebar-normal__players{

  }
  .game-sidebar-normal__transport-cards{
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
  }
}
</style>