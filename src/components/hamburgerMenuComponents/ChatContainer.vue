<template>
  <div class="chat__main-panel">
    <div class="chat__container">
      <div class="chat__message-container" v-for="(message, index) in messages" :key="index">
        <InfoMessage v-if="message.localId===-1" :message="message"/>
        <RegularMessage v-else :message="message"/>
      </div>
    </div>
    <form class="chat__input"  @submit.prevent="$emit('send-message', {message: message})">
      <input placeholder="Type a message" v-model="message">
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import RegularMessage from "./RegularMessage";
import InfoMessage from "./InfoMessage";
export default {
  name: "ChatContainer",
  components: {InfoMessage, RegularMessage},
  props: {
    messages: Array
  },
  data(){
    return{
      message: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";

.chat__main-panel{
  width: 100%;
  height: 100%;
  justify-self: flex-end;
  display: flex;
  flex-flow: column;

  .chat__container{
    margin: 10% 10% 10px 10%;
    height: 70%;
    background-color: white;
    overflow-y: auto;
    display: flex;
    flex-flow: column;
    border-radius: 10px;

    .chat__message-container{
      display: flex;
      flex-flow: column;
      justify-content: center;
      height: fit-content;
    }
  }

  .chat__input{
    display: grid;
    grid-template-columns: 1fr auto;
    justify-items: center;

    input{
      font-size: 2.5vh;
      border-radius: 10px;
      width: 80%;
      border: none;
      padding: 5px;

      &:focus{
        outline: none;
      }
    }

    button{
      margin: 5px 15px 5px 5px;
      color: white;
      border-radius: 10px;
      border: 2px solid white;
      padding: 10%;
      font-size: 2vh;

      &:hover{
        color: $papero-color-dark;
      }
    }
  }
}

</style>