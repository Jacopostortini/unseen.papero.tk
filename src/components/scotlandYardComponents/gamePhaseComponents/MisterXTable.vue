<template>
  <div class="mister-x-table__main-panel" :style="{gridTemplateRows: 'repeat('+gameConfig.number_of_total_turns/4+', auto)'}">
    <div class="mister-x-table__turn__wrapper" v-for="n in gameConfig.number_of_total_turns" :key="n">
      <strong class="mister-x-table__turn-number"
              :class="{'mister-x-table__revelation-turn-number': gameConfig.mister_x_is_visible_turns.includes(n)}">
        {{ n }}
      </strong>
      <div class="mister-x-table__turn-transport"/>
    </div>
  </div>
</template>

<script>
import { gameConfig } from "../../../constants/scotlandYardConstants";

export default {
  name: "MisterXTable",
  data(){
    return {
      gameConfig
    }
  }
}
</script>

<style lang="scss" scoped>

.mister-x-table__main-panel{
  width: 80%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 2%;
  row-gap: 2%;
  grid-auto-flow: column;
  background-color: black;
  border-radius: 10px;
  padding: 1%;
  margin: 1% 1% 2% 1%;

  .mister-x-table__turn__wrapper{
    display: flex;
    flex-flow: row;
    align-items: center;

    .mister-x-table__turn-number{
      color: white;
      margin: 5% 0 5% 0;
      padding: 5px;
      width: 1em;
      height: 1em;
      text-align: center;
      border-radius: 50%;
    }

    .mister-x-table__revelation-turn-number{
      //border: 1px solid white;
    }

    .mister-x-table__turn-transport{
      background-color: white;
      width: 80%;
      height: 80%;
      border-radius: 10px;
    }
  }
}
</style>