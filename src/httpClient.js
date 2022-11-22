import axios from "axios";
import jwtDecode from "jwt-decode";

const httpClient = axios.create();
httpClient.defaults.withCredentials = true;

//get token from local storage
httpClient.getToken = function () {
  return localStorage.getItem("token");
};

//set token to local storage and return it
httpClient.setToken = function (token) {
  localStorage.setItem("token", token);
  return token;
};
// Login
httpClient.auth = function (credentials) {
  return this({
    method: "post",
    url: "http://localhost:8080/api/auth",
    headers: {
      "Content-Type": "application/json",
    },
    data: credentials,
  }).then((serverResponse) => {
    const token = serverResponse.data.token;
    if (token) {
      this.defaults.headers.common.token = token;
      this.setToken(token);
      return serverResponse;
    }
  });
};
// LogOut
httpClient.logOut = function () {
  localStorage.removeItem("token");
  // delete this.defaults.headers.common.token
  return true;
};
// Decode JWT to get username, nama, role, unit kerja
httpClient.getCurrentUser = function () {
  const token = this.getToken();
  return token ? jwtDecode(token) : null;
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
// Update Konten
httpClient.updateContent = function (id, konten) {
  return this({
    method: "put",
    url: `http://localhost:8080/api/content/${id}`,
    data: konten,
  });
};
// Lihat Konten
httpClient.readAllContent = function (data) {
  return this({
    method: "get",
    url: "http://localhost:8080/api/beranda",
    params: data,
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
httpClient.readUnitKerja = function (data) {
  return this({
    method: "get",
    url: "http://localhost:8080/api/unitkerja",
    params: data,
  });
};

// Kategori CRUD
// Create Kategori
// View Kategori
httpClient.readKategori = function (data) {
  return this({
    method: "get",
    url: "http://localhost:8080/api/category",
    params: data,
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
httpClient.readAllUser = function (data) {
  return this({
    method: "get",
    url: "http://localhost:8080/api/user",
    params: data,
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
httpClient.readApprovalContent = function (data) {
  return this({
    method: "get",
    url: "http://localhost:8080/api/approval/",
    params: data,
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

// is Liked by User
httpClient.isLiked = function (data, id) {
  return this({
    method: "get",
    url: `http://localhost:8080/api/like/${id}`,
    params: data,
  });
};
// Like Content
httpClient.likeContent = function (id, data) {
  return this({
    method: "post",
    url: `http://localhost:8080/api/like/${id}`,
    data: data,
  });
};
// Unlike Content
httpClient.unlikeContent = function (id, data) {
  return this({
    method: "post",
    url: `http://localhost:8080/api/unlike/${id}`,
    data: data,
  });
};
// send bearer token every request except login and beranda
httpClient.defaults.headers.common[
  "Authorization"
] = `Bearer ${httpClient.getToken()}`;
export default httpClient;
