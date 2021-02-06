<template>
<div class="main-panel">
  <Header/>
  <MyGames/>
  <ManageNewGame/>
</div>
</template>

<script>
import Header from "@/components/homeComponents/Header";
import MyGames from "@/components/homeComponents/MyGames";
import ManageNewGame from "@/components/homeComponents/ManageNewGame";
export default {
  name: "Home",
  components: {ManageNewGame, MyGames, Header},
}
</script>

<style lang="scss" scoped>

.main-panel{
  background-image: url("../assets/background_image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 20% 1fr;
  grid-template-columns: 40% 60%;
  grid-template-areas: "header header" "my-games x";
  height: 100%;
}


</style>