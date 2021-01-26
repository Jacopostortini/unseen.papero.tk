<template>
  <div class="change-color-popup__main-panel">
    <h1>Choose your pawn</h1>
    <div class="change-color-popup__table-panel"/>
    <div class="change-color-popup__available-pawns">
      <img :src="'/assets/pedina_'+n+'.png'" v-for="n in colorsAvailable" :key="n" @click="$emit('changecolor', n)">
    </div>
  </div>
</template>

<script>
import { colors } from "../../constants/constants";

export default {
  name: "ChangeColorPopup",
  props: {
    players: {
      type: Array,
      required: true
    }
  },
  computed: {
    colorsAvailable: function (){
      let colorsUnavailable = [];
      for (let i=0; i<this.players.length; i++){
        colorsUnavailable.push(this.players[i].color);
      }
      let colorsAvailable = [];
      for (let i=0; i<colors.length; i++){
        if(!colorsUnavailable.includes(i)) colorsAvailable.push(i);
      }
      return colorsAvailable;
    }
  }
}
</script>

<style lang="scss" scoped>

.change-color-popup__main-panel{
  width: 50%;
  height: 40%;
  position: relative;
  color: white;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  .change-color-popup__table-panel {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 12%;
    background-color: white;
    transform: skewX(80deg);
  }

  .change-color-popup__available-pawns{
    z-index: 1000;
    padding-bottom: 2%;

    img{
      width: 10%;
      margin-right: 5%;
      transition: transform 0.25s;

      &:hover{
        transform: scale(1.1);
      }
    }
  }

}

</style>