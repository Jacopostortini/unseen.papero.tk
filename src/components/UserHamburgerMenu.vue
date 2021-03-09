<template>
  <div class="user-hamburger-menu__main-panel" @click.stop="" :class="{'hidden': !show}">
    <div class="user-hamburger-menu__menu">
      <img class="home-button" src="@/assets/logo.png" @click="redirectToHome">
      <div class="logged-menu" v-if="username">
        <div>
          <p>Username: <strong>{{decodeURIComponent(username)}}</strong></p>
          <button @click="logout" v-if="!disableLogout">Logout</button>
        </div>
        <button class="procede-with-google" v-if="!logged" @click="redirectToGoogle">Activate sync with google</button>
      </div>
      <div class="not-logged-menu" v-else>
        <p>You are currently not logged in</p>
        <button class="procede-with-google" @click="redirectToGoogle">Sign in now with google</button>
      </div>
      <ChatContainer v-if="showChat" :messages="messages" @send-message="$emit('send-message', $event)"/>
    </div>
    <div class="user-hamburger-menu__icon" @click="toggleMenu" :class="{'rotated': show}">
      <img :src="src">
      <div class="notification-badge" v-if="showChat && !show && unreadMessages"/>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {logoutUrl} from "../constants/constants";
import axios from "axios";
import ChatContainer from "./hamburgerMenuComponents/ChatContainer";

export default {
  name: "UserHamburgerMenu",
  components: {ChatContainer},
  props: {
    showChat: Boolean,
    messages: Array,
    disableLogout: Boolean,
    unreadMessages: Boolean,
    src: {
      required: true
    },
    show: Boolean
  },
  data(){
    return{
      store: useStore()
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
    window.addEventListener("click", ()=>{this.$emit("toggle-show", false)});
  },
  methods: {
    toggleMenu(){
      this.$emit("toggle-show", !this.show);
      this.$emit("chat-opened");
    },
    redirectToHome(){
      window.location.href = "/";
    },
    redirectToGoogle(){
      let from_location = window.location;
      window.location.href = '/auth/google?from_location='+from_location;
    },
    logout(){
      axios.get(logoutUrl);
      this.store.dispatch("setLogged", false);
      this.store.dispatch("setUsername", null);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.user-hamburger-menu__main-panel{
  position: fixed;
  top: 0;
  left: 0;
  width: fit-content;
  height: fit-content;
  transition: all 0.5s;
  z-index: 5;

  &.hidden{
    transform: translateX(calc(-25vw - 1px));
    @media (max-width: 700px) {
      transform: translateX(calc(-70vw - 1px));
    }
  }

  .user-hamburger-menu__menu{
    width: 25vw;
    height: 100vh;
    background: linear-gradient(-45deg, $papero-color-dark, $papero-color-light);
    overflow: hidden;
    display: flex;
    flex-flow: column;
    align-items: center;
    @media (max-width: 700px) {
      width: 70vw;
      min-height: 100vh;
      height: fit-content;
      overflow: scroll;
    }

    .home-button{
      height: 25vh;
    }

    .logged-menu{
      height: 20vh;
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
        font-size: 2vw;
        flex-wrap: wrap;
        margin-bottom: 10px;
        @media (max-width: 700px) {
          font-size: 3vw;
        }

        p{
          white-space: nowrap;
        }
      }
    }

    .not-logged-menu{
      height: 20vh;
      display: flex;
      flex-flow: column;
      align-items: center;
      color: white;
      font-size: 1.5vw;
      @media (max-width: 700px) {
        font-size: 3vw;
      }
      p{
        margin: 10px;
      }
    }
  }

  .user-hamburger-menu__icon{
    margin-top: 15px;
    width: 5vh;
    height: 5vh;
    transition: all 0.5s;
    position: absolute;
    top: 0;
    right: -5vw;
    z-index: 5;
    @media (max-width: 700px) {
      right: calc(-10% - 5vw);
    }

      img{
      width: 100%;
      height: 100%;
    }

    div{
      position: absolute;
      right: 0;
      top: 0;
      width: 2vh;
      height: 2vh;
      border-radius: 50%;
      background-color: red;
    }

    &.rotated{
      transform: rotate(90deg);
    }
  }
}
</style>