<template>
  <div class="map-manager__main-panel"
       id="map-manager__main-panel"></div>
</template>

<script>
import *  as PIXI from "pixi.js-legacy";
import {
  backgroundTilesetDimension,
  getContainerFromStations,
  keyPressed,
  mapDimension, maxZoom, minZoom,
  pathsTilesetDimension,
  stationsTilesetDimension,
  tileSize, zoomSensibility
} from "../../constants/mapConstants";
import stations from "../../constants/stations";
import {onMounted, ref} from "vue";
import pathsTilesetImage from "../../assets/pathsTileset.png";
import stationsTilesetImage from "../../assets/stationsTileset.png";
import backgroundTilesetImage from "../../assets/backgroundTileset.png";
import paths from "../../constants/paths";
import backgrounds from "../../constants/background";
import renderer from "../../modules/renderer";
export default {
  name: "MapManager",
  setup() {
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
        .add("backgroundTileset", backgroundTilesetImage)
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

          let backgroundTextures = [];
          for (let i = 0; i < backgroundTilesetDimension.width * backgroundTilesetDimension.height; i++) {
            let x = i % backgroundTilesetDimension.width;
            let y = Math.floor(i / backgroundTilesetDimension.width);
            backgroundTextures[i] = new PIXI.Texture(
                resources.backgroundTileset.texture,
                new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
            );
          }

          let links = new PIXI.Container();
          let background = new PIXI.Container();

          for (let row = 0; row < mapDimension.height; row++){
            for (let col = 0; col < mapDimension.width; col++){
              let pathTexture = pathsTextures[paths[row][col]];
              let pathSprite = new PIXI.Sprite(pathTexture);
              pathSprite.x = tileSize * col;
              pathSprite.y = tileSize * row;
              links.addChild(pathSprite);

              let backgroundTexture = backgroundTextures[backgrounds[row][col]];
              let backgroundSprite = new PIXI.Sprite(backgroundTexture);
              backgroundSprite.x = tileSize * col;
              backgroundSprite.y = tileSize * row;
              background.addChild(backgroundSprite);
            }
          }
          app.stage.addChild(background);
          app.stage.addChild(links);
          app.stage.addChild(getContainerFromStations(stations, tileSize, stationsTextures));
        });


    app.loader.onError.add((e)=>{
      console.error(e);
    });

    onMounted(() => {
      document.getElementById("map-manager__main-panel").appendChild(app.view);
      const dragging = ref(false);

      const container = document.getElementById("map-manager__main-panel");
      const instance = renderer({
        minScale: minZoom,
        maxScale: maxZoom,
        element: container.children[0],
        scaleSensitivity: zoomSensibility
      });

      instance.zoom({
        deltaScale: -11,
        x: window.innerWidth/50,
        y: window.innerHeight/20
      })

      container.addEventListener("wheel", (event) => {
        if (event.ctrlKey) return;
        event.preventDefault();
        instance.zoom({
          deltaScale: Math.sign(event.deltaY),
          x: event.pageX,
          y: event.pageY
        });
      });

      container.addEventListener("mousedown", () => {
        dragging.value = true;
        document.body.style.cursor = "move";
      });

      container.addEventListener("mousemove", (event) => {
        if (!dragging.value) return;
        event.preventDefault();
        instance.panBy({
          originX: event.movementX,
          originY: event.movementY
        });
      });

      container.addEventListener("mouseup", () => {
        dragging.value = false;
        document.body.style.cursor = "default";
      });

      window.addEventListener("keydown", (event) => keyPressed(event, instance));
    });

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