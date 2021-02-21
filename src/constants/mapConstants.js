import * as PIXI from "pixi.js";

const scale = 0.5;
const tileSize = 64;
const pathTilesetWidth = 2;
const pathTilesetHeight = 19;
const map = {
    width: 60,
    height: 40,
    background: [
        [7, 7, 7, 7],
        [7, 7, 7, 7],
        [7, 7, 7, 7],
        [7, 7, 7, 7]
    ]
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

function getContainerFromPathObject(path, tileSize, scale, tileTextures){
    let currentPoint = path.from;
    let currentDirection = path.direction;
    let m = Math.sign( (path.to[1]-path.from[1]) / (path.to[0]-path.from[0]) );
    let turnsDone = 0;
    let container = new PIXI.Container();
    while(!currentPoint.equals(path.to)){
        let sprite;
        if(currentDirection===0) currentPoint[0] += (m===0) ? 1 : m;
        else currentPoint[1]++;
        if(currentPoint.equals((path.to))) break;
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
                sprite = new PIXI.Sprite(tileTextures[8 * path.type - 6 + 2*(m+1) + currentDirection]);
            }

        }
        sprite.x = scale * tileSize * currentPoint[0];
        sprite.y = scale * tileSize * currentPoint[1];
        sprite.scale.x = sprite.scale.y = scale;
        container.addChild(sprite);
    }
    return container;
}

function getContainerFromStations(stations, tileSize, scale, tileTextures){
    let container = new PIXI.Container();
    for(let i = 0; i < stations.length; i++){
        let sprite = new PIXI.Sprite(tileTextures[34+stations[i].type]);
        sprite.x = scale * tileSize * stations[i].point[0];
        sprite.y = scale * tileSize * stations[i].point[1];
        let color = (stations[i].type === 2) ? "white" : "black";
        let label = new PIXI.Text(stations[i].number, {fontFamily: "sans-serif", fontWeight: "bold", fill: color});
        label.anchor.x = label.anchor.y = 0.5;
        label.x = sprite.width / 2;
        label.y = sprite.height / 2;
        sprite.scale.x = sprite.scale.y = scale;
        sprite.addChild(label);
        container.addChild(sprite);
    }
    return container;
}

export {
    scale,
    tileSize,
    pathTilesetWidth,
    pathTilesetHeight,
    map,
    getContainerFromPathObject,
    getContainerFromStations
}