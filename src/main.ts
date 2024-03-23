import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import useQueryParamPlugin from "vue-use-query-param";
import App from "./App.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(useQueryParamPlugin, {});
app.mount("#app");
