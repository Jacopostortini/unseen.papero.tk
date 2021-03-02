<template>
  <div class="game__main-panel">
    <UserHamburgerMenu :show-chat="true"
                       :messages="messages"
                       :disable-logout="true"
                       :unread-messages="unreadMessages"
                       :src="hamburgerMenuImage"
                       :show="showHamburgerMenu"
                       @chat-opened="unreadMessages=false"
                       @send-message="sendMessage"
                       @toggle-show="showHamburgerMenu=$event"/>
    <PreGamePhase v-if="status===0"
                  :players="players"
                  :current-player="currentPlayer"
                  @joingame="joinGame"
                  @quitgame="quitGame"
                  @kickplayer="kickPlayer"
                  @changecolor="changeColor"
                  @changemisterx="changeMisterX"
                  @startgame="startGame"/>
    <GamePhase v-else-if="status===1"
               :players="players"
               :current-player="currentPlayer"
               :game="game"/>
    <PostGamePhase v-else-if="status===2"/>
  </div>
</template>

<script>
import {colorCorrispectives, webSocketUrl} from "../constants/constants";
import events from "../constants/webSocketEvents";
import {useRoute} from "vue-router";
import io from "socket.io-client";
import {defineAsyncComponent} from "vue";
import PreGamePhase from "../components/PreGamePhase";
import GamePhase from "../components/GamePhase";
import PostGamePhase from "../components/PostGamePhase";

const UserHamburgerMenu = defineAsyncComponent(() => import("../components/UserHamburgerMenu" /* webpackChunkName: "userHamburgerMenu" */));

export default {
  name: "Game",
  components: {
    UserHamburgerMenu,
    PreGamePhase,
    GamePhase,
    PostGamePhase
  },
  data(){
    return {
      socket: null,
      gameId: useRoute().params.gameId,
      status: undefined,
      currentPlayer: undefined,
      players: [],
      game: {},
      messages: [],
      unreadMessages: false,
      showHamburgerMenu: false
    }
  },
  computed: {
    hamburgerMenuImage: function () {
      switch (this.status){
        case 0:
          return require("@/assets/hamburger_icon_light.png");
        case 1:
          return require("@/assets/hamburger_icon_dark.png");
        case 2:
          return require("@/assets/hamburger_icon_light.png");
        default:
          return require("@/assets/hamburger_icon_light.png");
      }
    }
  },
  methods: {
    setupData(data) {
      console.log(data);
      this.status = data.status;
      if(data.your_local_id!=null){
        data.players.forEach(player => {
          if(player.local_id===data.your_local_id){
            this.currentPlayer = player;
          }
        })
      } else {
        this.currentPlayer = null;
      }
      this.players = data.players;
      this.game = {
        playingPlayer: data.players_turn,
        isRevelation: data.is_revelation_turn,
        lastMisterXKnownPosition: data.last_known_position,
        misterXMoves: data.mister_x_moves
      }
    },
    appendMessage(data){
      let message = {};
      message.localId = data._from;
      message.username = this.findUsernameByLocalId(data._from);
      message.body = data.message;
      message.color = this.findColorByLocalId(data._from);
      message.fromYou = data._from === this.currentPlayer.local_id;
      this.messages.push(message);
      let t = setInterval(()=>{
        let chat = document.getElementById("chat-container");
        chat.scrollTop = chat.scrollHeight;
        clearInterval(t);
      }, 100)
    },
    findUsernameByLocalId(id){
      for(let i = 0; i < this.players.length; i++){
        if(this.players[i].local_id===id){
          return this.players[i].username;
        }
      }
      return null;
    },
    findColorByLocalId(id){
      for(let i = 0; i < this.players.length; i++){
        if(this.players[i].local_id===id){
          return colorCorrispectives[this.players[i].color];
        }
      }
      return null;
    },
    messageReceived(data){
      this.appendMessage(data);
      this.unreadMessages = true;
      if(data._from === -1) this.$toast.show(data.message, {
        duration: 3000,
        maxToasts: 4,
        className: "toast"
      });
    },
    joinGame() {
      this.socket.emit(events.JOIN_GAME);
    },
    quitGame() {
      this.socket.emit(events.QUIT_GAME);
    },
    kickPlayer(localId){
      this.socket.emit(events.KICK_PLAYER, localId);
    },
    changeColor(newColor){
      this.socket.emit(events.CHANGE_COLOR, newColor);
    },
    startGame(){
      this.socket.emit(events.START_GAME);
    },
    changeMisterX(newMisterX){
      this.socket.emit(events.CHANGE_MISTER_X, newMisterX);
    },
    sendMessage(message){
      let msg = message;
      msg._from = this.currentPlayer.local_id;
      this.socket.emit(events.CHAT, msg);
    }
  },
  mounted() {
    this.socket = io(webSocketUrl, {
      path: "/unseen/socket.io/"
    });

    this.socket.emit(events.CONNECT_TO_GAME, {game_id: this.gameId});

    this.socket.on(events.CONNECT_TO_GAME, (data) => {
      this.setupData(data);
    });

    this.socket.on(events.LOBBY_MODIFIED, data => {
      this.setupData(data);
    });

    this.socket.on(events.START_GAME, data => {
      this.setupData(data);
    });

    this.socket.on(events.GAME_MODIFIED, data => {
      this.setupData(data);
    });

    this.socket.on(events.CHAT, data => {
      this.messageReceived(data);
    });

    this.status = 1;
    this.currentPlayer = {
      local_id: 0,
      color: 1,
      is_mister_x: false,
      is_admin: true,
      username: "jacopo",
      used_taxi: 0,
      used_bus: 0,
      used_underground: 0,
      used_secret_moves: 0,
      used_double_turns: 0,
      online: true
    }
    this.players = [
      this.currentPlayer,
      {
        local_id: 1,
        color: -1,
        is_mister_x: true,
        is_admin: false,
        username: "matteo",
        online: true
      },
      {
        local_id: 2,
        color: 2,
        is_mister_x: false,
        is_admin: false,
        username: "rami",
        online: false
      },
      {
        local_id: 3,
        color: 3,
        is_mister_x: false,
        is_admin: false,
        username: "tave",
        online: true
      }
    ]
    this.game = {
      playingPlayer: 0
    }

    this.messages = [
      {
        body: "ciaooo",
        local_id: 0,
        fromYou: true,
        username: "jacopo",
        color: "gray"
      }
    ];

  }
}
</script>

<style lang="scss">
@import "../styles/global";

.game__main-panel{
  width: 100%;
  height: 100%;
  overflow: hidden;
}

button {
  color: white;
  padding: 1%;
  background: transparent;
  border: 2px solid white;
  transition: all 0.5s;
  margin: 1%;

  &:hover{
    background-color: white;
    color: $theme-color-dark;
  }

  &:focus{
    outline: none;
  }
}

.toast{
  display: grid;
  align-items: center;
  animation-duration: 150ms;
  margin: 0.5em 0;
  border-radius: 0.5em;
  pointer-events: auto;
  color: #fff;
  background-color: orange;
  min-height: 3em;
  cursor: pointer;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0.5em 2em;
  word-break: break-word;
  width: fit-content;
  align-self: flex-end;

}
</style>