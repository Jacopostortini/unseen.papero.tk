<template>
  <div class="user-hamburger-menu__main-panel" @click.stop="" :class="{'hidden': !show}">
    <div class="user-hamburger-menu__icon" @click="toggleMenu" :class="{'rotated': show}">
      <img :src="src" alt="menu">
      <div class="notification-badge" v-if="showChat && !show && unreadMessages"/>
    </div>
    <div class="user-hamburger-menu__menu">
      <img class="home-button" src="@/assets/logo.png" @click="redirectToHome" alt="Home">
      <div class="user-menu" v-if="username">
        <div>
          <p>Username: <strong>{{decodeURIComponent(username)}}</strong></p>
          <button @click="logout" v-if="!disableLogout">Logout</button>
        </div>
        <button class="proceed-with-google" v-if="!logged" @click="redirectToGoogle">Activate sync with google</button>
      </div>
      <div class="user-menu" v-else>
        <p>You are currently not logged in</p>
        <button class="proceed-with-google" @click="redirectToGoogle">Sign in now with google</button>
      </div>
      <ChatContainer v-if="showChat" :messages="messages" @send-message="$emit('send-message', $event)"/>
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
  transition: all 0.5s;
  z-index: 5;
  width: 25vw;
  height: 100vh;
  background: $papero-color-dark;
  //overflow-y: hidden;
  @media (max-width: 500px) {
    width: 70vw !important;
  }
  @media (max-width: 700px) {
    width: 40vw;
  }

  &.hidden{
    transform: translateX(calc(-25vw - 1px));
    @media (max-width: 500px) {
      transform: translateX(calc(-70vw - 1px)) !important;
    }

    @media (max-width: 700px) {
      transform: translateX(calc(-40vw - 1px));
    }
  }

  .user-hamburger-menu__menu{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "logo" "user" "chat";
    align-items: center;
    justify-items: center;
    overflow-y: scroll;

    .home-button{
      margin-top: 5%;
      grid-area: logo;
      width: 50%;
    }

    .user-menu{
      margin-top: 5%;
      text-align: center;
      color: white;
      grid-area: user;

      p{
        font-size: 0.7em;
      }

      button:hover{
        color: $papero-color-dark;
      }
    }
  }

  .user-hamburger-menu__icon{
    transition: all 0.5s;
    position: absolute;
    right: calc(-3vw - 10px);
    top: 10px;
    width: 3vw;
    height: 3vw;
    z-index: 5;
    @media (max-width: 500px) {
      width: 5vw;
      height: 5vw;
      right: calc(-5vw - 10px);
    }

    img{
      width: 100%;
      height: 100%;
    }

    div{
      position: absolute;
      right: 0;
      top: 5%;
      border-radius: 50%;
      background-color: red;
      width: 30%;
      height: 30%;
      @media (max-width: 700px) {
        top: 20%;
        right: -10%;
      }
    }

    &.rotated{
      transform: rotate(90deg);
    }
  }
}
</style>