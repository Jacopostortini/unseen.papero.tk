const zoomFunctionBase = 1.1;
const mouseWheelReductionFactor = 100;
const keyScrollSpeed = 5;
const colors = 5;
const gameConfig = {
    taxi: 12,
    bus: 8,
    underground: 4,
    double_turns: 2,
    secret_moves: 2,
    number_of_total_turns: 24,
    mister_x_is_visible_turns: [3, 8, 13, 18, 23]
}
const webSocketUrl = "https://papero.tk";
const getLoginInfoUrl = "https://papero.tk/user/get_info";
const myGames = [
    {
        gameId: 0,
        date: "01/02/2003",
        name: "Questa è una partita con un nome lunghissimo"
    },
    {
        gameId: 1,
        date: "01/02/2003",
        name: "gallogallo"
    },
    {
        gameId: 2,
        date: "01/02/2003",
        name: "gallogallo"
    },
    {
        gameId: 3,
        date: "01/02/2003",
        name: "gallogallo"
    },
    {
        gameId: 4,
        date: "01/02/2003",
        name: "gallogallo"
    }
]


export {
    zoomFunctionBase,
    mouseWheelReductionFactor,
    keyScrollSpeed,
    colors,
    gameConfig,
    webSocketUrl,
    getLoginInfoUrl,
    myGames
};
