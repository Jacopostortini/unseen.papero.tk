<template>
  <div class="player-label__main-panel" :class="{'player-label__admin-player': player.is_admin}">
    <img :src="'/assets/pedina_'+player.color+'.png'">

    <div class="player-label__info-labels">
      <strong class="player-label__username-label">{{player.username}}</strong>
      <strong class="player-label__is-you-label" v-if="isYou">You</strong>
    </div>
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
    currentPlayer: {
      required: true
    }
  },
  computed: {
    isYou: function(){
      if(this.currentPlayer){
        return this.currentPlayer.local_id === this.player.local_id;
      } else return false;
    }
  }
}
</script>

<style lang="scss" scoped>

.player-label__main-panel {

  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 100%;
  text-align: center;
  position: relative;
  margin: 0 2% 0 2%;


  img {
    height: 50%;
    transition: transform 0.25s;

    &:hover{
      transform: scale(1.2);
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
      color: red;
    }
  }

}

</style>