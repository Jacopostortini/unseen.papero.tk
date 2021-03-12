const hasPositionChanged = ({ pos, prevPos }) => pos !== prevPos;

const valueInRange = ({ minScale, maxScale, scale }) => scale <= maxScale && scale >= minScale;

const getTranslate = ({ minScale, maxScale, scale }) => ({ pos, prevPos, translate }) =>
    valueInRange({ minScale, maxScale, scale }) && hasPositionChanged({ pos, prevPos })
        ? translate + (pos - prevPos * scale) * (1 - 1 / scale)
        : translate;

const getScale = ({ scale, minScale, maxScale, scaleSensitivity, deltaScale }) => {
    let newScale = scale + (deltaScale / (scaleSensitivity / scale));
    newScale = Math.max(minScale, Math.min(newScale, maxScale));
    return [scale, newScale];
};

const getMatrix = ({ scale, translateX, translateY }) => `matrix(${scale}, 0, 0, ${scale}, ${translateX}, ${translateY})`;

const pan = ({ state, originX, originY, controls=true }) => {
    let {left, top, width, height} = state.element.getBoundingClientRect();
    let parentWidth = state.containerDimension.width;
    let parentHeight = state.containerDimension.height;
    const {minScale, maxScale, scale} = state;
    const translate = getTranslate({minScale, maxScale, scale});
    if( ( ( left+originX<=0 || originX<0 ) && ( left+width+originX>=parentWidth || originX>0 ) ) || !controls){
        state.transformation.translateX += originX;
    } else {
        state.transformation.translateX = translate({pos: 0, prevPos: state.transformation.originX, translate: state.transformation.translateX});
    }
    if( ( ( top+originY<=0 || originY<0 ) && ( top+height+originY>=parentHeight || originY>0 ) ) || !controls) {
        state.transformation.translateY += originY;
    } else {
        state.transformation.translateY = translate({pos: 0, prevPos: state.transformation.originY, translate: state.transformation.translateY});
    }
    state.element.style.transform = getMatrix({
        scale: state.transformation.scale,
        translateX: state.transformation.translateX,
        translateY: state.transformation.translateY
    });
    state.toDefault = false;
};

const makePan = (state) => ({
    panBy: ({ originX, originY }) => pan({ state, originX, originY }),
    panNoControls: ({ originX, originY }) => pan({ state, originX, originY, controls: false }),
});

const makeZoom = (state) => ({
    zoom: ({ x, y, deltaScale }) => {
        const { left, top } = state.element.getBoundingClientRect();
        const { minScale, maxScale, scaleSensitivity } = state;
        const [ scale, newScale ] = getScale({ scale: state.transformation.scale, deltaScale, minScale, maxScale, scaleSensitivity });
        const originX = x - left;
        const originY = y - top;
        const newOriginX = originX / scale;
        const newOriginY = originY / scale;
        const translate = getTranslate({ scale, minScale, maxScale });
        const translateX = translate({ pos: originX, prevPos: state.transformation.originX, translate: state.transformation.translateX });
        const translateY = translate({ pos: originY, prevPos: state.transformation.originY, translate: state.transformation.translateY });

        state.element.style.transformOrigin = `${newOriginX}px ${newOriginY}px`;
        state.element.style.transform = getMatrix({ scale: newScale, translateX, translateY });
        state.transformation = { originX: newOriginX, originY: newOriginY, translateX, translateY, scale: newScale };
        state.toDefault = false;
    }
});

const makeToDefault = (state) => ({
   toDefault: () => {
       state.element.style.transformOrigin = "0px 0px";
       state.element.style.transform = getMatrix({
           scale: state.defaultScale,
           translateX: 0,
           translateY: 0
       });
       state.transformation = {
           originX: 0,
           originY: 0,
           translateX: 0,
           translateY: 0,
           scale: state.defaultScale
       };
       state.toDefault = true;
   }
});

const renderer = ({ minScale, maxScale, element, scaleSensitivity = 10, defaultScale = 1 , containerDimension}) => {
    const state = {
        element,
        minScale,
        maxScale,
        scaleSensitivity,
        defaultScale,
        containerDimension,
        transformation: {
            originX: 0,
            originY: 0,
            translateX: 0,
            translateY: 0,
            scale: 1
        },
        toDefault: false
    };
    return Object.assign({}, makeZoom(state), makePan(state), makeToDefault(state), {isToDefault: ()=>state.toDefault});
};

export default renderer