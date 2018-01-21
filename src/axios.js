import axios from "axios";

const instance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
  transformRequest: [
    (data, headers) => {
      delete headers.common.Authorization;
      return data;
    }
  ]
});
instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

axios.interceptors.request.use(
  request => {
    // the request that was send.
    console.log(request);
    // Edit the request.config
    return request;
  },
  error => {
    console.log(error);
    // to get the error in the catch
    // and not see the error from above console.log
    // this is specially for sending the request
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // the request that was send.
    console.log(response);
    // Edit the request.config
    return response;
  },
  error => {
    console.log(error);
    // to get the error in the catch
    // and not see the error from above console.log
    // this is specially for sending the request
    return Promise.reject(error);
  }
);

export default instance;