<template>
  <div class="mister-x-table__main-panel" :style="{gridTemplateRows: 'repeat('+gameConfig.number_of_total_turns/4+', 1fr)'}">
    <div class="mister-x-table__turn__wrapper" v-for="n in gameConfig.number_of_total_turns" :key="n">
      <div class="mister-x-table__turn-number"
              :class="{'mister-x-table__revelation-turn-number': gameConfig.mister_x_is_visible_turns.includes(n)}">
        {{ n }}
      </div>
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
  width: 90%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5% 2%;
  grid-auto-flow: column;
  background-color: black;
  border-radius: 10px;
  padding: 2%;

  .mister-x-table__turn__wrapper{
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-evenly;

    .mister-x-table__turn-number{
      display: flex;
      font-weight: bolder;
      width: 1.5em;
      height: 1.5em;
      color: white;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
    }

    .mister-x-table__revelation-turn-number{
      border: 2px solid white;
    }

    .mister-x-table__turn-transport{
      background-color: white;
      height: 80%;
      width: 50%;
      border-radius: 10px;
    }
  }
}
</style>