<template>
  <div class="header__main-panel">
    <h1>Unseen</h1>
    <button v-if="!logged" @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    logged: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    login(){
      let from_location = window.location;
      window.location.href = '/auth/google?from_location='+from_location;
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
  text-align: center;
  position: relative;

  h1{
    margin: 0;
    justify-self: center;
    font-weight: normal;
    font-family: Eutemia;
    font-size: 10vw;
  }

  button{
    position: absolute;
    top: 0;
    right: 0;
    padding: 1% 3% 1% 3%;
    margin: 2%;
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