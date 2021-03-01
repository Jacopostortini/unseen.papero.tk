<template>
  <div class="player-label__main-panel"
       :class="{'offline': !player.online}">
    <img :src="player.is_mister_x ? require('@/assets/pawns/pawn_mister_x.png') : require('@/assets/pawns/pawn_'+player.color+'.png')"/>
    <strong :class="{'underlined': isPlaying, 'offline': !player.online}">{{ player.username }} <span v-if="!player.online"><br>(offline)</span> </strong>
  </div>
</template>

<script>

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
  }
}
</script>

<style lang="scss" scoped>

.player-label__main-panel{
  margin: 1%;
  display: flex;
  flex-flow: row;
  align-items: center;

  &.offline{
    opacity: 0.4 !important;
    color: gray !important;
  }

  strong{
    font-size: 3vh;
    color: white;

    &.underlined{
      text-decoration: underline;
    }

    span{
      font-size: 2vh;
      font-weight: normal;
    }
  }

  img {
    margin: 0 2% 0 5%;
    height: 10vh;
  }
}
</style>