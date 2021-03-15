const colors = {
    numberOfNonMisterX: 5,
    cssColors: ["#323232", "#ff3c00", "#0073ff", "#00c600", "#ff1493", "#ffbf00"],
    cssToastClass: ["t0", "t1", "t2", "t3", "t4", "t5"]
};
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
const getAllGamesUrl = "https://papero.tk/server/unseen/games/all";
const getGameStatusUrl = "https://papero.tk/server/unseen/games/status_by_id";
const createLocalAccountUrl = "https://papero.tk/auth/local";
const logoutUrl = "https://papero.tk/auth/logout";
const quitGameUrl = "https://papero.tk/server/unseen/games/quit";

export {
    colors,
    gameConfig,
    webSocketUrl,
    getLoginInfoUrl,
    getAllGamesUrl,
    getGameStatusUrl,
    createLocalAccountUrl,
    logoutUrl,
    quitGameUrl
};
