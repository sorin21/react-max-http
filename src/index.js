import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use((request) => {
  // the request that was send. 
  console.log(request);
  // Edit the request.config
  return request;
}, (error) => {
  console.log(error);
  // to get the error in the catch
  // and not see the error from above console.log
  // this is specially for sending the request
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
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

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
