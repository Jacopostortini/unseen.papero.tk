<template>
  <div class="game__main-panel" @click="toggleClicked">
    <div class="game__not-clicked-main-panel">
      <div class="name-container" :id="game.game_id+'container'">
        <h1 :id="game.game_id+'name'" :class="{'overflows': overflows}">{{game.game_id}}</h1>
      </div>
      <div class="game__date-container">{{game.date}}</div>
    </div>
    <div class="game__clicked-main-panel" v-if="clicked">
      <button @click.stop="redirectToGame">Join</button>
      <button @click.stop="quitGame">Quit</button>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import axios from "axios";
import {quitGameUrl} from "../../constants/constants";

export default {
  name: "Game",
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      overflows: false,
      router: useRouter(),
      clicked: false
    }
  },
  methods: {
    toggleClicked(){
      this.clicked = !this.clicked;
    },
    redirectToGame(){
      this.router
          .push({
                name: "Game",
                params: {
                  gameId: this.game.game_id
                }
              });
    },
    quitGame(){
      axios
          .post(quitGameUrl, {game_id: this.game.game_id})
          .then(()=>{
            this.router.go(0);
          });
    }
  },
  mounted() {
    let name = document.getElementById(this.game.game_id+"name");
    let container = document.getElementById(this.game.game_id+"container")
    if(name){
      this.overflows =  container.clientWidth<name.scrollWidth;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";

.game__main-panel{
  margin: 2%;
  border: 1px solid white;
  color: white;
  position: relative;

  .game__not-clicked-main-panel{
    animation: fade-in 0.5s;
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    .name-container{
      overflow: hidden;
      margin: 0 5% 0 5%;
      text-align: left;
      white-space: nowrap;

      h1{
        font-size: 1.5vw;
        font-weight: normal;
        width: fit-content;
      }

      .overflows:hover{
        animation: scroll-text 5s linear infinite;
      }
    }

    &:hover{
      background-color: white;
      color: $theme-color-dark;
    }

    .game__date-container{
      font-size: 1.5vw;
      text-align: left;
    }
  }

  .game__clicked-main-panel{
    animation: fade-in 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;

    button{
      border: 2px solid black;
      color: black;
      font-size: 3vh;

      &:hover{
        background-color: black;
        color: white;
      }
    }
  }
}

@keyframes scroll-text {
  0%{
    transform: translate(0, 0);
  }
  100%{
    transform: translate(-100%, 0);
  }
}

@keyframes fade-in {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
