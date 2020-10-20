import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import index from "../views/index.vue";
import second from "../views/second.vue";

import pageERR from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: About,
    children: [
      {
        path: "/",
        name: "index",
        component: index
      },
      {
        path: "/About/second",
        name: "second",
        component: second
      }
    ]
  },
  {
    path: "/pageERR",
    name: "pageERR",
    component: pageERR
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
