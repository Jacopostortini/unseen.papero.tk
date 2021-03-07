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
        height: 8
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

export {
    loaderParameters,
    minZoom,
    maxZoom,
    zoomSensibility,
    keyScrollSpeed,
    tileSize,
    tilesetsDimension,
    mapDimension,
    keyPressed
}
