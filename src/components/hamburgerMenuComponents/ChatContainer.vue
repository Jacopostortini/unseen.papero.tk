<template>
  <div class="chat__main-panel">
    <div class="chat__message-container" v-for="(message, index) in messages" :key="index">
      <InfoMessage v-if="message.localId===-1" :message="message"/>
      <RegularMessage v-else :message="message"/>
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

.chat__main-panel{
  position: relative;
  margin: 10%;
  width: 80%;
  height: fit-content;
  min-height: 30%;
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

  .chat__input{
    position: fixed;
    bottom: 0;

    button{
      background-color: black;
    }
  }
}

</style>