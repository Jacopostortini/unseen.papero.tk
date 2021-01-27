<template>
  <div class="game__main-panel">
    <PregamePhase v-if="status===0"
                  :players="players"
                  :current-player="currentPlayer"
                  @joingame="joinGame"
                  @quitgame="quitGame"
                  @kickplayer="kickPlayer"
                  @changecolor="changeColor"/>
    <GamePhase v-else-if="status===1"
               :players="players"
               :current-player="currentPlayer"
               :game="game"/>
    <PostGamePhase v-else-if="status===2"/>
  </div>
</template>

<script>
import PregamePhase from "../components/PregamePhase";
import GamePhase from "../components/GamePhase";
import PostGamePhase from "../components/PostGamePhase";
import {webSocketUrl} from "../constants/constants";
import events from "../constants/webSocketEvents";
import {useRoute, useRouter} from "vue-router";
import io from "socket.io-client";
import {ref} from "@vue/reactivity";


export default {
  name: "Game",
  components: {PostGamePhase, GamePhase, PregamePhase},
  setup(){

    const socket = io(webSocketUrl);
    const router = useRouter();

    const gameId = useRoute().params.gameId;
    const status = ref(undefined);
    const currentPlayer = ref(undefined);
    const players = ref([]);
    const game = ref({});

    //TODO: LOGIC FOR FETCHING USER ID FROM FLASK AND USERNAME
    let id = prompt("id:")
    let username = prompt("username:")
    socket.emit(events.CONNECT_TO_GAME, {user_id: id, game_id: gameId, username: username});
    socket.on(events.CONNECT_TO_GAME, (data) => {
      status.value = data.status;
      if(data.your_local_id!=null){
        data.players.forEach(player => {
          if(player.local_id===data.your_local_id){
            currentPlayer.value = player;
          }
        })
      }
      players.value = data.players;
      game.value = {
        playingPlayer: data.players_turn,
        isRevelation: data.is_revelation_turn,
        lastMisterXKnownPosition: data.last_known_position,
        misterXMoves: data.mister_x_moves
      }
    });

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

    socket.on(events.LOBBY_MODIFIED, data => {
      if (data.status === 3){
        router.push({name: 'Home'});
      }
      status.value = data.status;
      if(data.your_local_id!=null){
        data.players.forEach(player => {
          if(player.local_id===data.your_local_id){
            currentPlayer.value = player;
          }
        })
      } else{
        currentPlayer.value = undefined;
      }
      players.value = data.players;
      game.value = {
        playingPlayer: data.players_turn,
        isRevelation: data.is_revelation_turn,
        lastMisterXKnownPosition: data.last_known_position,
        misterXMoves: data.mister_x_moves
      }
    });

    return {
      status,
      currentPlayer,
      players,
      game,
      joinGame,
      quitGame,
      kickPlayer,
      changeColor
    }

  }
}
</script>

<style lang="scss" scoped>

.game__main-panel{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>