import axios from "axios";

const api = axios.create({
  baseURL: "http://github.com/",
});

export default api;
