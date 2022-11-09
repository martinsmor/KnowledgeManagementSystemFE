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
//CRUD Konten
// Create Konten
httpClient.createContent = function (konten) {
  return this({
    method: "post",
    url: "http://localhost:8080/create_content",
    data: konten,
  });
};
// Lihat Konten
httpClient.readAllContent = function () {
  return this({
    method: "get",
    url: "http://localhost:8080/beranda/",
  });
};
//Lihat Detail Konten
httpClient.readContent = function (id) {
  return this({
    method: "get",
    url: "http://localhost:8080/detail/?contentId=" + id,
  });
};

// CRUD Unit Kerja
// Create Unit Kerja
httpClient.createUnitKerja = function (unitKerja) {
  return this({
    method: "post",
    url: "http://localhost:8080/unitkerja/",
    data: unitKerja,
  });
};
// Read Unit Kerja
httpClient.readUnitKerja = function () {
  return this({
    method: "get",
    url: "http://localhost:8080/unitkerja",
  });
};
// Delete Unit Kerja
httpClient.deleteUnitKerja = function (id) {
  return this({
    method: "delete",
    url: `http://localhost:8080/unitkerja/${id}`,
  });
};
// Update Unit Kerja
httpClient.updateUnitKerja = function (id, unitKerja) {
  return this({
    method: "put",
    url: `http://localhost:8080/unitkerja/${id}`,
    data: unitKerja,
  });
};

export default httpClient;
