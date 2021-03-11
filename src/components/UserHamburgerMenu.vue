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
  height: 100%;
  width: 100%;
  background: $papero-color-dark;

  &.hidden{
    transform: translateX(-100%);
  }

  .user-hamburger-menu__menu{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 20% 20% 60%;
    grid-template-areas: "logo" "user" "chat";
    align-items: center;
    justify-items: center;
    overflow-y: scroll;

    .home-button{
      margin-top: 2%;
      grid-area: logo;
      height: 90%;
    }

    .user-menu{
      align-self: start;
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
    position: absolute;
    width: 10%;
    height: min-content;
    right: calc(-10% - 20px);
    top: 20px;

    transition: all 0.5s;
    z-index: 5;

    img{
      float: left;
      width: 100%;
      height: auto;
    }

    div{
      position: absolute;
      border-radius: 50%;
      background-color: red;
      width: 40%;
      height: 40%;
      top: -20%;
      right: -20%;
    }

    &.rotated{
      transform: rotate(90deg);
    }
  }
}
</style>