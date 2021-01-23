<template>
  <div class="player-label__main-panel" :class="{'player-label__admin-player': player.isAdmin}">
    <img :src="'/assets/pedina_'+color+'.png'">
    <strong>{{ player.username }}</strong>
    <button v-if="isAdmin && !isYou">Kick</button>
    <div v-if="isYou">You</div>
    <div v-if="player.isAdmin" class="player-label__admin-badge">Admin</div>
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
    color: {
      type: Number,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    isYou: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.player-label__main-panel{
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2em;
  height: 40%;
  margin: 1%;
  padding: 1%;

  img{
    height: 30%;
  }

  button{
    margin: 10%;
    color: white;
    background: none;
    border: none;
    font-size: 0.5em;
    text-decoration: underline;

    &:focus{
      outline: none;
    }

    &:active{
      outline: auto;
    }
  }

  div{
    margin: 10%;
    color: white;
    background: none;
    border: none;
    font-size: 0.5em;
  }

  .player-label__admin-badge{
    color: red;
  }
}

.player-label__admin-player{
  border: 1px dashed white;
  border-radius: 10px;
}
</style>