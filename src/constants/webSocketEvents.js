export default {
    CONNECT_TO_GAME: "connect-to-game", //tutto a chi a chiesto, se mister-x bla bla
    JOIN_GAME: "join-game", //mando tutti i giocatori
    QUIT_GAME: "quit-game",
    KICK_PLAYER: "kick-from-game",
    LOBBY_MODIFIED: "lobby-modified",
    CHANGE_COLOR: "change-color", //{user_id: color}
    CHANGE_MISTER_X: "change-mister-x", //mando tutti i giocatori
    CHAT: "chat",

    START_GAME: "start-game", //status...tutte le info
    MOVE: "move", //{user_id: x, position: y,  players_turn: z}
    MOVE_MISTER_X: "move-mister-x", //{_from: x, _to: y, transport, //{//{user_id: x, players_turn: y, last_moves:(null) [(dall'ultima rivelazione,)
    // move: {_from:, _to: transport:,}]}
    END_GAME: "end-game"
}