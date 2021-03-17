<template>
  <div class="post-game-sidebar__main-panel">
    <div class="post-game-sidebar__title">
      <button v-if="currentPlayer && currentPlayer.is_admin" @click="$emit('restart-game', true)">Restart game</button>
      <button v-else @click="backToLobby" v-is="element">{{ msg }}</button>
    </div>

    <div class="post-game-sidebar__players">
      <PlayerLabel v-for="player in players"
                   :key="player.local_id"
                   :player="player"
                   :is-playing="player.local_id===game.playingPlayer"/>
    </div>

    <div class="mister-x-table__wrapper">
      <MisterXTable :mister-x-moves="game.misterXMoves"/>
    </div>

    <div class="winning-badge">
      <strong>{{game.misterXWon ? "Mister X won!" : "The detectives won!"}}</strong>
    </div>
  </div>
</template>

<script>
import PlayerLabel from "../gamePhaseComponents/PlayerLabel";
import MisterXTable from "../postGamePhaseComponents/MisterXTable";
import LoadingBackToLobby from "./LoadingBackToLobby";

export default {
  name: "PostGameSideBar",
  components: {MisterXTable, PlayerLabel, LoadingBackToLobby},
  props: {
    players: Array,
    game: Object,
    currentPlayer: Object,
    gameRestarted: Boolean
  },
  data(){
    return {
      wantToGoBack: false,
      element: "button",
      msg: "Back to lobby"
    }
  },
  methods: {
    backToLobby(){
      if(this.gameRestarted) this.$emit("restart-game", false);
      else {
        this.wantToGoBack = true;
        this.msg = null
        this.element = "LoadingBackToLobby"
      }
    }
  },
  watch: {
    gameRestarted: function(val){
      if((this.wantToGoBack || (this.currentPlayer && this.currentPlayer.is_admin)) && val)
        this.$emit("restart-game", false);
    }
  }
}
</script>

<style lang="scss" scoped>

.post-game-sidebar__main-panel {
  grid-area: sidebar;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 1fr;
  grid-template-areas: "title" "labels" "mister-x-table" "winning-badge";

  justify-content: left;
  padding-top: 10px;

  .post-game-sidebar__title {
    grid-area: title;
    text-align: center;
    margin: 10px;

    button{
      font-size: 2vw;
      @media (max-width: 500px) {
        font-size: 4vw;
      }
    }
  }

  .post-game-sidebar__players {
    grid-area: labels;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

  .mister-x-table__wrapper{
    grid-area: mister-x-table;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: start;
  }

  .winning-badge{
    grid-area: winning-badge;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>