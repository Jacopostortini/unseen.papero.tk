import * as PIXI from "pixi.js-legacy";

const loaderParameters = {
    latency: 1000,
    delay: 0,
    timeout: 3000
}
const minZoom = 0.15;
const maxZoom = 1;
const zoomSensibility = 15;
const keyScrollSpeed = 5;
const tileSize = 64;
const pathsTilesetDimension = {
    width: 4,
    height: 18
}
const stationsTilesetDimension = {
    width: 3,
    height: 1
}
const backgroundTilesetDimension = {
    width: 2,
    height: 4
}
const mapDimension = {
    width: 60,
    height: 40
};

function getContainerFromStations(stations, tileSize, tileTextures){
    let container = new PIXI.Container();
    for(let i = 0; i < stations.length; i++){
        let sprite = new PIXI.Sprite(tileTextures[stations[i].type]);
        sprite.x = tileSize * stations[i].point[0];
        sprite.y = tileSize * stations[i].point[1];
        let color = (stations[i].type === 2) ? "white" : "black";
        let label = new PIXI.Text(stations[i].number, {fontFamily: "sans-serif", fontWeight: "bold", fill: color});
        label.anchor.x = label.anchor.y = 0.5;
        label.x = sprite.width / 2;
        label.y = sprite.height / 2;
        sprite.addChild(label);
        container.addChild(sprite);
    }
    return container;
}

function keyPressed(event, instance) {
    switch (event.key.toString().toLowerCase()){
        case "w":
            instance.panBy({
                originX: 0,
                originY: keyScrollSpeed
            });
            break;
        case "arrowup":
            instance.panBy({
                originX: 0,
                originY: keyScrollSpeed
            });
            break;
        case "a":
            instance.panBy({
                originX: keyScrollSpeed,
                originY: 0
            });
            break;
        case "arrowleft":
            instance.panBy({
                originX: keyScrollSpeed,
                originY: 0
            });
            break;
        case "s":
            instance.panBy({
                originX: 0,
                originY: -keyScrollSpeed
            });
            break;
        case "arrowdown":
            instance.panBy({
                originX: 0,
                originY: -keyScrollSpeed
            });
            break;
        case "d":
            instance.panBy({
                originX: -keyScrollSpeed,
                originY: 0
            });
            break;
        case "arrowright":
            instance.panBy({
                originX: -keyScrollSpeed,
                originY: 0
            });
            break;
        case "+":
            instance.zoom({
                deltaScale: 1,
                x: 0,
                y: 0
            });
            break;
        case "-":
            instance.zoom({
                deltaScale: -1,
                x: 0,
                y: 0
            });
            break;
    }
}

Array.prototype.equals = function (arr) {
    if (arr.length !== this.length) return false;
    for(let i = 0; i < arr.length; i++){
        if (arr[i]!==this[i]) return false;
    }
    return true;
}

function findStationByPosition(x, y, stations){
    for(let i = 0; i < stations.length; i++){
        if(stations[i].point.equals([x, y])) return stations[i];
    }
    return null;
}

export {
    loaderParameters,
    minZoom,
    maxZoom,
    zoomSensibility,
    keyScrollSpeed,
    tileSize,
    pathsTilesetDimension,
    stationsTilesetDimension,
    backgroundTilesetDimension,
    mapDimension,
    getContainerFromStations,
    keyPressed,
    findStationByPosition
}
