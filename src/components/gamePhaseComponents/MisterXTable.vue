<template>
  <div class="mister-x-table__main-panel">
    <div class="mister-x-table__turn__wrapper" v-for="n in gameConfig.number_of_total_turns" :key="n">
      <div class="mister-x-table__turn-number"
              :class="{'mister-x-table__revelation-turn-number': gameConfig.mister_x_is_visible_turns.includes(n)}">
        <span>{{ n }}</span>
      </div>
      <div class="mister-x-table__turn-transport">
        <TransportCard v-if="misterXMoves[n-1]!==null"
                       :class="{'revelation': misterXMoves[n-1] ? misterXMoves[n-1].position : false}"
                       :color="misterXMoves[n-1] ? colors[misterXMoves[n-1].transport] : null"
                       :src="misterXMoves[n-1] ? src[misterXMoves[n-1].transport] : null"/>
        <strong v-if="misterXMoves[n-1] ? misterXMoves[n-1].position : false">
          {{misterXMoves[n-1].position}}
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
import { gameConfig } from "../../constants/constants";
import TransportCard from "./TransportCard";

export default {
  name: "MisterXTable",
  components: {TransportCard},
  props: {
    misterXMoves: Array
  },
  data(){
    return {
      gameConfig,
      colors: ["yellow", "blue", "red", "black"],
      src: [
        require("../../assets/meansOfTransport/taxi_icon.png"),
        require("../../assets/meansOfTransport/bus_icon.png"),
        require("../../assets/meansOfTransport/underground_icon.svg"),
        require("../../assets/meansOfTransport/secret_transport_icon.png"),
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.mister-x-table__main-panel{
  margin: 5%;
  padding: 5%;
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  flex-wrap: wrap;
  background-color: black;
  border-radius: 20px;

  .mister-x-table__turn__wrapper{
    margin: 1%;
    display: flex;
    align-items: center;

    .mister-x-table__turn-number{
      padding: 0.5vh;
      border-radius: 50%;
      height: 3vh;
      width: 3vh;
      font-size: 3vh;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;

      &.mister-x-table__revelation-turn-number{
        border-color: white;
      }
    }

    .mister-x-table__turn-transport{
      background-color: white;
      height: 3vh;
      width: 3vw;
      max-width: 6vh;
      border-radius: 10px;
      margin-left: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;

      .transport-card__main-panel{
        z-index: 1;
        height: 150%;
        width: 150%;
        border-radius: 10px;
        margin: 0;
        transition: all 0.5s;

        &.revelation:hover{
          opacity: 0;
        }
      }

      strong {
        font-size: 2vh;
        position: absolute;
        color: black;
      }
    }
  }

}
</style>