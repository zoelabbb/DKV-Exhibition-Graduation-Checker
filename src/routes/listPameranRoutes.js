const express = require('express');
const router = express.Router();
const listPameranController = require('../controllers/listPameranController');

router.get('/', listPameranController.getListPameran);
router.get('/angkatan/:angkatan', listPameranController.getAngkatan);

module.exports = router;