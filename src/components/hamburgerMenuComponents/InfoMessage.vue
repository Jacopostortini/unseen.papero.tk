<template>
  <div class="info-message__main-panel">
    <p class="info-message__body">{{message.body}}</p>
  </div>
</template>

<script>
export default {
  name: "InfoMessage",
  props: {
    message: Object
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";

.info-message__main-panel{
  margin: 5px 10% 5px 10%;
  align-self: center;
  width: 80%;
  background: linear-gradient(-45deg, $papero-color-dark, $papero-color-light);
  text-align: center;
  border-radius: 2vh;

  p{
    margin: 5px;
    font-size: 2vh;
  }
}
</style>