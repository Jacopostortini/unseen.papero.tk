<template>
  <div class="player-label__main-panel">
    <img :src="player.is_mister_x ? require('@/assets/pawns/pawn_mister_x.png') : require('@/assets/pawns/pawn_'+player.color+'.png')"/>
    <strong :class="{'underlined': isPlaying}">{{ player.username }}</strong>
  </div>
</template>

<script>
import {colors} from "../../constants/constants";

export default {
  name: "PlayerLabel",
  props: {
    player: {
      type: Object,
      required: true
    },
    isPlaying: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    playerColor: function (){
      return colors[this.player.color];
    }
  }
}
</script>

<style lang="scss" scoped>

.player-label__main-panel{
  margin: 1%;
  display: flex;
  flex-flow: row;
  align-items: center;
  //justify-content: space-between;

  strong{
    font-size: 3vh;
    color: white;

    &.underlined{
      text-decoration: underline;
    }
  }

  img {
    margin: 0 2% 0 5%;
    height: 10vh;
  }
}
</style>