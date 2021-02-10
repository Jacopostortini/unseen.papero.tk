<template>
  <div class="manage-new-game__main-class">
    <button @click="choice='join'" v-if="choice===null">Join game</button>
    <button @click="choice='create'" v-if="choice===null">Create game</button>
    <div class="game-info__wrapper" v-show="choice==='join'">
      <form @submit.prevent="joinGame">
        <div class="back-arrow-wrapper" @click="choice=null">
          <div class="back-arrow"/>
        </div>
        <input placeholder="Insert game name" v-model="gameToJoin">
        <button>Join</button>
      </form>
    </div>
    <div class="game-info__wrapper" v-show="choice==='create'">
      <form @submit.prevent="createGame">
        <div class="back-arrow-wrapper" @click="choice=null">
          <div class="back-arrow"/>
        </div>
        <input placeholder="Insert game name" v-model="gameToCreate">
        <button>Create</button>
      </form>
    </div>

  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "ManageNewGame",
  data(){
    return{
      router: useRouter(),
      choice: null,
      gameToJoin: null,
      gameToCreate: null
    }
  },
  methods: {
    joinGame(){
      this.router.push({name: "Game", params: {gameId: this.gameToJoin}})
    },
    createGame(){
      this.router.push({name: "Game", params: {gameId: this.gameToCreate}})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";

.manage-new-game__main-class{
  width: 70%;
  height: 70%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: start;
  justify-self: start;
  z-index: 100;

  button{
    animation: fade-in 0.5s;
    color: white;
    font-size: 3vw;
    width: 22vw;
    margin: 1%;
    padding: 3%;
    background: none;
    border: 2px solid white;
    transition: all 0.5s;

    &:hover{
      background-color: white;
      color: $theme-color-dark;
    }

    &:focus{
      outline: none;
    }
  }

  .game-info__wrapper{
    width: 100%;

    form{
      width: 100%;
      text-align: center;
      animation: fade-in 1s;
      display: grid;
      grid-template-columns: 20% 80%;
      grid-template-rows: 50% 50%;

      .back-arrow-wrapper{
        justify-self: center;
        align-self: center;
        grid-row: 1;
        grid-column: 1;
        width: 100%;
        height: 2.1vw;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        transition: all 1s;

        .back-arrow{
          width: 1.5vw;
          height: 1.5vw;
          border-left: 2px solid white;
          border-top: 2px solid white;
          transform: rotate(-42deg);
        }

        &:hover{
          transform: translateX(-20px) scale(1.2);
        }
      }

      input{
        margin: 5%;
        grid-row-start: 1;
        grid-column-start: 2;
        justify-self: center;
        align-self: center;
        background: transparent;
        color: white;
        font-size: 2vw;
        padding: 1vw;
        text-align: center;
        border: 2px solid white;

        &:focus{
          outline: none;
        }
      }

      button{
        justify-self: center;
        align-self: center;
        grid-row: 2;
        grid-column-start: 2;
        width: 15vw;
        font-size: 2vw;
        padding: 1%;
      }
    }
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