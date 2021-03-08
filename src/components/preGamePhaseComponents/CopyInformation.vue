<template>
  <div class="copy-information__main-panel" @mouseover="hover=true" @mouseleave="hover=false">
    <p class="label">{{ message }}</p>
    <div>
      <p class="copy-information__info">{{ info }}</p>
      <button v-clipboard:copy="info" v-if="hover" @click="onCopied">
        Copy
        <span :class="{'copied': copied}" v-if="copied">Copied</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CopyInformation",
  props: {
    message: String,
    info: String
  },
  data(){
    return {
      copied: false,
      hover: false
    }
  },
  methods: {
    onCopied(){
      this.copied=true;
      const sleep = (s) => {
        return new Promise(resolve => setTimeout(resolve, (s*1000)))
      }
      sleep(1).then(()=>{this.copied=false});
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";

.copy-information__main-panel{
  margin: 5vh 0 5vh 0;
  color: white;
  font-size: 3vh;
  display: grid;
  grid-template-rows: 50% 50%;
  align-items: center;

  .label{
    margin-bottom: 5%;
  }

  div{
    display: flex;
    align-items: center;

    .copy-information__info{
      margin: 0;
      border: 2px solid white;
      padding: 3%;
    }

    button{
      position: relative;
      animation: fade-in 0.5s;
      border: none;
      font-size: 3vh;
      font-weight: bold;

      span{
        position: absolute;
        left: 0;

        &.copied{
          animation: copied 1s;
        }
      }

      &:hover{
        background-color: transparent;
        color: white;
      }
    }
  }

}

@keyframes copied {
  0% {
    color: white;
    transform: translateY(0) scale(0);
  }
  75%{
    transform: translateY(-15px) scale(1);
    color: rgba(255, 255, 255, 200);
  }
  100% {
    transform: translateY(-20px) scale(1);
    color: transparent;
  }
}
</style>