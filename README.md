# Mini Project 1 - Back End

Tema: Rekomendasi Film

Aplikasi ini dibuat menggunakan Express.js sebagai prototype web sederhana.

## Cara menjalankan

1. npm install
2. node server.js atau npm run dev
3. buka http://localhost:3000

## Fitur

- Tambah rekomendasi film via form
- Simpan data ke file JSON
- Tampilkan daftar film
- Routing: Home, Add, About
- API: GET /api/movies

## Tema Unik
Aplikasi ini tidak hanya merekomendasikan film berdasarkan genre, tetapi juga berdasarkan **lama waktu nonton**.

User bisa memilih durasi film:
- ± 30 menit (short movie)
- ± 1 jam
- ± 1,5 jam
- ± 2 jam
- > 2 jam

Sehingga pengguna dapat menentukan film sesuai **waktu luang yang tersedia**, memberikan solusi personal bagi pengguna yang ingin hiburan tanpa mengganggu manajemen waktu.
