import axios from "axios";
import { baseURL } from "@/config";

if (localStorage.getItem("token"))
  axios.defaults.headers.common.auth = localStorage.getItem("token");

axios.defaults.baseURL = baseURL;

axios.interceptors.response.use(
  (res) => res.data,
  (err) => {
    switch (err.response.status) {
      case 500:
        console.err("[ERROR!]", err.response.data.developerMessage);
        break;
      case 404:
        console.error("[NOT FOUND!]", err.response.data.developerMessage);
        break;
      case 401:
        console.error("[ACCESS DENIED!]");
        break;
    }

    return Promise.reject(err.response.data.userMessage);
  }
);

export default axios;
