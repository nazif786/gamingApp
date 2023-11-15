/* import apiClient from "./api-client";

// interface Entity {
//   id: number;
// }

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    // console.log(request);
    return { request, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
*/
