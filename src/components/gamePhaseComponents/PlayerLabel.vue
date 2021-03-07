<template>
  <div class="player-label__main-panel"
       :class="{'offline': !player.online}"
       @click="labelClicked">
    <img :src="player.is_mister_x ? require('@/assets/pawns/pawn_mister_x.png') : require('@/assets/pawns/pawn_'+player.color+'.png')"/>
    <strong :class="{'underlined': isPlaying, 'offline': !player.online}">{{ player.username }} <span v-if="!player.online"><br>(offline)</span> </strong>
  </div>
</template>

<script>
import mitt from "mitt";
window.mitt = window.mitt || new mitt();
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
  methods: {
    labelClicked(){
      window.mitt.emit("zoom-to-default");
      window.mitt.emit("zoom-to-pawn", this.player);
    }
  }
}
</script>

<style lang="scss" scoped>

.player-label__main-panel{
  margin: 2px;
  display: flex;
  flex-flow: row;
  align-items: center;

  &.offline{
    opacity: 0.4 !important;
    color: gray !important;
  }

  strong{
    font-size: 1.2vw;
    color: white;

    &.underlined{
      text-decoration: underline;
    }

    span{
      font-size: 1vw;
      font-weight: normal;
    }
  }

  img {
    margin: 0 2% 0 5%;
    width: 1.2vw;
  }
}
</style>