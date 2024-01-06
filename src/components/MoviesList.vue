<template>
  <ModalWindow :isOpen="isOpened" :movieInfo="info" :key="myKey"></ModalWindow>
  <div class="container">
    <h3 class="listTitle">IMDB Top 250</h3>
    <div class="row">
      <template v-if="isExist">
        <div class="col-3" v-for="(movie, key) in list" :key="key">
          <movie-item
            :movie="movie"
            @mouseover="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
            @showModal="onShowMovieInfo"
          />
        </div>
      </template>
      <template v-else>
        <div>Empty list</div>
      </template>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import { mapActions } from "vuex";
import ModalWindow from "./ModalWindow.vue";

export default {
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      info: "",
      open: false,
      myKey: "",
    };
  },
  components: {
    MovieItem,
    ModalWindow,
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    isOpened() {
      console.log(this.open);
      return this.open;
    },
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    ...mapActions(["showNotify"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    onRemoveItem({ id, title }) {
      const isConf = confirm(`Do you want to delete the movie: ${title}?`);

      if (isConf) {
        this.removeMovie(id);
        this.showNotify({
          varient: "dufault",
          msg: `Movie ${title} deleted succsesful`,
          title: "Succses",
        });
      }
    },
    onShowMovieInfo(id) {
      this.open = true;
      this.info = this.list[id];
      this.myKey = Math.random();
      console.log(this.info);
    },
  },
};
</script>

<style scoped>
.listTitle {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
</style>
