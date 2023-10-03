import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "96012f03bdfa4f6c82330ca7ca70270c",
  },
});

export { CanceledError };
