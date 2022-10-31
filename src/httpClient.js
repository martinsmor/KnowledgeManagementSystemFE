import axios from "axios";

const httpClient = axios.create();

// Fungsi Untuk Menapatkan Profile Pengguna
httpClient.getCurrentUser = function () {
  console.log("getCurrentUser");
};

//Fungis Untuk Mendapatkan Konten Untuk Beranda
httpClient.getHomeContent = function () {
  return this({
    method: "GET",
    url: "https://dummyjson.com/users",
  });
};

export default httpClient;
