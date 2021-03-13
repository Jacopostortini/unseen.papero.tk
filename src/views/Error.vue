<template>
  <div class="error__main-panel">
    <div class="wrapper">
      <h1>Oops, it seems like there was an error</h1>
      <p v-if="fromPath">We were not able to redirect you to <a :href="fromPath">{{fromPath}}</a></p>
      Try:
      <div>
        <ul>
          <li v-if="fromPath">Going again to the link above</li>
          <li v-else>Go to our <a href="/">Home</a>, maybe you shouldn't be here</li>
          <li>Checking your internet connection</li>
          <li>Restarting your browser</li>
          <li>If the problem persists send an email at <a>info@papero.tk</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Error",
  computed: {
    fromPath: function () {
      if(this.$route.redirectedFrom) return location.origin+this.$route.redirectedFrom.fullPath;
      else return null;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.error__main-panel{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: $papero-color-dark;

  .wrapper{
    width: 80%;
    display: flex;
    flex-flow: column;
    justify-content: center;

    a{
      color: cadetblue;
      text-decoration: underline;
      cursor: pointer;
    }

    div {
      ul {
        text-align: start;
      }
    }
  }
}
</style>