import axios from "axios";

const httpClient = axios.create();

httpClient.defaults.withCredentials = true;
//access control allow origin

//get token from local storage
httpClient.getToken = function () {
  return localStorage.getItem("token");
};

httpClient.logIn = function (credentials) {
  return this({
    method: "post",
    url: "http://localhost:8080/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: credentials,
  });
};
export default httpClient;
