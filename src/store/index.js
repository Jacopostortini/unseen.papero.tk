import { createStore } from 'vuex'

export default createStore({
  state: {
    status: {
      type: Number
    },
    currentPlayer: {
      type: Object
    },
    players: {
      type: Array
    },
    playingPlayer: {
      type: String
    },
    isRevelation: {
      type: Boolean
    },
    lastMisterXKnownPosition: {
      type: Number
    },
    misterXMoves: {
      type: Array
    }
  },

  mutations: {

    SET_STATUS(state, status){
      state.status = status;
    },
    SET_CURRENT_PLAYER(state, player){
      state.currentPlayer = player;
    },
    SET_PLAYERS(state, players){
      state.players = players;
    },
    SET_PLAYING_PLAYER(state, player){
      state.playingPlayer = player;
    },
    SET_IS_REVELATION(state, isRevelation){
      state.isRevelation = isRevelation;
    },
    SET_LAST_MISTER_X_KNOWN_POSITION(state, position){
      state.lastMisterXKnownPosition = position;
    },
    SET_MISTER_X_MOVES(state, moves){
      state.misterXMoves = moves;
    }

  },

  actions: {
    setStatus({ commit }, status){
      commit("SET_STATUS", status);
    },
    setCurrentPlayer({ commit }, player){
      commit("SET_CURRENT_PLAYER", player);
    },
    setPlayers({ commit }, players){
      commit("SET_PLAYERS", players);
    },
    setPlayingPlayer({ commit }, player){
      commit("SET_PLAYING_PLAYER", player);
    },
    setIsRevelation({ commit }, isRevelation){
      commit("SET_IS_REVELATION", isRevelation);
    },
    setLastMisterXKnownPosition({ commit }, position){
      commit("SET_LAST_MISTER_X_KNOWN_POSITION", position);
    },
    setMisterXMoves({ commit }, moves){
      commit("SET_MISTER_X_MOVES", moves);
    }
  },

  modules: {
  }
})
