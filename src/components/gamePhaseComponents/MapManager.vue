<template>
  <div class="map-manager__main-panel" id="map-manager__main-panel"></div>
</template>

<script>
import *  as PIXI from "pixi.js-legacy";
import {
  findStationByPosition,
  getContainerFromStations,
  keyPressed,
  tilesetsDimension,
  mapDimension,
  maxZoom,
  minZoom,
  tileSize,
  zoomSensibility
} from "../../constants/mapConstants";
import stations from "../../constants/stations";
import {onMounted, ref} from "vue";
import pathsTilesetImage from "../../assets/tilesets/pathsTileset.png";
import stationsTilesetImage from "../../assets/tilesets/stationsTileset.png";
import streetsTilesetImage from "../../assets/tilesets/streetsTileset.png";
import buildingsTilesetImage from "../../assets/tilesets/buildingsTileset.png";
import backgroundTilesetImage from "../../assets/tilesets/backgroundTileset.png";
import paths from "../../constants/paths";
import streets from "../../constants/streets";
import buildings from "../../constants/buildings";
import background from "../../constants/background";

import renderer from "../../modules/renderer";
export default {
  name: "MapManager",
  props: {
    players: Array
  },
  setup(props, ctx) {
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
        .add("streetsTileset", streetsTilesetImage)
        .add("buildingsTileset", buildingsTilesetImage)
        .add("backgroundTileset", backgroundTilesetImage)
        .load((loader, resources) => {

          //crop tilesets to get tiles textures
          let textures = {
            paths: [],
            stations: [],
            streets: [],
            buildings: [],
            backgrounds: []
          }

          for (let i = 0; i < tilesetsDimension.paths.width * tilesetsDimension.paths.height; i++) {
            let x = i % tilesetsDimension.paths.width;
            let y = Math.floor(i / tilesetsDimension.paths.width);
            textures.paths[i] = new PIXI.Texture(
                resources.pathsTileset.texture,
                new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
            );
          }

          for (let i = 0; i < tilesetsDimension.stations.width * tilesetsDimension.stations.height; i++) {
            let x = i % tilesetsDimension.stations.width;
            let y = Math.floor(i / tilesetsDimension.stations.width);
            textures.stations[i] = new PIXI.Texture(
                resources.stationsTileset.texture,
                new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
            );
          }

          for (let i = 0; i < tilesetsDimension.streets.width * tilesetsDimension.streets.height; i++) {
            let x = i % tilesetsDimension.streets.width;
            let y = Math.floor(i / tilesetsDimension.streets.width);
            textures.streets[i] = new PIXI.Texture(
                resources.streetsTileset.texture,
                new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
            );
          }

          for (let i = 0; i < tilesetsDimension.buildings.width * tilesetsDimension.buildings.height; i++) {
            let x = i % tilesetsDimension.buildings.width;
            let y = Math.floor(i / tilesetsDimension.buildings.width);
            textures.buildings[i] = new PIXI.Texture(
                resources.buildingsTileset.texture,
                new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
            );
          }

          for (let i = 0; i < tilesetsDimension.background.width * tilesetsDimension.background.height; i++) {
            let x = i % tilesetsDimension.background.width;
            let y = Math.floor(i / tilesetsDimension.background.width);
            textures.backgrounds[i] = new PIXI.Texture(
                resources.backgroundTileset.texture,
                new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
            );
          }

          let pathsContainer = new PIXI.Container();
          let streetsContainer = new PIXI.Container();
          let buildingsContainer = new PIXI.Container();
          let backgroundContainer = new PIXI.Container();

          for (let row = 0; row < mapDimension.height; row++){
            for (let col = 0; col < mapDimension.width; col++){
              let pathTexture = textures.paths[paths[row][col]];
              let pathSprite = new PIXI.Sprite(pathTexture);
              pathSprite.x = tileSize * col;
              pathSprite.y = tileSize * row;
              pathsContainer.addChild(pathSprite);

              let streetsTexture = textures.streets[streets[row][col]];
              let streetsSprite = new PIXI.Sprite(streetsTexture);
              streetsSprite.x = tileSize * col;
              streetsSprite.y = tileSize * row;
              streetsContainer.addChild(streetsSprite);

              let buildingsTexture = textures.buildings[buildings[row][col]];
              let buildingsSprite = new PIXI.Sprite(buildingsTexture);
              buildingsSprite.x = tileSize * col;
              buildingsSprite.y = tileSize * row;
              buildingsContainer.addChild(buildingsSprite);

              let backgroundTexture = textures.backgrounds[background[row][col]];
              let backgroundSprite = new PIXI.Sprite(backgroundTexture);
              backgroundSprite.x = tileSize * col;
              backgroundSprite.y = tileSize * row;
              backgroundContainer.addChild(backgroundSprite);
            }
          }

          app.stage.addChild(backgroundContainer);
          app.stage.addChild(buildingsContainer);
          app.stage.addChild(streetsContainer);
          app.stage.addChild(pathsContainer);
          app.stage.addChild(getContainerFromStations(stations, tileSize, textures.stations));

          let pawnsContainer = new PIXI.Container();
          props.players.forEach(player => {
            let texture = textures.stations[player.color+4];
            let sprite = new PIXI.Sprite(texture);
            if(player.position) {
              let point = stations[player.position - 1].point;
              sprite.x = point[0] * tileSize;
              sprite.y = point[1] * tileSize;
            } else {
              sprite.visible = false;
            }
            pawnsContainer.addChild(sprite);
          });

          app.stage.addChild(pawnsContainer);

          app.ticker.add(()=>{
            props.players.forEach( (player, index) => {
              let sprite = pawnsContainer.children[index];
              if(player.position) {
                sprite.visible = true;
                let point = stations[player.position - 1].point;
                sprite.x = point[0] * tileSize;
                sprite.y = point[1] * tileSize;
              } else {
                sprite.visible = false;
              }
            });
          })
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

      let date;
      container.addEventListener("mousedown", () => {
        dragging.value = true;
        document.body.style.cursor = "move";
        date = new Date().getTime();
      });

      container.addEventListener("mousemove", (event) => {
        if (!dragging.value) return;
        event.preventDefault();
        instance.panBy({
          originX: event.movementX,
          originY: event.movementY
        });
      });

      container.addEventListener("mouseup", (event) => {
        dragging.value = false;
        document.body.style.cursor = "default";
        if (new Date().getTime() - date < 1000) {
          let x = Math.floor(event.offsetX/tileSize);
          let y = Math.floor(event.offsetY/tileSize);
          let clicked = findStationByPosition(x, y, stations);
          if(clicked) ctx.emit("station-clicked", clicked.number);
        }
      });

      let previousTouch;
      container.addEventListener("touchstart", (event) => {
        if(event.touches.length === 1) {
          date = new Date().getTime();
          previousTouch = event;
        }
      });

      container.addEventListener("touchmove", (event) => {
        if(event.touches.length === 1){
          let dx = event.touches[0].pageX-previousTouch.touches[0].pageX;
          let dy = event.touches[0].pageY-previousTouch.touches[0].pageY;
          instance.panBy({
            originX: dx,
            originY: dy
          });
          previousTouch = event;
        }
      });

      container.addEventListener("touchend", (event) => {
        if (event.touches.length === 1){
          previousTouch = null;
          if (new Date().getTime() - date < 1000) {
            let x = Math.floor(event.offsetX/tileSize);
            let y = Math.floor(event.offsetY/tileSize);
            let clicked = findStationByPosition(x, y, stations);


            if(clicked) ctx.emit("station-clicked", clicked.number);
          }
        }
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
