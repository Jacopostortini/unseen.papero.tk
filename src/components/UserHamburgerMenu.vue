<template>
  <div class="user-hamburger-menu__main-panel" @click.stop="" :class="{'hidden': !show}">
    <div class="user-hamburger-menu__menu">
      you are logged in as {{login.username}}
    </div>
    <div class="user-hamburger-menu__icon" @click="show=!show" :class="{'rotated': show}">
      <img src="@/assets/hamburger_icon.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHamburgerMenu",
  props: {
    login: {
      required: true
    }
  },
  data(){
    return{
      show: false
    }
  },
  mounted() {
    window.addEventListener("click", ()=>{this.show=false});
  }
}
</script>

<style lang="scss" scoped>
.user-hamburger-menu__main-panel{
  position: fixed;
  top: 0;
  left: 0;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-flow: row;
  transition: all 0.5s;

  &.hidden{
    transform: translateX(calc(-20vw - 1px));
  }

  .user-hamburger-menu__menu{
    width: 20vw;
    height: 100vh;
    background-color: white;
  }

  .user-hamburger-menu__icon{
    margin-top: 15px;
    margin-left: 15px;
    width: 5vh;
    height: 5vh;
    transition: all 0.5s;

    img{
      width: 100%;
      height: 100%;
    }

    &.rotated{
      transform: rotate(90deg);
    }
  }
}
</style>