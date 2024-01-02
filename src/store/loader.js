import mutations from "./mutations";

const { TOGGLE_LOADER } = mutations;

const loaderStore = {
  state: {
    isShowLoader: false,
  },
  getters: {
    isShowLoader({ isShowLoader }) {
      return isShowLoader;
    },
  },
  mutations: {
    [TOGGLE_LOADER](state, bool) {
      state.isShowLoader = bool;
    },
  },
  actions: {
    toggleLoader({ commit }, bool) {
      commit(TOGGLE_LOADER, bool);
    },
  },
};

export default loaderStore;
