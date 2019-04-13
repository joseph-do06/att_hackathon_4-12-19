import axios from "axios";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config) {
  config.withCredentials = true;
  return config;
});
/**
 * Will unpack the response body from response object
 * @param {*} response
 */

const onGlobalSuccess = response => {
  ///should not use if you need access to anything other than the data
  return response.data;
};

const onGlobalError = error => {
  return Promise.reject(error);
};

export { onGlobalSuccess, onGlobalError };
