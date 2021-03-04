<template>
  <div class="status-changed-panel__wrapper">
    <div class="status-changed__main-panel">
      <h1>{{title}}</h1>
      <p>{{description}}</p>
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
  z-index: 2;
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
  }
}

</style>