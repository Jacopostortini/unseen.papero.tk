<template>
  <div class="change-popup__main-panel">
    <div class="change-popup__table-panel"/>
    <div class="change-popup__available-pawns">
      <PlayerLabel v-for="player in players"
                   :key="player.local_id"
                   v-show="!player.is_mister_x"
                   :player="player"
                   :current-player="currentPlayer"
                   @kickplayer="$emit('kickplayer', $event)"
                   @click="$emit('changemisterx', player.local_id)"/>
    </div>
  </div>
</template>

<script>
import PlayerLabel from "./PlayerLabel";

export default {
  name: "ChangeMisterXPopup",
  components: {PlayerLabel},
  props: {
    players: {
      type: Array,
      required: true
    },
    currentPlayer: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";

.change-popup__main-panel{
  width: 50%;
  height: 40%;
  position: relative;
  color: white;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  .change-popup__table-panel {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 12%;
    background-color: $anti-theme-color;
    transform: skewX(80deg);
  }

  .change-popup__available-pawns{
    z-index: 1000;
    padding-bottom: 2%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
  }

}

</style>