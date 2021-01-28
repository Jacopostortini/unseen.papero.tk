<template>
  <div class="pregame-phase__main-panel">
    <header class="pregame-phase__header">
      Scotland Yard
    </header>
    <div class="pregame-phase__players">
      <div class="pregame-phase__players-table"/>
      <PlayerLabel v-for="player in players"
                   :key="player.local_id"
                   :player="player"
                   :current-player="currentPlayer"
                   @kickplayer="$emit('kickplayer', $event)"/>
    </div>
    <div class="pregame-phase__buttons">
      <button v-if="currentPlayer && !currentPlayer.is_mister_x" @click="showChangeColorPopup=true">Change your pawn</button>
      <button v-if="!currentPlayer" @click="$emit('joingame')">Join game</button>
      <button v-if="currentPlayer && currentPlayer.is_admin" @click="$emit('startgame')">Start game</button>
      <button v-if="currentPlayer && currentPlayer.is_admin" @click="showChangeMisterXPopup=true">Choose Mister X</button>
      <button v-if="currentPlayer && players.length!==1" @click="$emit('quitgame')">Quit game</button>
    </div>
    <div class="pregame-phase__information-panel">
      <div class="pregame-phase__copy-url">
        <label for="pregame-phase__url">Copy the url and share it with your friends!</label>
        <br>
        <input id="pregame-phase__url" readonly :value="url">
        <button v-clipboard:copy="url">Copy</button>
      </div>
      <div class="pregame-phase__copy-tag">
        <label for="pregame-phase__tag">Or send them this tag!</label>
        <br>
        <p id="pregame-phase__tag">{{ id }}</p>
        <button v-clipboard:copy="id">Copy</button>
      </div>
      <div class="pregame-phase__admin-and-mister-x">
        <p>The admin of this lobby is: <strong>{{ adminUsername }}</strong></p>
      </div>
    </div>
    <div class="pregame-phase__popup" v-if="showChangeColorPopup" @click="showChangeColorPopup=false">
      <ChangeColorPopup :players="players" @changecolor="$emit('changecolor', $event)"/>
    </div>
    <div class="pregame-phase__popup" v-if="showChangeMisterXPopup" @click="showChangeMisterXPopup=false">
      <ChangeMisterXPopup :players="players" :current-player="currentPlayer" @changemisterx="$emit('changemisterx', $event)"/>
    </div>
  </div>
</template>

<script>
import PlayerLabel from "./pregamePhaseComponents/PlayerLabel";
import {useRoute} from "vue-router";
import ChangeColorPopup from "./pregamePhaseComponents/ChangeColorPopup";
import ChangeMisterXPopup from "./pregamePhaseComponents/ChangeMisterXPopup";
export default {
  name: "PregamePhase",
  components: {ChangeMisterXPopup, ChangeColorPopup, PlayerLabel},
  props: {
    players: {
      type: Array,
      required: true
    },
    currentPlayer: {
      required: true
    }
  },
  data(){
    return {
      showChangeColorPopup: false,
      showChangeMisterXPopup: false
    }
  },
  computed: {
    url: function() {
      return window.location;
    },
    id: function() {
      return useRoute().params.gameId;
    },
    adminUsername: function() {
      for (let i=0; i<this.players.length; i++){
        if(this.players[i].is_admin) return this.players[i].username;
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.pregame-phase__main-panel{
  background: linear-gradient(-30deg, $theme-color-light, $theme-color-dark);
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr auto;
  grid-template-rows: 20% 50% 30%;
  grid-template-areas: "header header header" "players players info" "footer footer footer";
  height: 100%;
  padding-right: 5%;

  .pregame-phase__header{
    grid-area: header;
    color: white;
    font-weight: bolder;
    font-size: 2em;
  }

  .pregame-phase__players{
    grid-area: players;
    color: white;
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: center;
    min-width: 30%;
    height: 70%;
    padding-left: 5%;
    margin-right: 25%;


    .pregame-phase__players-table{
      position: absolute;
      top: 47%;
      left: 0;
      width: 120%;
      height: 8%;
      background-color: $anti-theme-color;
      transform: skewX(80deg);
    }

  }

  .pregame-phase__buttons{
    grid-area: footer;
    display: flex;
    flex-flow: row;
    width: 100%;
    justify-content: space-evenly;

    button{
      font-size: 2em;
      border: none;
      border-radius: 20px;
      padding: 2%;
      color: $theme-color-dark;
      box-shadow: 1px 1px 5px gray;
      height: fit-content;

      &:active{
        transform: translate(1px);
        box-shadow: none;
      }

      &:focus{
        outline: none;
      }
    }
  }

  .pregame-phase__information-panel{
    grid-area: info;
    color: white;

    strong{
      color: $anti-theme-color;
    }

    .pregame-phase__copy-url{

      input{
        margin-top: 10px;
        margin-right: 10px;
        width: 300px;
        color: $theme-color-dark;
      }
    }

    .pregame-phase__copy-tag{
      margin-top: 50px;

      p {
        display: inline-block;
        color: $theme-color-dark;
        background-color: white;
        padding: 10px;
        margin-right: 10px;
      }

      button{
        display: inline-block;
      }
    }
  }

  .pregame-phase__popup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>