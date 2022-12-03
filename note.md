# note

1. Secara Keseluruhan, semua fitur sudah berjalan dengan baik
2. Terdapat Beberapa fitur yang belum dikerjakan seperti notifikasi, hapus comment, tree kategori. tree unit kerja,
   history perubahan konten
3. Saat upload image di rich text editor, image akan langsung disimpan di folder server, hal ini bertujuan agar image
   tidak disimpan di database dan tidak membebani database.
4. Performance masih belum optimal, terutama saat load dan kirim data menggunakan image berukuran besar (sudah
   diantisipasi dengan membatasi ukuran image yang diupload (500kb))
5. Keamanan tidak optimal, karena masih menggunakan token tanpa dibatasi waktu (tidak ada refresh token)
6. Dark Mode belum keseluruhan karena terdapat komponen yang belum mendukung dark mode seperti rich text editor (
   QuillJS) dan tags, pagination dari MUI
7. Penggunan API sebaiknya menggunakan package dari react-query, karena saat ini masih menggunakan manual dengan axios
8. Terkadang Terdapat kendala CORS saat di pasang di server, sepertinya masalah backend (pengalaman pakai expressJS
   aman)
9. Tags Bebas, tetapi prediction tags masih di dalam file Buat/Edit Konten.jsx