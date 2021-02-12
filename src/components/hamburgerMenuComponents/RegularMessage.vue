<template>
  <div class="regular-message__main-panel" :class="{'right-aligned': message.fromYou}">
    <strong class="regular-message__username" :style="{color: message.color}">{{message.username}}</strong>
    <p class="regular-message__body">{{message.body}}</p>
  </div>
</template>

<script>
export default {
  name: "RegularMessage",
  props: {
    message: Object
  }
}
</script>

<style lang="scss" scoped>

.regular-message__main-panel{
  margin: 10px;
  width: fit-content;
  max-width: 90%;
  height: fit-content;

  strong{
    font-size: 1.5vh;
    margin: 0;
  }

  p{
    padding: 5px;
    border-radius: 10px;
    border: 1px solid black;
    margin: 0;
    font-size: 2vh;
  }

  &.right-aligned{
    align-self: flex-end;
    text-align: right;
  }
}
</style>