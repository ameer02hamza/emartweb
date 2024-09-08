import apiInstance from "./apiagent.interceptor";

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
    console.log(error,"error request data");

    return Promise.reject(error);
  }
);

/**
 * @override to manipulate the response data
 */
apiInstance.interceptors.response.use(
  function (response) {
    const { data } = response;
    console.log(data,"response data");
    
    return data;
  },
  function (error) {
    console.log(error,"error response data");
    return Promise.reject(error);
  }
);
