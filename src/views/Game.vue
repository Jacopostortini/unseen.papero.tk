<template>
  <div class="game__main-panel" @click="send">
    <PregamePhase v-if="game.status===0"
                  :players="game.players"
                  :user="currentUser"
                  :admin-id="game.admin_user_id"/>
    <GamePhase v-else-if="game.status===1" :game="game" :user="currentUser"/>
    <PostGamePhase v-else-if="game.status===2" :game="game"/>
  </div>
</template>

<script>
import PregamePhase from "../components/PregamePhase";
import GamePhase from "../components/GamePhase";
import PostGamePhase from "../components/PostGamePhase";
import game from "../constants/gameSimulation";
import { computed } from "vue";

export default {
  name: "Game",
  components: {PostGamePhase, GamePhase, PregamePhase},
  setup(){
    const currentUser = computed(() => game.players[1]);

    const io = require("socket.io-client");
    const socket = io("http://localhost:3000");
    function send(){
      socket.emit('connect-to-game');
      console.log("sent")
    }


    return {
      game,
      currentUser,
      send
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