<template>
  <div class="player-label__main-panel">
    <strong>{{ name }} <span v-if="isMisterX">X</span><span v-if="isPlaying">-</span></strong>
  </div>
</template>

<script>
export default {
  name: "PlayerLabel",
  props: {
    name: {
      type: String,
      required: true
    },
    isMisterX: {
      type: Boolean,
      required: true
    },
    isPlaying: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>