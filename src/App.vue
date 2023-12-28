<template>
  <div id="app">
    <movies-list :list="moviesList" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList.vue";

export default {
  name: "App",
  components: { MoviesList },
  computed: {
    ...mapGetters("movies", ["moviesList"]),
  },
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
