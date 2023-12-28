<template>
  <div class="container">
    <h3 class="listTitle">IMDB Top 250</h3>
    <div class="row">
      <template v-if="isExist">
        <div class="col-3" v-for="(movie, key) in list" :key="key"></div>
      </template>
    </div>
  </div>
</template>

<script>
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
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
};
</script>

<style scoped>
.listTitle {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
