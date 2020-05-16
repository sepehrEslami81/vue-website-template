import Vue from "vue";
import config from "@/config.js";

export default Vue.mixin({
  data: () => ({
    baseURL: config.baseUrl,
  }),
});
