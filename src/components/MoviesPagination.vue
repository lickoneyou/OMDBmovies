<template>
  <paginate
    :page-count="total"
    :page-range="4"
    :margin-pages="1"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
  >
  </paginate>
</template>

<script>
import Paginate from "vuejs-paginate-next";
export default {
  name: "MoviesPagination",
  data() {
    return {
      currentPage: 1,
      perPage: 12,
    };
  },
  props: {
    total: {
      type: Number,
      default: 1,
    },
  },
  components: {
    paginate: Paginate,
  },
  methods: {
    clickCallback(pageNum) {
      this.$emit("changePage", pageNum);
    },
  },
};
</script>

<style lang="css">
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

.pagination {
  display: flex;
  justify-content: center;
  background-color: transparent;
}
.page-item {
  cursor: pointer;
  user-select: none;
}
</style>
