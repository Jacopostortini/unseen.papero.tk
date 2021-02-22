<template>
  <div class="game__main-panel">
    <UserHamburgerMenu :show-chat="true"
                       :messages="messages"
                       :disable-logout="true"
                       :unread-messages="unreadMessages"
                       :src="hamburgerMenuImage"
                       @chat-opened="unreadMessages=false"
                       @send-message="sendMessage"/>
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
import {ref} from "@vue/reactivity";
import {computed, defineAsyncComponent} from "vue";
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
  setup(){
    const socket = io(webSocketUrl, {
      path: "/unseen/socket.io/"
    });
    const gameId = useRoute().params.gameId;
    const status = ref(undefined);
    const currentPlayer = ref(undefined);
    const players = ref([]);
    const game = ref({});
    const messages = ref([]);
    const unreadMessages = ref(false);

    const hamburgerMenuImage = computed(function (){
      switch (status.value){
        case 0:
          return require("@/assets/hamburger_icon_light.png");
        case 1:
          return require("@/assets/hamburger_icon_dark.png");
        case 2:
          return require("@/assets/hamburger_icon_light.png");
        default:
          return require("@/assets/hamburger_icon_light.png");
      }
    })

    status.value = 1;
    currentPlayer.value = {
      local_id: 0,
      color: -1,
      is_mister_x: true,
      is_admin: true,
      username: "jacopo",
      used_taxi: 0,
      used_bus: 0,
      used_underground: 0,
      used_secret_moves: 0,
      used_double_turns: 0
    }
    players.value = [
      currentPlayer.value,
      {
        local_id: 1,
        color: 1,
        is_mister_x: false,
        is_admin: false,
        username: "matteo"
      },
      {
        local_id: 2,
        color: 2,
        is_mister_x: false,
        is_admin: false,
        username: "rami"
      },
      {
        local_id: 3,
        color: 3,
        is_mister_x: false,
        is_admin: false,
        username: "tave"
      }
    ]
    game.value = {
      playingPlayer: 1
    }

    messages.value = [
      {
        body: "ciaooo",
        local_id: 0,
        fromYou: true,
        username: "jacopo",
        color: "gray"
      }
    ]

    socket.emit(events.CONNECT_TO_GAME, {game_id: gameId});

    function setupData(data){
      console.log(data);
      status.value = data.status;
      if(data.your_local_id!=null){
        data.players.forEach(player => {
          if(player.local_id===data.your_local_id){
            currentPlayer.value = player;
          }
        })
      } else {
        currentPlayer.value = null;
      }
      players.value = data.players;
      game.value = {
        playingPlayer: data.players_turn,
        isRevelation: data.is_revelation_turn,
        lastMisterXKnownPosition: data.last_known_position,
        misterXMoves: data.mister_x_moves
      }
    }

    socket.on(events.CONNECT_TO_GAME, (data) => {
      setupData(data);
    });

    socket.on(events.LOBBY_MODIFIED, data => {
      setupData(data);
    });

    socket.on(events.START_GAME, data => {
      setupData(data);
    });

    socket.on(events.CHAT, data => {
      appendMessage(data);
      unreadMessages.value = true;
    })

    function joinGame() {
      socket.emit(events.JOIN_GAME);
    }

    function quitGame() {
      socket.emit(events.QUIT_GAME);
    }

    function kickPlayer(localId){
      socket.emit(events.KICK_PLAYER, localId);
    }

    function changeColor(newColor){
      socket.emit(events.CHANGE_COLOR, newColor);
    }

    function startGame(){
      socket.emit(events.START_GAME);
    }

    function changeMisterX(newMisterX){
      socket.emit(events.CHANGE_MISTER_X, newMisterX);
    }

    function sendMessage(message){
      let msg = message;
      msg._from = currentPlayer.value.local_id;
      socket.emit(events.CHAT, msg);
    }

    function appendMessage(data){
      let message = {};
      message.localId = data._from;
      message.username = findUsernameByLocalId(data._from);
      message.body = data.message;
      message.color = findColorByLocalId(data._from);
      message.fromYou = data._from === currentPlayer.value.local_id;
      messages.value.push(message);
      let t = setInterval(()=>{
        let chat = document.getElementById("chat-container");
        chat.scrollTop = chat.scrollHeight;
        clearInterval(t);
      }, 100)
    }

    function findUsernameByLocalId(id){
      for(let i = 0; i < players.value.length; i++){
        if(players.value[i].local_id===id){
          return players.value[i].username;
        }
      }
      return null;
    }

    function findColorByLocalId(id){
      for(let i = 0; i < players.value.length; i++){
        if(players.value[i].local_id===id){
          return colorCorrispectives[players.value[i].color];
        }
      }
      return null;
    }

    return {
      hamburgerMenuImage,
      status,
      currentPlayer,
      players,
      game,
      messages,
      unreadMessages,
      joinGame,
      quitGame,
      kickPlayer,
      changeColor,
      changeMisterX,
      startGame,
      sendMessage
    }

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
</style>