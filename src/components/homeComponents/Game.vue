<template>
  <div class="game__main-panel">
    <div class="name-container" :id="game.game_id+'container'">
      <h1 :id="game.game_id+'name'" :class="{'overflows': overflows}">{{game.game_id}}</h1>
    </div>
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
  },
  data(){
    return {
      overflows: false
    }
  },
  mounted() {
    let name = document.getElementById(this.game.game_id+"name");
    let container = document.getElementById(this.game.game_id+"container")
    if(name){
      this.overflows =  container.clientWidth<name.scrollWidth;
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

  .name-container{
    width: 50%;
    height: 100%;
    overflow: hidden;
    margin-right: 5%;
    text-align: left;
    white-space: nowrap;

    h1{
      font-size: 1.5vw;
      font-weight: normal;
      width: fit-content;
    }

    .overflows:hover{
      animation: scroll-text 5s linear infinite;
    }
  }

  &:hover{
    background-color: white;
    color: $theme-color-dark;
  }

  span{
    font-size: 1.5vw;
  }
}

@keyframes scroll-text {
  0%{
    transform: translate(0, 0);
  }
  100%{
    transform: translate(-100%, 0);
  }

}
</style>