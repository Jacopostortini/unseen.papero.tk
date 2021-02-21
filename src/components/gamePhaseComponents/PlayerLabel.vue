<template>
  <div class="player-label__main-panel">
    <div class="player-label__player-information">
      <strong>{{ player.username }}</strong>
    </div>
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
  justify-content: space-between;

  .player-label__player-information{
    display: flex;
    flex-flow: row;
    align-items: center;

    strong{
      font-size: 2vh;
      color: black;
    }

    img{
      height: 1.5em;
    }
  }
}
</style>