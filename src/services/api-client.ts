import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "96012f03bdfa4f6c82330ca7ca70270c",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  Get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
  // GetTrailer = (id: number | string) => {
  //   return axiosInstance
  //     .get<FetchResponse<T>>(this.endpoint + "/" + id + "/" + "movies")
  //     .then((res) => res.data);
  // };
}
export default APIClient;
export { CanceledError };
