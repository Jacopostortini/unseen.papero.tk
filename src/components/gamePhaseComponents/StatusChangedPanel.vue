<template>
  <div class="status-changed-panel__wrapper" @click="$emit('close-status-changed-panel')">
    <div class="status-changed__main-panel">
      <h1>{{title}}</h1>
      <p>{{description}}</p>
      <strong @click="$emit('close-status-changed-panel')">&#xd7;</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusChangedPanel",
  props: {
    title: String,
    description: String
  }
}
</script>

<style lang="scss" scoped>

.status-changed-panel__wrapper{
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;


  .status-changed__main-panel{
    background-image: url("../../assets/background_image.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: 50%;
    text-align: center;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    @media (max-height: 700px) {
      @media (min-height: 400px) {
        height: 30%;
      }
    }

    h1{
      font-family: Eutemia;
      font-weight: normal;
      font-size: 3em;
      @media (max-width: 700px) {
        margin: 0;
        font-size: 2.5em;
      }


    }

    p{
      @media (max-width: 700px) {
        font-size: 0.5em;
      }
    }

    strong{
      position: absolute;
      top: 6%;
      right: 2%;
      font-size: 1.5em;
      transition: all 0.3s;

      &:hover{
        transform: rotate(90deg);
      }
    }
  }
}

</style>