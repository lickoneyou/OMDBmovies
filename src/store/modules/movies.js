import axios from "@/plugins/axios";
import IDs from "@/store/mock/imdb_top250";
import mutation from "@/store/mutations";

const serializeResponse = (movies) =>
  movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});

const { MOVIES } = mutation;

const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
    movies: {
      [MOVIES](state, value) {
        state.movies = value;
      },
    },
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
  },
  mutations: {},
  actions: {
    initMoviesStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },
    async fetchMovies({ getters, commit }) {
      try {
        const { currentPage, moviesPerPage, slicedIDs } = getters;
        const from = currentPage * moviesPerPage - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const moviesToFetch = slicedIDs(from, to);
        const requests = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
        const res = await Promise.all(requests);
        const data = res.map((el) => el.data);
        const movies = serializeResponse(data);
        commit(MOVIES, movies, { root: true });
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default moviesStore;
