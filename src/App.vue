<template>
  <div id="app">
    <PosterBG :poster="posterBG" />
    <movies-list :list="moviesList" @changePoster="onChangePoster" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList.vue";
import PosterBG from "./components/PosterBG.vue";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBG,
  },
  data() {
    return {
      posterBG: "",
    };
  },
  computed: {
    ...mapGetters("movies", ["moviesList"]),
  },
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
    onChangePoster(poster) {
      this.posterBG = poster;
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
