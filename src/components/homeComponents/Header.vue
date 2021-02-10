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
    font-size: 20vh;
  }

  button{
    position: absolute;
    top: 0;
    right: 0;
    margin: 5vh 3vw 0 0;
    font-size: 5vh;
  }
}
</style>