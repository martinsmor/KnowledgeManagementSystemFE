# Knowledge Management System

Aplikasi ini merupakan client side dari Knowledge Management System.
Dibuat dengan ReactJS, TailwindCSS + DaisyUI dan tambahan menggunakan MUI untuk autocomplete input tag. Aplikasi ini
juga menggunakan rich text editor dari QuillJS.

## Cara Penggunaan

1. Clone repository ini
2. Jalankan perintah `npm install` untuk menginstall semua dependensi
3. Jalankan perintah `npm run dev` untuk menjalankan aplikasi
4. Aplikasi akan berjalan di `http://127.0.0.1:5173/`
5. Untuk mengakses API, silakan clone repository https://github.com/ryhanabr/KMSbe.git dan ikuti langkah-langkahnya
6. Buat file `.env` di root folder aplikasi ini dan isi dengan

    ```
    VITE_API_LINK = http://localhost:8080/api
    VITE_HOME = http://localhost:8080
    ```