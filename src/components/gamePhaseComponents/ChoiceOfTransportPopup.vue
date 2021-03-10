<template>
  <div class="choice-popup__main-wrapper"  @click="$emit('close-popup')">
    <div class="choice-popup__main-panel">
      <TransportCard class="choice"
                     v-for="(choice, index) in choices"
                     :key="index"
                     :color="colors[choice]"
                     :src="src[choice]"
                     @click.stop="$emit('transport-chosen', choice)">

      </TransportCard>
    </div>
  </div>
</template>

<script>
import TransportCard from "./TransportCard";
export default {
  name: "ChoiceOfTransportPopup",
  components: {TransportCard},
  props: {
    choices: Array
  },
  data(){
    return {
      colors: ["yellow", "blue", "red", "black"],
      src: [
        require("../../assets/meansOfTransport/taxi_icon.png"),
        require("../../assets/meansOfTransport/bus_icon.png"),
        require("../../assets/meansOfTransport/underground_icon.svg"),
        require("../../assets/meansOfTransport/secret_transport_icon.png"),
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.choice-popup__main-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.8);
  z-index: 3;

  .choice-popup__main-panel{
    display: flex;
    align-items: center;
    justify-content: center;

    .transport-card__main-panel{
      transition: all 0.2s;
      @media (max-width: 500px) {
        width: 20%;
      }

      &:hover {
        transform: scale(1.2) translateY(-10px);
      }
    }
  }
}

</style>