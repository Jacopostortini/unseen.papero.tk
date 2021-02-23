import * as PIXI from "pixi.js";

const zoomFunctionBase = 1.1;
const mouseWheelReductionFactor = 100;
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

function verticalScroll(number, element) {
    element.scrollTop += number;
}

function horizontalScroll(number, element) {
    element.scrollLeft += number;
}

function keyPressed(event) {
    let elementClass = ".map-manager__main-panel";
    switch (event.key.toString().toLowerCase()){
        case "w":
            verticalScroll(-keyScrollSpeed, document.querySelector(elementClass));
            break;
        case "arrowup":
            verticalScroll(-keyScrollSpeed, document.querySelector(elementClass));
            break;
        case "a":
            horizontalScroll(-keyScrollSpeed, document.querySelector(elementClass));
            break;
        case "arrowleft":
            horizontalScroll(-keyScrollSpeed, document.querySelector(elementClass));
            break;
        case "s":
            verticalScroll(keyScrollSpeed, document.querySelector(elementClass));
            break;
        case "arrowdown":
            verticalScroll(keyScrollSpeed, document.querySelector(elementClass));
            break;
        case "d":
            horizontalScroll(keyScrollSpeed, document.querySelector(elementClass));
            break;
        case "arrowright":
            horizontalScroll(keyScrollSpeed, document.querySelector(elementClass));
            break;
    }
}

export {
    zoomFunctionBase,
    mouseWheelReductionFactor,
    keyScrollSpeed,
    tileSize,
    pathsTilesetDimension,
    stationsTilesetDimension,
    backgroundTilesetDimension,
    mapDimension,
    getContainerFromStations,
    verticalScroll,
    horizontalScroll,
    keyPressed
}
