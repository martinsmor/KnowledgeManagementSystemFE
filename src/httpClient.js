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
    url: "http://localhost:8080/api/content",
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
// Lihat Konten Berdasarkan Username
httpClient.readContentByUsername = function (username) {
  return this({
    method: "get",
    url: `http://localhost:8080/api/content/${username}`,
  });
};
//Lihat Detail Konten
httpClient.readContent = function (id) {
  return this({
    method: "get",
    url: "http://localhost:8080/detail/?contentId=" + id,
  });
};
//Delete Konten
httpClient.deleteContent = function (id) {
  return this({
    method: "delete",
    url: `http://localhost:8080/api/content/${id}`,
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

// Kategori CRUD
// Create Kategori
// View Kategori
httpClient.readKategori = function () {
  return this({
    method: "get",
    url: "http://localhost:8080/api/category",
  });
};
// Create Kategori
httpClient.createKategori = function (kategori) {
  return this({
    method: "post",
    url: "http://localhost:8080/api/category",
    data: kategori,
  });
};
// Delete Kategori
httpClient.deleteKategori = function (id) {
  return this({
    method: "delete",
    url: `http://localhost:8080/api/category/${id}`,
  });
};
// Update Kategori
httpClient.updateKategori = function (id, kategori) {
  return this({
    method: "put",
    url: `http://localhost:8080/api/category/${id}`,
    data: kategori,
  });
};

// CRUD User
// Read All User
httpClient.readAllUser = function () {
  return this({
    method: "get",
    url: "http://localhost:8080/api/user",
  });
};

export default httpClient;
