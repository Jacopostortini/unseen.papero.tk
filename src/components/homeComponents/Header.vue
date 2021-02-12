<template>
  <div class="header__main-panel">
    <h1>Unseen</h1>
  </div>
</template>

<script>
export default {
  name: "Header"
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
}
</style>