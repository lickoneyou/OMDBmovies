import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

createApp(App).use(store).mount("#app");
