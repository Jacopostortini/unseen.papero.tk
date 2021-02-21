<template>
  <div class="map-manager__main-panel"
       id="map-manager__main-panel"
       @mousedown="mouseDown"
       @mousemove="mouseMove"
       @mouseup="mouseUp"></div>
</template>

<script>
import *  as PIXI from "pixi.js";
import {
  getContainerFromPathObject,
  getContainerFromStations,
  keyPressed,
  map,
  mouseWheelReductionFactor,
  pathTilesetHeight,
  pathTilesetWidth,
  tileSize,
  zoomFunctionBase
} from "../../constants/mapConstants";
import stations from "../../constants/stations";
import {onMounted, computed, ref} from "vue";
import pathTilesetImage from "../../assets/pathtileset.png";
import links from "../../constants/links";
export default {
  name: "MapManager",
  setup() {
    const deltaY = ref(0);
    const dragging = ref(false);
    const scale = computed(function (){
      return Math.pow(zoomFunctionBase, deltaY.value/mouseWheelReductionFactor);
    });

    const app = new PIXI.Application({
      width: tileSize * map.width,
      height: tileSize * map.height,
      transparent: true,
      antialias: false
    });

    PIXI.settings.ROUND_PIXELS = true;

    app.loader
        .add("pathTileset", pathTilesetImage)
        //.add("backgroundTileset", "tileset.png")
        .load((loader, resources) => {

          //crop tilesets to get tiles textures

          let pathTextures = [];
          for (let i = 0; i < pathTilesetWidth * pathTilesetHeight; i++) {
            let x = i % pathTilesetWidth;
            let y = Math.floor(i / pathTilesetWidth);
            pathTextures[i] = new PIXI.Texture(
                resources.pathTileset.texture,
                new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
            );
          }

          for (let i = 0; i < links.length; i++){
            app.stage.addChild(getContainerFromPathObject(links[i], stations, tileSize, pathTextures));
          }
          app.stage.addChild(getContainerFromStations(stations, tileSize, pathTextures));

        });


    app.loader.onError.add((e)=>{
      console.error(e);
    });

    function mouseDown() {
      dragging.value = true;
    }

    function mouseMove(event) {
      if(dragging.value){
        event.target.parentNode.style.cursor = "move";
        event.target.parentNode.scrollLeft -= event.movementX;
        event.target.parentNode.scrollTop -= event.movementY;
      }
    }

    function mouseUp(event) {
      dragging.value = false;
      event.target.parentNode.style.cursor = "auto";
    }

    function zoom(event) {
      let zoomFactor = 1;
      if(deltaY.value+event.deltaY<0){
        deltaY.value = 0;
      } else {
        deltaY.value += event.deltaY;
        zoomFactor = Math.pow(zoomFunctionBase, event.deltaY/mouseWheelReductionFactor);
      }
      let panel = document.querySelector(".map-manager__main-panel");
      let sL = event.offsetX*(zoomFactor-1)+panel.scrollLeft*zoomFactor;
      let sT = event.offsetY*(zoomFactor-1)+panel.scrollTop*zoomFactor;
      panel.scrollLeft = Math.round(sL);
      panel.scrollTop = Math.round(sT);
    }

    onMounted(() => {
      document.getElementById("map-manager__main-panel").appendChild(app.view);
      window.addEventListener("keydown", keyPressed);
    });

    return{
      scale,
      mouseDown,
      mouseMove,
      mouseUp,
      zoom
    }
  }
}
</script>

<style lang="scss" scoped>

.map-manager__main-panel{
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 0 20px 20px 0;
}
</style>