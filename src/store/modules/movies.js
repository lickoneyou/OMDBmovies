import axios from "@/plugins/axios";

const moviesStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies(context) {
      console.log(context);
      const res = await axios.get("/?i=tt0111161");
      console.log(res);
    },
  },
};

export default moviesStore;
