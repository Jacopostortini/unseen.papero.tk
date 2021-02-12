<template>
  <div class="user-hamburger-menu__main-panel" @click.stop="" :class="{'hidden': !show}">
    <div class="user-hamburger-menu__menu">
      <img class="home-button" src="@/assets/logo.gif" @click="redirectToHome">
      <div class="logged-menu" v-if="username">
        <div>
          <p>Username: <strong>{{username}}</strong></p>
          <button>Logout</button>
        </div>
        <button class="procede-with-google" v-if="!logged" @click="redirectToGoogle">Activate sync with google</button>
      </div>
      <div class="not-logged-menu" v-else>
        <p>You are currently not logged in</p>
        <button class="procede-with-google" @click="redirectToGoogle">Sign in now with google</button>
      </div>
    </div>
    <div class="user-hamburger-menu__icon" @click="show=!show" :class="{'rotated': show}">
      <img src="@/assets/hamburger_icon.png">
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "UserHamburgerMenu",
  props: {
    showChat: Boolean,
    game: Object
  },
  data(){
    return{
      store: useStore(),
      show: false
    }
  },
  computed: {
    logged: function(){
      return this.store.state.logged;
    },
    username: function (){
      return this.store.state.username;
    }
  },
  mounted() {
    window.addEventListener("click", ()=>{this.show=false});
  },
  methods: {
    redirectToHome(){
      window.location.href = "/";
    },
    redirectToGoogle(){
      let from_location = window.location;
      window.location.href = '/auth/google?from_location='+from_location;
    }
  }
}
</script>

<style lang="scss" scoped>
$theme-color-dark: #86e970;
$theme-color-light: #4abf6f;

.user-hamburger-menu__main-panel{
  position: fixed;
  top: 0;
  left: 0;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-flow: row;
  transition: all 0.5s;
  z-index: 200;

  &.hidden{
    transform: translateX(calc(-25vw - 1px));
  }

  .user-hamburger-menu__menu{
    width: 25vw;
    height: 100vh;
    background: linear-gradient(-45deg, $theme-color-dark, $theme-color-light);
    overflow: hidden;
    display: flex;
    flex-flow: column;
    align-items: center;

    .home-button{
      width: 100%;
    }

    .logged-menu{
      display: flex;
      flex-flow: column;
      align-items: center;
      color: white;
      width: 100%;

      div{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
    }

    .not-logged-menu{
      display: flex;
      flex-flow: column;
      align-items: center;
      color: white;
    }
  }

  .user-hamburger-menu__icon{
    margin-top: 15px;
    margin-left: 15px;
    width: 5vh;
    height: 5vh;
    transition: all 0.5s;

    img{
      width: 100%;
      height: 100%;
    }

    &.rotated{
      transform: rotate(90deg);
    }
  }
}
</style>