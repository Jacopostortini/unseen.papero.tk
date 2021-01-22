<template>
  <div class="pregame-phase__main-panel">
    <header class="pregame-phase__header">
      Scotland Yard
    </header>
    <div class="pregame-phase__players">
      <PlayerLabel v-for="(player, index) in players"
                   :key="index"
                   :player="{username: player.username, isAdmin: player.user_id===adminId}"
                   :color="player.color"
                   :is-admin="isAdmin"
                   :is-you="player.user_id===user.user_id"/>
    </div>
    <div class="pregame-phase__buttons">
      <button v-if="players.includes(user)">Change your color</button>
      <button v-if="!players.includes(user)">Join game</button>
      <button v-if="isAdmin">Start game</button>
      <button v-if="isAdmin">Choose Mister X</button>
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
        <p id="pregame-phase__tag">{{ tag }}</p>
        <button v-clipboard:copy="tag">Copy</button>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerLabel from "./pregamePhaseComponents/PlayerLabel";
import {useRoute} from "vue-router";
export default {
  name: "PregamePhase",
  components: {PlayerLabel},
  props: {
    players: {
      type: Array,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    adminId: {
      type: String,
      required: true
    }
  },
  computed: {
    isAdmin: function() {
      return this.user ? this.user.user_id===this.adminId : false;
    },
    url: function() {
      return window.location;
    },
    tag: function() {
      return useRoute().params.gameTag;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global.scss";

.pregame-phase__main-panel{
  background: linear-gradient($theme-color-light, $theme-color-dark);
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
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    color: white;
    height: 100%;
    padding: 10%;
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
}
</style>