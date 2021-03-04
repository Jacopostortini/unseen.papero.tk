<template>
  <div class="game-sidebar-normal__main-panel">

    <div class="game-sidebar__title" @click="redirectHome">
      <h1>Unseen</h1>
    </div>

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
    </div>

    <div class="double-turn-cards" v-if="currentPlayer.is_mister_x">
      <div class="double-turn-cards__wrapper" v-if="remainingDoubleTurn">
        <div v-for="n in remainingDoubleTurn"
                       :key="n">
          <button @click="useDoubleTurn">Use double turn</button>
        </div>
      </div>
    </div>

    <div class="game-sidebar-normal__misterx-table">
      <MisterXTable :mister-x-moves="game.misterXMoves"/>
    </div>
  </div>
</template>

<script>
import PlayerLabel from "./PlayerLabel";
import TransportCard from "./TransportCard";
import { gameConfig } from "../../constants/constants";
import MisterXTable from "./MisterXTable";
import {useRouter} from "vue-router";
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
  data(){
    return {
      router: useRouter()
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
      return gameConfig.secret_moves-this.currentPlayer.used_secret_moves;
    },
    remainingDoubleTurn: function (){
      return gameConfig.double_turns-this.currentPlayer.used_double_turns;
    }
  },
  methods: {
    redirectHome(){
      this.router.push({name: "Home"})
    },
    useDoubleTurn(){
      if(this.currentPlayer.local_id === this.game.playingPlayer && this.currentPlayer.is_mister_x){
        this.$emit("use-double-turn");
      }
    }
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
  grid-template-rows: auto auto auto auto 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "title" "labels" "transports" "double-turns" "mister-x-table";

  justify-content: left;
  padding-top: 10px;

  .game-sidebar__title{
    grid-area: title;

    h1{
      cursor: pointer;
      text-align: center;
      font-size: 5vh;
      margin: 0;
      font-weight: normal;
      font-family: Eutemia;
    }

  }

  .game-sidebar-normal__players{
    grid-area: labels;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

  .game-sidebar-normal__transport-cards{
    grid-area: transports;
    display: flex;
    flex-flow: column;

    .game-sidebar-normal__transport-wrapper{
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
    }
  }

  .double-turn-cards{
    margin: 20px;
    grid-area: double-turns;

    .double-turn-cards__wrapper{
      display: grid;
      align-items: center;
      justify-content: space-evenly;
      grid-auto-flow: column;

      div{
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;

        button{
          border-top-color: red;
          border-left-color: blue;
          border-right-color: yellow;
          border-bottom-color: green;
          font-size: 3vh;
          background: -webkit-linear-gradient(0, yellow, red);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          &:hover{
            border-color: white;
          }
        }
      }
    }
  }

  .game-sidebar-normal__misterx-table{
    grid-area: mister-x-table;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: start;
  }
}
</style>