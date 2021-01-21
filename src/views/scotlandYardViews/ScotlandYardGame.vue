<template>
  <div class="scotland-yard-game__main-panel">
    <PregamePhase v-if="game.status===0"
                  :players="game.players"
                  :user="currentUser"
                  :admin-id="game.admin_user_id"/>
    <GamePhase v-else-if="game.status===1" :game="game" :user="currentUser"/>
    <PostGamePhase v-else-if="game.status===2" :game="game"/>
  </div>
</template>

<script>
import PregamePhase from "../../components/scotlandYardComponents/PregamePhase";
import GamePhase from "../../components/scotlandYardComponents/GamePhase";
import PostGamePhase from "../../components/scotlandYardComponents/PostGamePhase";
import game from "../../constants/gameSimulation";
export default {
  name: "ScotlandYardGame",
  components: {PostGamePhase, GamePhase, PregamePhase},
  data(){
    return {
      game
    }
  },
  computed: {
    currentUser: function() {
      return game.players[1];
    }
  }
}
</script>

<style lang="scss" scoped>

.scotland-yard-game__main-panel{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>