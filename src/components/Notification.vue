<template>
  <div></div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { mapGetters } from "vuex";

export default {
  name: "NotificationVue",
  computed: {
    ...mapGetters(["massagePool"]),
  },
  watch: {
    massagePool: "setup", // может быть ошибка
  },
  methods: {
    setup({ varient, msg = "", title = "" }) {
      toast(`${title}\n${msg}`, {
        autoClose: 1000,
        pauseOnHover: true,
        type: varient,
        bodyClassName: "toastText",
      });
    },
  },
};
</script>

<style>
.toastText > div:last-child::first-line {
  font-size: 20px;
  font-weight: bold;
  color: black;
}
</style>
