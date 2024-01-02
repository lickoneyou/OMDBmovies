import axios from "@/plugins/axios";
import IDs from "@/store/mock/imdb_top250";
import mutation from "@/store/mutations";

const serializeResponse = (movies) =>
  movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});

const { MOVIES, CURRENT_PAGE, REMOVE_MOVIE } = mutation;

const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
    movies: {},
  },
  getters: {
    moviesList({ movies }) {
      return movies;
    },
    slicedIDs({ top250IDs }) {
      return (from, to) => top250IDs.slice(from, to);
    },
    currentPage({ currentPage }) {
      return currentPage;
    },
    moviesPerPage({ moviesPerPage }) {
      return moviesPerPage;
    },
    moviesLength({ top250IDs }) {
      return Math.ceil(Object.keys(top250IDs).length / 12);
    },
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },
    [CURRENT_PAGE](state, value) {
      state.currentPage = value;
    },
    [REMOVE_MOVIE](state, index) {
      state.top250IDs.splice(index, 1);
    },
  },
  actions: {
    initMoviesStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },
    async fetchMovies({ getters, commit, dispatch }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const { currentPage, moviesPerPage, slicedIDs } = getters;
        const from = currentPage * moviesPerPage - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const moviesToFetch = slicedIDs(from, to);
        const requests = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
        const res = await Promise.all(requests);
        const data = res.map((el) => el.data);
        const movies = serializeResponse(data);
        commit(MOVIES, movies);
      } catch (error) {
        console.log(error);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
    changeCurrentPage({ commit, dispatch }, page) {
      commit(CURRENT_PAGE, page);
      dispatch("fetchMovies");
    },
    removeMovie({ commit, dispatch, state }, id) {
      const index = state.top250IDs.findIndex((el) => el === id);

      if (index !== -1) {
        commit(REMOVE_MOVIE, index);
        dispatch("fetchMovies");
      }
    },
    async searchMovie({ commit, dispatch }, query) {
      console.log(query);
      try {
        dispatch("toggleLoader", true, { root: true });

        const res = await axios.get(`/?s=${query}`);
        const movies = serializeResponse(res.data.Search);
        commit(MOVIES, movies);

        if (res.data.Error) {
          throw new Error(res.data.Error);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
  },
};

export default moviesStore;
