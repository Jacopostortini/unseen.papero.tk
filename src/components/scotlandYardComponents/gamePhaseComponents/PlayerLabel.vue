<template>
  <div class="player-label__main-panel">
    <div class="player-label__player-information">
      <div class="player-label__color-badge" :style="{backgroundColor: colors[color]}"></div>
      <strong>{{ username }}</strong>
      <img v-if="isMisterX" src="/assets/misterx_icon.png">
    </div>
    <div class="player-label__playing-badge" v-if="isPlaying"></div>
  </div>
</template>

<script>
import {colors} from "../../../constants/scotlandYardConstants";

export default {
  name: "PlayerLabel",
  props: {
    username: {
      type: String,
      required: true
    },
    isMisterX: {
      type: Boolean,
      required: true
    },
    isPlaying: {
      type: Boolean,
      required: true
    },
    color: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      colors
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
  padding-right: 20px;

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

  .player-label__playing-badge{
    border-top: 2px solid white;
    border-left: 2px solid white;
    width: 10px;
    height: 10px;
    transform: rotate(-45deg);
  }
}
</style>