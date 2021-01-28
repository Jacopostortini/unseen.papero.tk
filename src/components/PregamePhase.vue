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
      <button v-if="currentPlayer && !currentPlayer.is_mister_x"
              @click="showChangeColorPopup=true">Change your pawn</button>
      <button class="pregame-phase__buttons__join-game"
              v-if="!currentPlayer"
              @click="$emit('joingame')">Join game</button>
      <button v-if="currentPlayer && currentPlayer.is_admin"
              @click="startGame">Start game</button>
      <button :class="{'pregame-phase__buttons__change-mister-x': !misterXUsername, 'pulse-mister-x': pulseMisterXButton}"
              v-if="currentPlayer && currentPlayer.is_admin"
              @click="showChangeMisterXPopup=true">Choose Mister X</button>
      <button v-if="currentPlayer && players.length!==1"
              @click="$emit('quitgame')">Quit game</button>
    </div>
    <div class="pregame-phase__information-panel">
      <div class="pregame-phase__copy-container" @mouseover="hoverUrl=true" @mouseleave="hoverUrl=false">
        <label for="pregame-phase__url">Copy the url and share it with your friends!</label>
        <br>
        <p id="pregame-phase__url" class="pregame-phase__copy">{{ url.toString() }}</p>
        <button v-clipboard:copy="url" :class="{'copy-hover': hoverUrl}" @click="onCopiedUrl">Copy<span :class="{'copied': copiedUrl}">Copied</span></button>
      </div>
      <div class="pregame-phase__copy-container" @mouseover="hoverTag=true" @mouseleave="hoverTag=false">
        <label for="pregame-phase__tag">Or send them this tag!</label>
        <br>
        <p id="pregame-phase__tag" class="pregame-phase__copy">{{ id }}</p>
        <button v-clipboard:copy="id" :class="{'copy-hover': hoverTag}" @click="onCopiedTag">Copy<span :class="{'copied': copiedTag}">Copied</span></button>
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
      showChangeMisterXPopup: false,
      hoverUrl: false,
      hoverTag: false,
      copiedUrl: false,
      copiedTag: false,
      pulseMisterXButton: false
    }
  },
  methods: {
    onCopiedUrl(){
      this.copiedUrl=true;
      const sleep = (s) => {
        return new Promise(resolve => setTimeout(resolve, (s*1000)))
      }
      sleep(1).then(()=>{this.copiedUrl=false});
    },
    onCopiedTag(){
      this.copiedTag=true;
      const sleep = (s) => {
        return new Promise(resolve => setTimeout(resolve, (s*1000)))
      }
      sleep(1).then(()=>{this.copiedTag=false});
    },
    startGame(){
      if(this.misterXUsername){
        this.$emit("startGame");
      } else {
        this.pulseMisterXButton = true;
        const sleep = (s) => {
          return new Promise(resolve => setTimeout(resolve, (s*1000)))
        }
        sleep(1).then(()=>{this.pulseMisterXButton = false});
      }
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
    },
    misterXUsername: function() {
      for (let i=0; i<this.players.length; i++){
        if(this.players[i].is_mister_x) return this.players[i].username;
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
    height: 100%;
    padding-left: 5%;
    margin-right: 25%;


    .pregame-phase__players-table{
      position: absolute;
      top: 56%;
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
      border: 1px solid white;
      padding: 1%;
      font-size: 1.5em;
      color: white;
      background: none;
      height: fit-content;
      margin: 1%;
      transition: all 0.5s;

      &:hover{
        background-color: white;
        color: $theme-color-light;
        animation-play-state: paused;
      }

      &:active{
        transform: translate(1px);
        box-shadow: none;
      }

      &:focus{
        outline: none;
      }
    }

    .pregame-phase__buttons__join-game{
      animation: button-anim 2s infinite linear;
    }

    .pregame-phase__buttons__change-mister-x{
      animation: button-anim 2s infinite linear;
    }

    .pulse-mister-x{
      animation: pulse 1s;
    }

    @keyframes button-anim {
      0% {transform: rotate(0deg)}
      40% {transform: rotate(0deg)}
      42% {transform: rotate(5deg)}
      44% {transform: rotate(0deg)}
      46% {transform: rotate(-5deg)}
      48% {transform: rotate(0deg)}
      100% {transform: rotate(0deg)}
    }

    @keyframes pulse {
      0% {transform: rotate(0deg) scale(1); background-color: white; color: $theme-color-light}
      10% {transform: rotate(0deg) scale(1.1); background-color: white; color: $theme-color-light}
      30% {transform: rotate(0deg) scale(1.1); background-color: white; color: $theme-color-light}
      40% {transform: rotate(5deg) scale(1.1); background-color: white; color: $theme-color-light}
      50% {transform: rotate(0deg) scale(1.1); background-color: white; color: $theme-color-light}
      60% {transform: rotate(-5deg) scale(1.1); background-color: white; color: $theme-color-light}
      70% {transform: rotate(0deg) scale(1.1); background-color: white; color: $theme-color-light}
      90% {transform: rotate(0deg) scale(1.1); background-color: white; color: $theme-color-light}
      100% {transform: rotate(0deg) scale(1); background-color: white; color: $theme-color-light}
    }
  }

  .pregame-phase__information-panel{
    grid-area: info;
    color: white;

    .copy-hover:not(span){
      color: white;
    }

    .copied{
      animation: copied 1s;
    }

    button {
      background: none;
      border: none;
      color: transparent;
      font-weight: bold;
      font-size: 0.7em;
      transition: color 0.5s;
      position: relative;

      span{
        position: absolute;
        left: 0;
        color: transparent;
      }

      &:focus{
        outline: none;
      }
    }

    @keyframes copied {
      0% {
        color: white;
        transform: translateY(0) scale(0);
      }
      75%{
        transform: translateY(-15px) scale(1);
        color: rgba(255, 255, 255, 200);
      }
      100% {
        transform: translateY(-20px) scale(1);
        color: transparent;
      }
    }

    strong{
      color: $anti-theme-color;
    }

    .pregame-phase__copy-container{
      margin-top: 50px;

      .pregame-phase__copy {
        display: inline-block;
        color: white;
        border: 2px solid white;
        padding: 10px;
        margin-right: 10px;
        font-variant: normal;
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