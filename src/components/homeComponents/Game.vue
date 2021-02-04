<template>
  <div class="game__main-panel">
    <h1>{{game.name}}</h1>
    <span>{{game.date}}</span>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: {
    game: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";

.game__main-panel{
  margin: 2%;
  border: 1.5px solid white;
  color: white;
  display: flex;
  flex-flow: row;
  align-items: baseline;
  justify-content: center;
  transition: all 0.5s;

  h1{
    font-size: 1.5vw;
    font-weight: normal;
    margin-right: 5%;
    width: 50%;
    overflow: hidden;
    text-align: left;
    direction: ltr;
    transition: direction 2s;

    &:hover{
      direction: rtl;
    }
  }

  &:hover{
    background-color: white;
    color: $theme-color-dark;
  }
}
</style>