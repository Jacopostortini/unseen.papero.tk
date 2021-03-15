<template>
  <div class="change-popup__main-panel">
    <div class="change-popup__table-panel"/>
    <div class="change-popup__available-pawns">
      <img :src="require('@/assets/pawns/pawn_'+n+'.png')" v-for="n in colorsAvailable" :key="n" @click="$emit('changecolor', n)">
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
      for (let i=0; i<colors.numberOfNonMisterX; i++){
        if(!colorsUnavailable.includes(i)) colorsAvailable.push(i);
      }
      return colorsAvailable;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";

.change-popup__main-panel{
  width: 50%;
  height: fit-content;
  position: relative;
  color: white;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 80%;
  }

  .change-popup__table-panel {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 12%;
    background-color: white;
    transform: skewX(80deg);
  }

  .change-popup__available-pawns{
    z-index: 2;
    padding-bottom: 2%;

    img{
      width: 10%;
      margin-right: 5%;
      transition: transform 0.25s;


      @media (max-width: 700px) {
        width: 15%;
      }

      &:hover{
        transform: scale(1.1);
      }
    }
  }

}

</style>