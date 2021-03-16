<template>
  <div class="manage-new-game__main-class">
    <button @click="choice='join'" v-if="choice===null">Join game</button>
    <button @click="choice='create'" v-if="choice===null">Create game</button>
    <div class="game-info__wrapper" v-show="choice==='join'">
      <form @submit.prevent="joinGame">
        <div class="back-arrow-wrapper" @click="choice=null">
          <div class="back-arrow"/>
        </div>
        <input placeholder="Insert game name" v-model="gameToJoin" @input="checkInput(gameToJoin, true)">
        <button>Join</button>
      </form>
    </div>
    <div class="game-info__wrapper" v-show="choice==='create'">
      <form @submit.prevent="createGame">
        <div class="back-arrow-wrapper" @click="choice=null">
          <div class="back-arrow"/>
        </div>
        <input placeholder="Insert game name" v-model="gameToCreate" @input="checkInput(gameToCreate, false)">
        <button>Create</button>
      </form>
    </div>
    <div class="game-buttons__popup-background" v-if="showPopup" @click="showPopup=false">
      <div class="game-buttons__popup" @click.stop="">
        <h1>{{popupMessage}}</h1>
        <div>
          <button @click="redirectToGame(popupGame)">{{popupConfirmButton}}</button>
          <button @click="showPopup=false">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import {urls} from "../../constants/constants";
import axios from "axios";

export default {
  name: "GameButtons",
  data(){
    return{
      router: useRouter(),
      choice: null,
      gameToJoin: null,
      gameToCreate: null,
      showPopup: false,
      popupMessage: "",
      popupConfirmButton: "",
      popupGame: null
    }
  },
  methods: {
    joinGame(){
      if (this.gameToJoin) {
        axios
            .get(urls.getGameStatusUrl, {params: {game_id: this.gameToJoin}})
            .then((response) => {
              if (response.data) {
                this.router.push({name: "Game", params: {gameId: this.gameToJoin}})
              } else {
                this.popupMessage = "This game does not exist";
                this.popupConfirmButton = "Create it now";
                this.popupGame = this.gameToJoin;
                this.showPopup = true;
              }
            });
      }
    },
    createGame(){
      if(this.gameToCreate) {
        axios
            .get(urls.getGameStatusUrl, {params: {game_id: this.gameToCreate}})
            .then((response) => {
              if (response.data) {
                this.popupMessage = "This game already exists";
                this.popupConfirmButton = "Join it now";
                this.popupGame = this.gameToCreate;
                this.showPopup = true;
              } else {
                this.router.push({name: "Game", params: {gameId: this.gameToCreate}})
              }
            });
      }
    },
    redirectToGame(game){
      this.router.push({name: "Game", params: {gameId: game}})
    },
    checkInput(input, toJoin){
      const regex = RegExp("[^a-zA-Z]", "g");
      let i = input;
      if(regex.test(input)){
        i = input.replaceAll(regex, "");
      }
      if(toJoin) this.gameToJoin = i.toUpperCase();
      else this.gameToCreate = i.toUpperCase();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";

.manage-new-game__main-class{
  width: 42vw;
  height: 56vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  align-self: start;
  @media (max-width: 700px) {
    grid-area: x;
    width: fit-content;
    height: fit-content;
  }

  button {
    animation: fade-in 0.5s;
    font-size: 5vh;
    width: 25vw;
    margin: 1vh;
    @media (max-width: 700px) {
      font-size: 5vw;
      width: 50vw;
    }
  }

  .game-info__wrapper{
    width: 100%;

    form{
      width: 100%;
      text-align: center;
      animation: fade-in 1s;
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-rows: 50% 50%;
      position: relative;


      .back-arrow-wrapper{
        position: absolute;
        top: 0;
        left: -10px;
        width: 12%;
        height: 50%;
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
          @media (max-width: 700px) {
            width: 3vw;
            height: 3vw;
            transform: translateX(-20px) rotate(-42deg);
          }
        }

        &:hover{
          transform: translateX(-20px) scale(1.2);
        }
      }

      input{
        background: transparent;
        color: white;
        font-size: 2vw;
        padding: 3%;
        text-align: center;
        border: 2px solid white;
        @media (max-width: 700px) {
          font-size: 5vw;
          max-width: 45vw;
        }

        &:focus{
          outline: none;
        }
      }

      button{
        width: 15vw;
        font-size: 2vw;
        @media (max-width: 700px) {
          font-size: 5vw;
          width: 20vw;
        }
      }
    }
  }

  .game-buttons__popup-background{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;

    .game-buttons__popup{
      width: 20%;
      height: 20%;
      border: 2px solid white;
      text-align: center;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-evenly;
      @media (max-width: 700px) {
        width: 70%;
        height: 20%;
      }
    }

    h1{
      color: white;
      font-size: 3vh;
      font-weight: normal;
    }

    div{
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-around;
      width: 90%;

      button{
        width: 50%;
        font-size: 2.5vh;
      }
    }
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>