<h1 align="center"> Dokumentasi Rest API Cek Kelulusan Pameran Mahasiswa DKV </h1>

## Daftar Isi

1. [Pengantar](#1-pengantar)
2. [Endpoint Utama](#2-endpoint-utama)
   - [1. Pengecekan Kelulusan Mahasiswa](#1-pengecekan-kelulusan-mahasiswa)
   - [2. List Mahasiswa](#2-list-mahasiswa)
5. [Status Kode](#3-status-kode)
6. [Kesalahan Umum](#4-kesalahan-umum)
7. [Referensi](#5-referensi)

---

## 1. Pengantar

Project Rest API ini menyediakan layanan untuk melakukan pengecekan kelulusan pameran mahasiswa DKV, project ini masih dalam tahap pengembangan.

## 2. Endpoint Utama

### 1. Pengecekan Kelulusan Mahasiswa

- **URL**: `/api/kelulusan/:nim`
- **Metode**: `GET`
- **Deskripsi**: Endpoint ini digunakan untuk melakukan pengecekan kelulusan mahasiswa berdasarkan nim Mahasiswa.

**Contoh Request:**

```json
{
  "nim": 155653
}
```

**Contoh Response:**

```json
{
  "nama": "Jessika Reeman",
  "nim": 155653,
  "angkatan": 2020,
  "prodi": "Desain Komunikasi Visual",
  "nilai_pameran": "D",
  "tema_pameran": "Karya Tulis Ilmiah",
  "status_kelulusan": "Tidak Lulus Pameran",
  "value_status_kelulusan": false
}
```

### 2. List Mahasiswa

- **URL**: `/api/list`
- **Metode**: `GET`
- **Deskripsi**: Endpoint ini menampilkan semua data mahasiswa yang terdaftar di DKV.

**Contoh Respon:**

```json
{
    "nama": "Jessika Reeman",
    "nim": 155653,
    "angkatan": 2020,
    "prodi": "Desain Komunikasi Visual",
    "nilai_pameran": "D",
    "tema_pameran": "Karya Tulis Ilmiah",
    "status_kelulusan": "Tidak Lulus Pameran",
    "value_status_kelulusan": false
},
{
    "nama": "Saxe Riggulsford",
    "nim": 717323,
    "angkatan": 2023,
    "prodi": "Desain Komunikasi Visual",
    "nilai_pameran": "A+",
    "tema_pameran": "Karya Tulis Ilmiah",
    "status_kelulusan": "Lulus Pameran",
    "value_status_kelulusan": true
},
{
    "nama": "Deeann Bisacre",
    "nim": 672356,
    "angkatan": 2018,
    "prodi": "Desain Komunikasi Visual",
    "nilai_pameran": "B+",
    "tema_pameran": "Karya Tulis Ilmiah",
    "status_kelulusan": "Tidak Lulus Pameran",
    "value_status_kelulusan": true
}
```

## 3. Status Kode

- `200 OK`: Permintaan berhasil.
- `400 Bad Request`: Permintaan tidak valid atau format tidak sesuai.
- `404 Not Found`: Endpoint tidak ditemukan.
- `500 Internal Server Error`: Terjadi kesalahan internal.

## 4. Kesalahan Umum

- `invalid_nomor_peserta`: Nomor peserta tidak valid.
- `mahasiswa_tidak_ditemukan`: Mahasiswa tidak ditemukan.

## 5. Referensi

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Jest Documentation](https://jestjs.io/docs/)
