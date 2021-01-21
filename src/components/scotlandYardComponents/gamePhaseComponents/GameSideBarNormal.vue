<template>
  <div class="game-sidebar-normal__main-panel">
    <div class="game-sidebar-normal__players">
      <PlayerLabel v-for="(player, index) in game.players"
                   :key="index"
                   :username="player.username"
                   :is-mister-x="player.is_mister_x"
                   :is-playing="index===game.total_moves%game.players.length"
                   :color="player.color"/>
    </div>
    <div class="game-sidebar-normal__transport-cards">
      <div>
        <TransportCard v-for="n in gameConfig.taxi-user.used_taxi"
                      :key="n"
                      src="/assets/taxi_icon.png"
                      color="yellow"/>
      </div>
      <div>
        <TransportCard v-for="n in gameConfig.bus-user.used_bus"
                      :key="n"
                      src="/assets/bus_icon.png"
                      color="blue"/>
      </div>
      <div>
        <TransportCard v-for="n in gameConfig.underground-user.used_underground"
                      :key="n"
                      src="/assets/underground_icon.svg"
                      color="red"/>
      </div>
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
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;

  .game-sidebar-normal__players{
    margin: 5px;
    align-self: start;
    width: 100%;
  }
  .game-sidebar-normal__transport-cards{
    display: flex;
    flex-flow: column;

    div{
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
    }
  }
}
</style>