import { createStore } from "vuex";
import movies from "./modules/movies";
import loaderStore from "./loader";
import notificationStore from "./notification";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loaderStore,
    notificationStore,
  },
});

store.dispatch("initMoviesStore");

export default store;
