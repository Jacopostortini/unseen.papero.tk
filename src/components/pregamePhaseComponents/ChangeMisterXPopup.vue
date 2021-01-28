<template>
  <div class="change-popup__main-panel">
    <div class="change-popup__table-panel"/>
    <div class="change-popup__available-pawns">
      <div class="change-popup__player-label"
           :class="{'player-label__admin-player': player.is_admin}"
           v-for="player in players"
           v-show="!player.is_mister_x"
           :key="player.local_id">
        <img :src="player.is_mister_x ? '/assets/pawn_mister_x.png' : '/assets/pawn_'+player.color+'.png'" @click="$emit('changemisterx', player.local_id)">

        <div class="player-label__info-labels">
          <strong class="player-label__username-label">{{player.username}}</strong>
          <strong class="player-label__is-you-label" v-if="player.local_id===currentPlayer.local_id">You</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ChangeMisterXPopup",
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
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .change-popup__player-label {

      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      position: relative;
      margin: 0 2% 0 2%;
      width: 100%;
      height: 150%;
      top: 43%;

      img {
        height: 50%;
        transition: transform 0.25s;

        &:hover{
          transform: scale(1.1);
        }
      }

      .player-label__info-labels{
        height: 40%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: start;


        &>*{
          margin-bottom: 10%;
        }

        .player-label__is-you-label{
          color: $anti-theme-color;
        }
      }

    }
  }

}

</style>