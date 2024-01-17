const express = require('express');
const router = express.Router();
const kelulusanController = require('../controllers/kelulusanController');

// Endpoint untuk memeriksa kelulusan berdasarkan nomor peserta
router.get('/:nimMahasiswa', kelulusanController.getPengecekanKelulusan);

module.exports = router;
