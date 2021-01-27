<template>
<div class="transport-card__main-panel" :style="{backgroundColor: color}">
  <img class="transport-card__image" :src="src">
</div>
</template>

<script>
export default {
  name: "TransportCard",
  props: {
    src: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.transport-card__main-panel{
  margin: 2%;
  width: 10%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  .transport-card__image{
    width: 50%;
  }
}

</style>