<template>
  <router-view/>
</template>

<style lang="scss">
@import "styles/global";

@font-face {
  font-family: Eutemia;
  src: local("Eutemia"), url(./fonts/Eutemia.ttf) format("truetype");
}

#app{
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 150%;
}

/* width */
::-webkit-scrollbar {
  width: 0;
}

</style>
