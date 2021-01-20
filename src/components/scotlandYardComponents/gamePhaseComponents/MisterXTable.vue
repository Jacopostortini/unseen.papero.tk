<template>
  <div class="mister-x-table__main-panel" :style="{gridTemplateRows: 'repeat('+gameConfig.number_of_total_turns/3+', auto)'}">
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
  display: grid;
  grid-template-columns: auto auto auto;
  grid-auto-flow: column;
  background-color: black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;

  .mister-x-table__turn__wrapper{
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-evenly;

    .mister-x-table__turn-number{
      color: white;
      margin: 5px;
      padding: 5px;
      width: 1em;
      height: 1em;
      text-align: center;
      border-radius: 50%;
    }

    .mister-x-table__revelation-turn-number{
      border: 1px solid white;
    }

    .mister-x-table__turn-transport{
      background-color: white;
      margin: 5px;
      width: 70px;
      height: 40px;
      border-radius: 10px;
    }
  }
}
</style>