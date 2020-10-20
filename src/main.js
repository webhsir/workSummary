import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import "./mock/index";
Vue.config.productionTip = false;
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import service from "./axios/index.js";
Vue.prototype.$axios = service;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
