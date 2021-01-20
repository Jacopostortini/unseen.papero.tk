<template>
<div>
  Scotland yard home
  <router-link :to="{name: 'ScotlandYardGame', params: {gameTag: '0'}}">Go to game</router-link>
</div>
</template>

<script>
export default {
  name: "ScotlandYardHome"
}
</script>

<style scoped>

</style>