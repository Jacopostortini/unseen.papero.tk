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
const baseUrl = "https://papero.me";
const urls = {
    getLoginInfoUrl: baseUrl+"/user/get_info",
    getAllGamesUrl: baseUrl+"/server/unseen/games/all",
    getGameStatusUrl: baseUrl+"/server/unseen/games/status_by_id",
    createLocalAccountUrl: baseUrl+"/auth/local",
    logoutUrl: baseUrl+"/auth/logout",
    quitGameUrl: baseUrl+"/server/unseen/games/quit"
}

export {
    colors,
    gameConfig,
    urls
};
