<template>
  <div class="game__main-panel">
    <PregamePhase v-if="status===0"
                  :players="players"
                  :current-player="currentPlayer"/>
    <GamePhase v-else-if="status===1"/>
    <PostGamePhase v-else-if="status===2"/>
  </div>
</template>

<script>
import PregamePhase from "../components/PregamePhase";
import GamePhase from "../components/GamePhase";
import PostGamePhase from "../components/PostGamePhase";
import {webSocketUrl} from "../constants/constants";
import events from "../constants/webSocketEvents";
import {useRoute} from "vue-router";
import io from "socket.io-client";
import {ref} from "@vue/reactivity";


export default {
  name: "Game",
  components: {PostGamePhase, GamePhase, PregamePhase},
  setup(){

    const socket = io(webSocketUrl);

    const gameId = useRoute().params.gameId;
    const status = ref(undefined);
    const currentPlayer = ref(undefined);
    const players = ref([]);
    const playingPlayer = ref("");
    const isRevelation = ref(false);
    const lastMisterXKnownPosition = ref(undefined);
    const misterXMoves = ref([]);

    //TODO: LOGIC FOR FETCHING USER ID FROM FLASK AND USERNAME
    let id = prompt("id:")
    socket.emit(events.CONNECT_TO_GAME, {user_id: id, game_id: gameId, username: "Jacopo"});
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
      playingPlayer.value = data.players_turn;
      isRevelation.value = data.is_revelation_turn;
      lastMisterXKnownPosition.value = data.last_known_position;
      misterXMoves.value = data.mister_x_moves;
    });

    return {
      status,
      currentPlayer,
      players,
      playingPlayer,
      isRevelation,
      lastMisterXKnownPosition,
      misterXMoves
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