export default {
    game_tag: "away",
    status: 1, //lobby, game, end
    players_order: ["a", "b", "c"], //mister x will be first
    admin_user_id: "b",
    players: [
        {
            id : "a",
            name: "jacopo",
            is_mister_x: true,
            position: 0,
            color: 0,
            used_taxi: null,
            used_bus: null,
            used_underground: null
        },
        {
            id : "b",
            name: "rami",
            is_mister_x: false,
            position: 0,
            color: 1,
            used_taxi: 7,
            used_bus: 3,
            used_underground: 2
        },
        {
            id : "c",
            name: "rubbo",
            is_mister_x: false,
            position: 0,
            color: 2,
            used_taxi: 5,
            used_bus: 2,
            used_underground: 0
        },
    ],
    total_moves: 4,// used to see who's turn it is, if x2 has been used ...,
    mister_x:{
        double_turns_used: 0,
        secret_moves_used: 0
    },
    moves_record: [
        {
            user_id: "a",
            _from: 0,
            _to: 0,
            transport: 0 //taxi, bus, underground, secret
        },
        {
            user_id: "b",
            _from: 0,
            _to: 0,
            transport: 0 //taxi, bus, underground, secret
        },
        {
            user_id: "c",
            _from: 0,
            _to: 0,
            transport: 0 //taxi, bus, underground, secret
        },
        {
            user_id: "a",
            _from: 0,
            _to: 0,
            transport: 0 //taxi, bus, underground, secret
        }
    ]
}