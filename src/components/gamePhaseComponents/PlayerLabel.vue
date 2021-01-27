<template>
  <div class="player-label__main-panel">
    <div class="player-label__player-information" :class="{'player-label__playing-player': isPlaying}">
      <div class="player-label__color-badge" :style="{backgroundColor: playerColor}"></div>
      <strong>{{ player.username }}</strong>
      <img v-if="player.is_mister_x" src="/assets/misterx_icon.png">
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

    .player-label__color-badge{
      border-radius: 50%;
      border: 2px solid white;
      max-width: 20px;
      max-height: 20px;
      width: 1em;
      height: 1em;
      margin-right: 10px;
    }

    strong{
      font-size: 1em;
    }

    img{
      height: 1.5em;
    }
  }

  .player-label__playing-player{
    transform: scale(1.5);
  }
}
</style>