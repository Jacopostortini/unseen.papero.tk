<template>
  <div class="map-manager__main-panel" id="map-manager__main-panel"></div>
</template>

<script>
import *  as PIXI from "pixi.js-legacy";
import mitt from "mitt";
import {
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
import pawnsTilesetImage from "../../assets/tilesets/pawnsTileset.png";
import paths from "../../constants/paths";
import streets from "../../constants/streets";
import buildings from "../../constants/buildings";
import background from "../../constants/background";

import renderer from "../../modules/renderer";

window.mitt = window.mitt || new mitt();
export default {
  name: "MapManager",
  props: {
    players: Array,
    currentPlayer: Object,
    autoZoom: Boolean
  },
  setup(props, ctx) {
    const app = new PIXI.Application({
      width: tileSize * mapDimension.width,
      height: tileSize * mapDimension.height,
      backgroundColor: 0xf7f7f7,
      antialias: false
    });

    PIXI.settings.ROUND_PIXELS = true;

    app.loader
        .add("pathsTileset", pathsTilesetImage)
        .add("stationsTileset", stationsTilesetImage)
        .add("streetsTileset", streetsTilesetImage)
        .add("buildingsTileset", buildingsTilesetImage)
        .add("backgroundTileset", backgroundTilesetImage)
        .add("pawnsTileset", pawnsTilesetImage)
        .load((loader, resources) => {

          //crop tilesets to get tiles textures
          let textures = {
            paths: [],
            stations: [],
            streets: [],
            buildings: [],
            backgrounds: [],
            pawns: []
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

          for (let i = 0; i < tilesetsDimension.pawns.width * tilesetsDimension.pawns.height; i++) {
            let x = i % tilesetsDimension.pawns.width;
            let y = Math.floor(i / tilesetsDimension.pawns.width);
            textures.pawns[i] = new PIXI.Texture(
                resources.pawnsTileset.texture,
                new PIXI.Rectangle(x * tileSize, y * tileSize * 2, tileSize, tileSize * 2)
            );
          }

          let pathsContainer = new PIXI.Container();
          let streetsContainer = new PIXI.Container();
          let buildingsContainer = new PIXI.Container();
          let backgroundContainer = new PIXI.Container();

          for (let row = 0; row < mapDimension.height; row++){
            for (let col = 0; col < mapDimension.width; col++){
              let pathCode = paths[row][col];
              if(pathCode>=0) {
                let pathTexture = textures.paths[pathCode];
                let pathSprite = new PIXI.Sprite(pathTexture);
                pathSprite.x = tileSize * col;
                pathSprite.y = tileSize * row;
                pathsContainer.addChild(pathSprite);
              }

              let streetCode = streets[row][col];
              if(streetCode>=0){
                let streetsTexture = textures.streets[streetCode];
                let streetsSprite = new PIXI.Sprite(streetsTexture);
                streetsSprite.x = tileSize * col;
                streetsSprite.y = tileSize * row;
                streetsContainer.addChild(streetsSprite);
              }

              let buildingCode = buildings[row][col];
              if(buildingCode>=0) {
                let buildingsTexture = textures.buildings[buildingCode];
                let buildingsSprite = new PIXI.Sprite(buildingsTexture);
                buildingsSprite.x = tileSize * col;
                buildingsSprite.y = tileSize * row;
                buildingsContainer.addChild(buildingsSprite);
              }

              let backgroundCode = background[row][col];
              if(backgroundCode>=0) {
                let backgroundTexture = textures.backgrounds[backgroundCode];
                let backgroundSprite = new PIXI.Sprite(backgroundTexture);
                backgroundSprite.x = tileSize * col;
                backgroundSprite.y = tileSize * row;
                backgroundContainer.addChild(backgroundSprite);
              }
            }
          }

          let stationsContainer = new PIXI.Container();
          for(let i = 0; i < stations.length; i++){
            let sprite = new PIXI.Sprite(textures.stations[stations[i].type]);
            sprite.x = tileSize * stations[i].point[0];
            sprite.y = tileSize * stations[i].point[1];
            let color = (stations[i].type === 2) ? "white" : "black";
            let label = new PIXI.Text(stations[i].number, {fontFamily: "sans-serif", fontWeight: "bold", fill: color});
            label.anchor.x = label.anchor.y = 0.5;
            label.x = sprite.width / 2;
            label.y = sprite.height / 2;
            sprite.addChild(label);
            sprite.interactive = true;
            sprite.buttonMode = true;
            stationsContainer.addChild(sprite);
            let clickStarts = () => {
              sprite.clickStartedDate = new Date().getTime();
            }
            let clickEnds = () => {
              if(new Date().getTime() - sprite.clickStartedDate < 1000) ctx.emit("station-clicked", i+1);
            }
            sprite.on("mousedown", clickStarts);
            sprite.on("touchstart", clickStarts);
            sprite.on("mouseup", clickEnds);
            sprite.on("touchend", clickEnds);
          }

          app.stage.addChild(backgroundContainer);
          app.stage.addChild(buildingsContainer);
          app.stage.addChild(streetsContainer);
          app.stage.addChild(pathsContainer);
          app.stage.addChild(stationsContainer);

          let pawnsContainer = new PIXI.Container();
          props.players.forEach(player => {
            let texture = textures.pawns[player.color+1];
            let sprite = new PIXI.Sprite(texture);
            if(player.position) {
              let point = stations[player.position - 1].point;
              sprite.x = point[0] * tileSize;
              sprite.y = (point[1]-1) * tileSize;
              sprite.interactive = true;
              sprite.on("mouseover", () => {
                sprite.texture = textures.paths[70];
              });
              sprite.on("mouseout", () => {
                sprite.texture = texture;
              });
            } else {
              sprite.visible = false;
            }
            pawnsContainer.addChild(sprite);
          });

          app.stage.addChild(pawnsContainer);

          let updatePawns = (players) => {
            players.forEach( (player, index) => {
              let sprite = pawnsContainer.children[index];
              if(player.position) {
                sprite.visible = true;
                let point = stations[player.position - 1].point;
                sprite.x = point[0] * tileSize;
                sprite.y = (point[1]-1) * tileSize;
              } else {
                sprite.visible = false;
              }
            });
          };
          window.mitt.on("update-pawns", updatePawns);
        });

    app.loader.onError.add((e)=>{
      console.error(e);
    });

    onMounted(() => {
      document.getElementById("map-manager__main-panel").appendChild(app.view);
      const dragging = ref(false);
      let width = window.innerWidth<501 ? window.innerWidth : window.innerHeight*1.5;
      let defaultScale = width / 60 / 64;
      const container = document.getElementById("map-manager__main-panel");
      let instance = renderer({
        minScale: Math.min(minZoom, defaultScale),
        maxScale: maxZoom,
        element: container.children[0],
        scaleSensitivity: zoomSensibility,
        defaultScale: defaultScale,
        containerDimension: {
          width: container.clientWidth,
          height: container.clientHeight
        }
      });

      window.addEventListener("resize", ()=>{
        width = window.innerWidth<501 ? window.innerWidth : window.innerHeight*1.5;
        defaultScale = width / 60 / 64;
        instance = renderer({
          minScale: Math.min(minZoom, defaultScale),
          maxScale: maxZoom,
          element: container.children[0],
          scaleSensitivity: zoomSensibility,
          defaultScale: defaultScale,
          containerDimension: {
            width: container.clientWidth,
            height: container.clientHeight
          }
        });
      })

      const zoomToPawn = (player) => {
        if(!player.position) return;
        let x = tileSize * stations[player.position-1].point[0] * defaultScale;
        let y = tileSize * stations[player.position-1].point[1] * defaultScale;
        instance.zoom({
          x: x,
          y: y,
          deltaScale: 10
        });
      }
      instance.toDefault();
      if (props.autoZoom) zoomToPawn(props.currentPlayer);

      window.mitt.on("zoom-to-default", instance.toDefault);
      window.mitt.on("zoom-to-pawn", zoomToPawn);

      container.addEventListener("wheel", (event) => {
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

      container.addEventListener("dblclick", (event) => {
        event.preventDefault();
        instance.toDefault();
      })

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

      let previousTouch;
      //let lastTapTimeStamp;
      let lastMiddlePoint;
      let lastDistance;
      const getDistanceFromTouches = (touches) => Math.sqrt( Math.pow(touches[0].pageX-touches[1].pageX, 2) + Math.pow(touches[0].pageY-touches[1].pageY, 2) )
      const getMiddlePointFromTouches = (touches) => {
        return {
          x: (touches[0].pageX+touches[1].pageX)/2,
          y: (touches[0].pageY+touches[1].pageY)/2
        }
      }
      container.addEventListener("touchstart", (event) => {
        if(event.touches.length <= 2) {
          previousTouch = event;
          if (event.touches.length === 2) {
            lastDistance = getDistanceFromTouches(event.touches);
            lastMiddlePoint = getMiddlePointFromTouches(event.touches);
          }
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
        }else if(event.touches.length === 2) {
          let distance = getDistanceFromTouches(event.touches);
          let deltaScale = Math.sign(distance/lastDistance - 1) / 2;

          let {x, y} = getMiddlePointFromTouches(event.touches);
          instance.zoom({x, y, deltaScale});
          instance.panBy({
            originX: x - lastMiddlePoint.x,
            originY: y - lastMiddlePoint.y
          });
          lastMiddlePoint = {x, y};
          lastDistance = distance;

        }
      });


      /*container.addEventListener("touchend", (event) => {
        if (event.changedTouches.length === 1){
          previousTouch = null;
          if(event.timeStamp - lastTapTimeStamp < 500) instance.toDefault();
          lastTapTimeStamp = event.timeStamp;
        }
      });*/

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
  @media (max-width: 500px) {
    width: 100%;
    height: 300px;
    position: sticky;
    top: 0;
    z-index: 2;
  }
}
</style>
