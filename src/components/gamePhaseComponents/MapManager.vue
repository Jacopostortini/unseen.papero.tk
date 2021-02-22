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
  //getContainerFromPathObject,
  getContainerFromStations,
  keyPressed,
  mapDimension,
  mouseWheelReductionFactor,
  pathsTilesetDimension,
  stationsTilesetDimension,
  tileSize,
  zoomFunctionBase
} from "../../constants/mapConstants";
import stations from "../../constants/stations";
import {onMounted, computed, ref} from "vue";
import pathsTilesetImage from "../../assets/pathsTileset.png";
import stationsTilesetImage from "../../assets/stationsTileset.png";
import paths from "../../constants/paths";
//import links from "../../constants/links";
export default {
  name: "MapManager",
  setup() {
    const deltaY = ref(0);
    const dragging = ref(false);
    const scale = computed(function (){
      return Math.pow(zoomFunctionBase, deltaY.value/mouseWheelReductionFactor);
    });

    const app = new PIXI.Application({
      width: tileSize * mapDimension.width,
      height: tileSize * mapDimension.height,
      transparent: true,
      antialias: false
    });

    PIXI.settings.ROUND_PIXELS = true;

    app.loader
        .add("pathsTileset", pathsTilesetImage)
        .add("stationsTileset", stationsTilesetImage)
        //.add("backgroundTileset", "tileset.png")
        .load((loader, resources) => {

          //crop tilesets to get tiles textures

          let pathsTextures = [];
          for (let i = 0; i < pathsTilesetDimension.width * pathsTilesetDimension.height; i++) {
            let x = i % pathsTilesetDimension.width;
            let y = Math.floor(i / pathsTilesetDimension.width);
            pathsTextures[i] = new PIXI.Texture(
                resources.pathsTileset.texture,
                new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
            );
          }

          let stationsTextures = [];
          for (let i = 0; i < stationsTilesetDimension.width * stationsTilesetDimension.height; i++) {
            let x = i % stationsTilesetDimension.width;
            let y = Math.floor(i / stationsTilesetDimension.width);
            stationsTextures[i] = new PIXI.Texture(
                resources.stationsTileset.texture,
                new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
            );
          }

          /*for (let i = 0; i < links.length; i++){
            app.stage.addChild(getContainerFromPathObject(links[i], stations, tileSize, pathTextures));
          }*/
          let links = new PIXI.Container();
          for (let row = 0; row < mapDimension.height; row++){
            for (let col = 0; col < mapDimension.width; col++){
              let texture = pathsTextures[paths[row][col]];
              let sprite = new PIXI.Sprite(texture);
              sprite.x = tileSize * col;
              sprite.y = tileSize * row;
              links.addChild(sprite);
            }
          }
          app.stage.addChild(links);
          app.stage.addChild(getContainerFromStations(stations, tileSize, stationsTextures));
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