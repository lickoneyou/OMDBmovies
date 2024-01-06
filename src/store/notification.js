import mutations from "./mutations";

const { SHOW_TOAST_NOTIFY } = mutations;

const notificationStore = {
  state: {
    massagePool: [],
  },
  getters: {
    massagePool({ massagePool }) {
      return massagePool[massagePool.length - 1];
    },
  },
  mutations: {
    [SHOW_TOAST_NOTIFY](state, msg) {
      state.massagePool.push(msg);
    },
  },
  actions: {
    showNotify({ commit }, msg) {
      commit(SHOW_TOAST_NOTIFY, msg);
    },
  },
};

export default notificationStore;
