<h1 align="center"> Documentation for Student Exhibition DKV Graduation Check REST API </h1>

## Table of Contents

1. [Introduction](#1-introduction)
2. [Main Endpoints](#2-main-endpoints)
   - [1. Student Graduation Check](#1-student-graduation-check)
   - [2. Student List](#2-student-list)
3. [Status Codes](#3-status-codes)
4. [Common Errors](#4-common-errors)
5. [References](#5-references)

---

## 1. Introduction

This Rest API project provides services for checking the graduation of DKV (Visual Communication Design) students at the exhibition. The project is still in development.

## 2. Main Endpoints

### 1. Student Graduation Check

- **URL**: `/api/kelulusan/:nim`
- **Method**: `GET`
- **Description**: This endpoint is used to check the graduation status of a student based on their student ID (NIM).

**Example Request:**

```json
{
  "nim": 155653
}
```

**Example Response:**

```json
{
  "nama": "Jessika Reeman",
  "nim": 155653,
  "angkatan": 2020,
  "prodi": "Visual Communication Design",
  "nilai_pameran": "D",
  "tema_pameran": "Scientific Paper",
  "status_kelulusan": "Exhibition Not Passed",
  "value_status_kelulusan": false
}
```

### 2. Student List

- **URL**: `/api/list`
- **Method**: `GET`
- **Description**: This endpoint displays all data of students registered in DKV.

**Example Response:**

```json
{
    "nama": "Jessika Reeman",
    "nim": 155653,
    "angkatan": 2020,
    "prodi": "Visual Communication Design",
    "nilai_pameran": "D",
    "tema_pameran": "Scientific Paper",
    "status_kelulusan": "Exhibition Not Passed",
    "value_status_kelulusan": false
},
{
    "nama": "Saxe Riggulsford",
    "nim": 717323,
    "angkatan": 2023,
    "prodi": "Visual Communication Design",
    "nilai_pameran": "A+",
    "tema_pameran": "Scientific Paper",
    "status_kelulusan": "Exhibition Passed",
    "value_status_kelulusan": true
},
{
    "nama": "Deeann Bisacre",
    "nim": 672356,
    "angkatan": 2018,
    "prodi": "Visual Communication Design",
    "nilai_pameran": "B+",
    "tema_pameran": "Scientific Paper",
    "status_kelulusan": "Exhibition Not Passed",
    "value_status_kelulusan": true
}
```

## 3. Status Codes

- `200 OK`: The request was successful.
- `400 Bad Request`: The request is invalid or the format is incorrect.
- `404 Not Found`: The endpoint was not found.
- `500 Internal Server Error`: An internal error occurred.

## 4. Common Errors

- `invalid_nomor_peserta`: Invalid participant number.
- `mahasiswa_tidak_ditemukan`: Student not found.