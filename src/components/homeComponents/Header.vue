<template>
  <div class="header__main-panel">
    <h1>Unseen</h1>
    <button v-if="!googleLogged" @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      googleLogged: false
    }
  },
  methods: {
    login(){
      window.location.href = "/auth/google";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";

.header__main-panel{
  grid-area: header;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;

  h1{
    margin: 0 0 0 2%;
  }

  button{
    padding: 1%;
    margin-right: 2%;
    background: none;
    border: 2px solid white;
    color: white;
    font-size: 2vw;
    transition: all 0.5s;

    &:hover{
      background-color: white;
      color: $theme-color-dark;
    }

    &:focus{
      outline: none;
    }
  }
}
</style>