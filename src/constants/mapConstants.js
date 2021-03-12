const loaderParameters = {
    latency: 1000,
    delay: 0,
    timeout: 3000
}
const zoomAndPanParams = {
    minZoom: 0.15,
    maxZoom: 1,
    zoomSensibility: 15,
    keyScrollSpeed: 5,
    defaultZoom: 10,
    doubleTapDistanceTolerance: 10,
    doubleTapTimeTolerance: 500
}
const tileSize = 64;
const tilesetsDimension = {
    paths: {
        width: 4,
        height: 18
    },
    stations: {
        width: 3,
        height: 1
    },
    streets: {
        width: 2,
        height: 7
    },
    buildings: {
        width: 2,
        height: 20
    },
    background: {
        width: 2,
        height: 10
    },
    pawns: {
        width: 3,
        height: 2
    }
}

const mapDimension = {
    width: 60,
    height: 40
};

function keyPressed(event, instance) {
    switch (event.key.toString().toLowerCase()){
        case "w":
            instance.panBy({
                originX: 0,
                originY: zoomAndPanParams.keyScrollSpeed
            });
            break;
        case "arrowup":
            instance.panBy({
                originX: 0,
                originY: zoomAndPanParams.keyScrollSpeed
            });
            break;
        case "a":
            instance.panBy({
                originX: zoomAndPanParams.keyScrollSpeed,
                originY: 0
            });
            break;
        case "arrowleft":
            instance.panBy({
                originX: zoomAndPanParams.keyScrollSpeed,
                originY: 0
            });
            break;
        case "s":
            instance.panBy({
                originX: 0,
                originY: -zoomAndPanParams.keyScrollSpeed
            });
            break;
        case "arrowdown":
            instance.panBy({
                originX: 0,
                originY: -zoomAndPanParams.keyScrollSpeed
            });
            break;
        case "d":
            instance.panBy({
                originX: -zoomAndPanParams.keyScrollSpeed,
                originY: 0
            });
            break;
        case "arrowright":
            instance.panBy({
                originX: -zoomAndPanParams.keyScrollSpeed,
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

export {
    loaderParameters,
    zoomAndPanParams,
    tileSize,
    tilesetsDimension,
    mapDimension,
    keyPressed
}
