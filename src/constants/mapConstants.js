import * as PIXI from "pixi.js";

const zoomFunctionBase = 1.1;
const mouseWheelReductionFactor = 100;
const keyScrollSpeed = 5;
const tileSize = 64;
const pathsTilesetDimension = {
    width: 4,
    height: 15
}
const stationsTilesetDimension = {
    width: 3,
    height: 1
}
const mapDimension = {
    width: 60,
    height: 40
};

Array.prototype.equals = function(arr){
    if(!arr) return false;
    if(this.length !== arr.length) return false;
    for(let i = 0; i < this.length; i++){
        if(this[i] !== arr[i]) return false;
    }
    return true;
}

Array.prototype.containsArray = function (arr, from){
    if(!arr) return false;
    for (let i = from || 0; i < this.length; i++){
        if(this[i].equals(arr)) return true;
    }
    return false;
}

function getContainerFromPathObject(path, stations, tileSize, tileTextures){
    let from = stations[path.from-1].point;
    let to = stations[path.to-1].point;
    let currentPoint = [...from];
    let currentDirection = path.direction;
    let m = Math.sign( ( to[1]-from[1] ) / ( to[0]-from[0]) );
    let turnsDone = 0;
    let container = new PIXI.Container();
    while(!currentPoint.equals(to)){
        let sprite;
        if(currentDirection===0) currentPoint[0] += (m===0) ? 1 : m;
        else currentPoint[1]++;
        if(currentPoint.equals((to))) break;
        let isTurningPoint = path.turns.containsArray(currentPoint, turnsDone);
        if (isTurningPoint) {
            if(path.type < 3) {
                if (m === 1) sprite = new PIXI.Sprite(tileTextures[2 * 3 * path.type + 2 + 1 + currentDirection]);
                else sprite = new PIXI.Sprite(tileTextures[2 * 3 * path.type + 2 + 3 * currentDirection]);
            } else {
                sprite = new PIXI.Sprite(tileTextures[8 * path.type - 6 + 2 + 2*(m+1) + currentDirection]);
            }
            currentDirection = 1 - currentDirection;
            turnsDone++;
        } else {
            if(path.type < 3) {
                sprite = new PIXI.Sprite(tileTextures[2 * 3 * path.type + currentDirection]);
            } else {
                m = m===0 ? 1 : m;
                sprite = new PIXI.Sprite(tileTextures[8 * path.type - 6 + 2*(m+1) + currentDirection]);
            }

        }
        sprite.x = tileSize * currentPoint[0];
        sprite.y = tileSize * currentPoint[1];
        container.addChild(sprite);
    }
    console.log(path.from, path.to);
    return container;
}

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
    mapDimension,
    getContainerFromPathObject,
    getContainerFromStations,
    verticalScroll,
    horizontalScroll,
    keyPressed
}