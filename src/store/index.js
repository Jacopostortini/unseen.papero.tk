import { createStore } from 'vuex';

export default createStore({
  state: {
    username: "null",
    logged: "false"
  },

  mutations: {
    SET_USERNAME(state, username){
      state.username = username;
    },
    SET_LOGGED(state, logged){
      state.logged = logged;
    }
  },

  actions: {
    setUsername({ commit }, username){
      commit("SET_USERNAME", username);
    },
    setLogged({ commit }, logged){
      commit("SET_LOGGED", logged);
    }
  }
})
