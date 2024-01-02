<template>
  <div id="app">
    <SpinerLoader />
    <PosterBG :poster="posterBG" />
    <HeaderVue />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviesPagination :total="moviesLength" @changePage="onChangePage" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SpinerLoader from "./components/Loader.vue";
import MoviesList from "./components/MoviesList.vue";
import MoviesPagination from "./components/MoviesPagination.vue";
import PosterBG from "./components/PosterBG.vue";
import HeaderVue from "./components/Header.vue";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBG,
    MoviesPagination,
    SpinerLoader,
    HeaderVue,
  },
  data() {
    return {
      posterBG: "",
    };
  },
  computed: {
    ...mapGetters("movies", ["moviesList", "moviesLength"]),
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onChangePoster(poster) {
      this.posterBG = poster;
    },
    onChangePage(page) {
      this.changeCurrentPage(page);
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
