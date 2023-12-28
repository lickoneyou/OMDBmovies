import { createStore } from "vuex";
import movies from "./modules/movies";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
  },
});

store.dispatch("initMoviesStore");

export default store;
