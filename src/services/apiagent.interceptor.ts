import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 * @override to manipulate the the axios configuration for request handlers
 */
apiInstance.interceptors.request.use(
  function (config) {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  function error(error) {
    console.log(error, "error request data");

    return Promise.reject(error);
  }
);

/**
 * @override to manipulate the response data
 */
apiInstance.interceptors.response.use(
  function (response) {
    const { data } = response;
    return data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default apiInstance;
