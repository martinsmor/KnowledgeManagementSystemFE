import axios from "axios";

const httpClient = axios.create();

httpClient.defaults.withCredentials = true;
//access control allow origin

//get token from local storage
httpClient.getToken = function () {
  return localStorage.getItem("token");
};

httpClient.auth = function (credentials) {
  return this({
    method: "post",
    url: "http://localhost:8080/api/auth",
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
    url: "http://localhost:8080/api/beranda",
  });
};
// Lihat Konten Berdasarkan Username
httpClient.readContentByUsername = function (data) {
  return this({
    method: "get",
    url: `http://localhost:8080/api/content/`,
    //  parameternya
    params: data,
  });
};
//Lihat Detail Konten
httpClient.readContent = function (id) {
  return this({
    method: "get",
    url: `http://localhost:8080/api/view/${id}`,
  });
};
//Delete Konten
httpClient.deleteContent = function (id) {
  return this({
    method: "delete",
    url: `http://localhost:8080/api/content/${id}`,
  });
};

// Comment
// Create Comment
httpClient.createComment = function (comment) {
  return this({
    method: "post",
    url: `http://localhost:8080/api/comment/${id}`,
    data: comment,
  });
};
// Read Comment by Content ID
httpClient.readCommentByContentId = function (id) {
  return this({
    method: "get",
    url: `http://localhost:8080/api/comment/${id}`,
  });
};

// CRUD Unit Kerja
// Read Unit Kerja
httpClient.readUnitKerja = function () {
  return this({
    method: "get",
    url: "http://localhost:8080/api/unitkerja",
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
// Read User by Username
httpClient.readUserByUsername = function (username) {
  return this({
    method: "get",
    url: `http://localhost:8080/api/user/${username}`,
  });
};

//Read All Role
httpClient.readAllRole = function () {
  return this({
    method: "get",
    url: "http://localhost:8080/api/user/role",
  });
};
// Update Role
httpClient.updateRole = function (username, role) {
  return this({
    method: "put",
    url: `http://localhost:8080/api/user/${username}`,
    data: role,
  });
};

// Change Status Content (Approve/Reject)
httpClient.changeStatusContent = function (id, status) {
  return this({
    method: "put",
    url: `http://localhost:8080/api/approval/${id}`,
    data: status,
  });
};

// Read Approval Content
httpClient.readApprovalContent = function () {
  return this({
    method: "get",
    url: "http://localhost:8080/api/approval/user2",
  });
};

// Add Feedback To Rejected Content
httpClient.addFeedback = function (id, data) {
  return this({
    method: "post",
    url: `http://localhost:8080/api/approval/${id}`,
    data: data,
  });
};

// Comment Content
httpClient.addComment = function (id, data) {
  return this({
    method: "post",
    url: `http://localhost:8080/api/comment/${id}`,
    data: data,
  });
};
// Read Comment by Content ID
httpClient.readCommentByContentId = function (id) {
  return this({
    method: "get",
    url: `http://localhost:8080/api/comment/${id}`,
  });
};

export default httpClient;
