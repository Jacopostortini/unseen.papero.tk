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
               :game="game"
               :changed-status-panel="changedStatusPanel"
               @map-manager-loaded="mapManagerLoaded"
               @move="move"
               @close-status-changed-panel="changedStatusPanel.show=false"
               @use-double-turn="useDoubleTurn"/>
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
      showHamburgerMenu: false,
      changedStatusPanel: {
        title: null,
        description: null,
        show: false
      },
      hamburgerMenuImage: require("@/assets/hamburger_icon_light.png")
    }
  },
  methods: {
    setupData(data) {
      console.log(data);
      let wasYourTurn;
      let previousStatus = this.status;
      if(this.currentPlayer) wasYourTurn = this.game.playingPlayer === this.currentPlayer.local_id;
      let wasRevelation = this.game.isRevelation;
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
      if(this.currentPlayer) {
        let isYourTurn = this.game.playingPlayer === this.currentPlayer.local_id;
        if ( ( !wasYourTurn && isYourTurn ) && !( previousStatus!== 1 && this.status===1 )) this.handleEvents("Your turn",
              "It's your turn! Choose one of the available stations to move!",
            2500);
      }

      let isRevelation = this.game.isRevelation;
      if(!wasRevelation && isRevelation) {
        this.handleEvents("Revelation",
            "Mister X's position is " + this.game.lastMisterXKnownPosition+"! Go catch him!",
            4000);
        this.players.forEach(player => {
          if(player.is_mister_x) player.position = this.game.lastMisterXKnownPosition;
        })
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
        duration: 2000,
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
    },
    move(event){
      this.socket.emit(events.MOVE, event);
    },
    useDoubleTurn(){
      this.socket.emit(events.USE_DOUBLE_TURN);
    },
    handleEvents (title, description, time){
      this.changedStatusPanel.title = title;
      this.changedStatusPanel.description = description;
      this.changedStatusPanel.show = true;
      const show = async () => {
        setTimeout(()=>{
          this.changedStatusPanel.show = false;
        }, time)
      }
      show();
    },
    mapManagerLoaded(){
      if(this.currentPlayer.local_id === this.game.playingPlayer){
        this.handleEvents("Your turn",
            "It's your turn! Choose one of the available stations to move!",
            2500);
      }
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

    this.socket.on(events.USE_DOUBLE_TURN, () => {
      if(!this.currentPlayer.is_mister_x){
        this.handleEvents("Double turn",
            "Oh no! Mister X played a double turn card, you were close!",
            4000);
      }
    });

    this.socket.on(events.CHAT, data => {
      this.messageReceived(data);
    });

    /*this.status = 1;
    this.currentPlayer = {
      local_id: 0,
      color: 1,
      is_mister_x: true,
      is_admin: true,
      username: "jacopo",
      used_taxi: 0,
      used_bus: 0,
      used_underground: 0,
      used_secret_moves: 0,
      used_double_turns: 0,
      online: true,
      position: 1,
      available_moves: {
        taxi: [8],
        bus: [47, 59],
        underground: [47]
      }
    }
    this.players = [
      this.currentPlayer,
      {
        local_id: 1,
        color: 1,
        is_mister_x: false,
        is_admin: false,
        username: "matteo",
        online: true,
        //position: 2
      },
      {
        local_id: 2,
        color: 2,
        is_mister_x: false,
        is_admin: false,
        username: "rami",
        online: false,
        position: 3
      },
      {
        local_id: 3,
        color: 3,
        is_mister_x: false,
        is_admin: false,
        username: "tave",
        online: true,
        position: 4
      }
    ]
    this.game = {
      playingPlayer: 1,
      misterXMoves: [
          1,0,0,1,2
      ]
    }

    this.messages = [
      {
        body: "ciaooo",
        local_id: 0,
        fromYou: true,
        username: "jacopo",
        color: "gray"
      }
    ];*/
  }
}
</script>

<style lang="scss">
@import "../styles/global";

.game__main-panel{
  background-image: url("../assets/background_image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

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