import Vue from "vue";
import "./helpers/mixin";
import App from "./App.vue";
import "./registerServiceWorker";

import store from "./store";
import router from "./router";

import axios from "./plugins/axios";
import vuetify from "./plugins/vuetify";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.prototype.$http = axios;
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
