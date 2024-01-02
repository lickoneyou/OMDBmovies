import { createStore } from "vuex";
import movies from "./modules/movies";
import loaderStore from "./loader";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loaderStore,
  },
});

store.dispatch("initMoviesStore");

export default store;
