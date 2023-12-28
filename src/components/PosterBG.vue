<template>
  <div class="posterPageBg" :style="posterStyle"></div>
</template>

<script>
export default {
  name: "PosterBG",
  props: {
    poster: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      defaultPosterBG:
        "linear-gradient(45deg, rgb(0, 3, 18) 0%, rgb(82, 15, 117) 100%)",
    };
  },
  computed: {
    posterStyle() {
      return {
        "background-image": this.posterBg,
      };
    },
    posterBg() {
      return this.poster ? `url(${this.poster})` : this.defaultPosterBG;
    },
  },
};
</script>

<style scoped>
.posterPageBg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  transition: all 200ms ease;
}

.posterPageBg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    45deg,
    rgb(0, 3, 18) 0%,
    rgb(82, 15, 117) 100%
  );
  opacity: 0.7;
}
</style>
