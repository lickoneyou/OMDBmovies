<template>
  <div class="movieItem mb-3">
    <div class="movieItemPoster" :style="posterBG"></div>
    <div class="movieInfoWrap">
      <div class="movieItemInfo">
        <h3 class="movieTitle">{{ movie.Title }}</h3>
        <span class="movieYear">{{ movie.Year }}</span>
      </div>
      <div class="movieItemControls row no-gutters">
        <div class="col">
          <button
            type="button"
            class="btn btn-outline-light w-100"
            @click="showInfoModalEvent"
          >
            Info
          </button>
        </div>
        <div class="col">
          <button
            type="button"
            class="btn btn-outline-light w-100"
            @click="emitRemoveEvent"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",

  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    posterBG() {
      return {
        "background-image": `url(${this.movie.Poster})`,
      };
    },
  },
  methods: {
    emitRemoveEvent() {
      this.$emit("removeItem", {
        id: this.movie.imdbID,
        title: this.movie.Title,
      });
    },
    showInfoModalEvent() {
      this.$emit("showModal", this.movie.imdbID);
    },
  },
};
</script>

<style scoped>
.movieItem {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 200ms ease;
  height: 500px;
}

.movieItem:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}
.movieItemPoster {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.movieInfoWrap {
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  opacity: 0;
  transition: all 200ms ease;
}

.movieItem:hover .movieInfoWrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
}

.movieTitle {
  font-size: 20px;
  color: #fff;
}

.movieYear {
  font-size: 14px;
  color: #fff;
}
</style>
