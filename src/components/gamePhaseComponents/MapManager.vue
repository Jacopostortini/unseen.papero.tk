<template>
  <div class="map-manager__main-panel" id="map-manager__main-panel">

  </div>
</template>

<script>
import *  as PIXI from "pixi.js";
import {
  getContainerFromStations,
  map,
  pathTilesetHeight,
  pathTilesetWidth,
  scale,
  tileSize
} from "../../constants/mapConstants";
import stations from "../../constants/stations";
import {onMounted} from "vue";
import pathTilesetImage from "../../assets/pathtileset.png";
export default {
  name: "MapManager",
  /*methods: {
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
  },*/
  setup() {
    //window.addEventListener("keydown", this.keyPressed);

    const app = new PIXI.Application({
      width: tileSize * scale * map.width,
      height: tileSize * scale * map.height,
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

          /*for (let i = 0; i < links.length; i++){
            app.stage.addChild(getContainerFromPathObject(links[i], tileSize, scale, pathTextures));
          }*/
          app.stage.addChild(getContainerFromStations(stations, tileSize, scale, pathTextures));

        });


    app.loader.onError.add((e)=>{
      console.error(e);
    });

    onMounted(() => {
      document.getElementById("map-manager__main-panel").appendChild(app.view);
    })

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