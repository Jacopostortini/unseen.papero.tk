<template>
<div class="main-panel">
  <Header :logged="logged"/>
  <MyGames/>
  <ManageNewGame/>
</div>
</template>

<script>
import Header from "@/components/homeComponents/Header";
import MyGames from "@/components/homeComponents/MyGames";
import ManageNewGame from "@/components/homeComponents/ManageNewGame";
import axios from "vue-axios";
import {getLoginInfoUrl} from "../constants/constants";
export default {
  name: "Home",
  components: {ManageNewGame, MyGames, Header},
  data(){
    return {
      logged: null
    }
  },
  mounted() {
    axios
        .get(getLoginInfoUrl)
        .then((response)=>{this.logged = !!response.data})
  }
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