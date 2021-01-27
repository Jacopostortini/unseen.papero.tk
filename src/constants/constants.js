const zoomFunctionBase = 1.1;
const mouseWheelReductionFactor = 100;
const keyScrollSpeed = 5;
const colors = ["red", "blue", "black", "green", "yellow", "white"];
const gameConfig = {
    taxi: 12,
    bus: 8,
    underground: 4,
    double_turns: 2,
    secret_moves: 2,
    number_of_total_turns: 24,
    mister_x_is_visible_turns: [3, 8, 13, 18, 23]
}
const webSocketUrl = "http://localhost:3000";
const flaskServerUrl = "";

export {
    zoomFunctionBase,
    mouseWheelReductionFactor,
    keyScrollSpeed,
    colors,
    gameConfig,
    webSocketUrl,
    flaskServerUrl
};