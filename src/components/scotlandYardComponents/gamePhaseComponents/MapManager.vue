<template>
  <div class="map-manager__main-panel" @wheel.prevent="zoom" @mousedown.prevent="mouseDown" @mousemove.prevent="mouseMove" @mouseup.prevent="mouseUp">
    <img src="/assets/map.jpeg" class="map-manager__map" :style="{width: imgPercentage+'%'}">
  </div>
</template>

<script>
import { zoomFunctionBase, mouseWheelReductionFactor, keyScrollSpeed } from "../../../constants/scotlandYardConstants";
export default {
  name: "MapManager",
  data(){
    return {
      deltaY: 0,
      dragging: false
    }
  },
  methods: {
    verticalScroll(number, element) {
      element.scrollTop += number;
    },
    horizontalScroll(number, element) {
      element.scrollLeft += number;
    },
    keyPressed(event) {
      let elementClass = ".map-manager__main-panel";
      switch (event.key.toString().toLowerCase()){
        case "w":
          this.verticalScroll(-keyScrollSpeed, document.querySelector(elementClass));
          break;
        case "arrowup":
          this.verticalScroll(-keyScrollSpeed, document.querySelector(elementClass));
          break;
        case "a":
          this.horizontalScroll(-keyScrollSpeed, document.querySelector(elementClass));
          break;
        case "arrowleft":
          this.horizontalScroll(-keyScrollSpeed, document.querySelector(elementClass));
          break;
        case "s":
          this.verticalScroll(keyScrollSpeed, document.querySelector(elementClass));
          break;
        case "arrowdown":
          this.verticalScroll(keyScrollSpeed, document.querySelector(elementClass));
          break;
        case "d":
          this.horizontalScroll(keyScrollSpeed, document.querySelector(elementClass));
          break;
        case "arrowright":
          this.horizontalScroll(keyScrollSpeed, document.querySelector(elementClass));
          break;
      }
    },
    mouseDown() {
      this.dragging = true;
    },
    mouseMove(event) {
      if(this.dragging){
        event.target.parentNode.style.cursor = "move";
        event.target.parentNode.scrollLeft -= event.movementX;
        event.target.parentNode.scrollTop -= event.movementY;
      }
    },
    mouseUp(event) {
      this.dragging = false;
      event.target.parentNode.style.cursor = "auto";
    },
    zoom(event) {
      let zoomFactor = 1;
      if(this.deltaY+event.deltaY<0){
        this.deltaY = 0;
      } else {
        this.deltaY += event.deltaY;
        zoomFactor = Math.pow(zoomFunctionBase, event.deltaY/mouseWheelReductionFactor);
      }
      let panel = document.querySelector(".map-manager__main-panel");
      let sL = event.offsetX*(zoomFactor-1)+panel.scrollLeft*zoomFactor;
      let sT = event.offsetY*(zoomFactor-1)+panel.scrollTop*zoomFactor;
      panel.scrollLeft = Math.round(sL);
      panel.scrollTop = Math.round(sT);
    }
  },
  computed: {
    imgPercentage: function () {
      return 100*Math.pow(zoomFunctionBase, this.deltaY/mouseWheelReductionFactor);
    }
  },
  mounted() {
    window.addEventListener("keydown", this.keyPressed);
  }
}
</script>

<style lang="scss" scoped>
.map-manager__main-panel{
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 0 20px 20px 0;
  .map-manager__map{
    vertical-align: top;
  }
}
</style>