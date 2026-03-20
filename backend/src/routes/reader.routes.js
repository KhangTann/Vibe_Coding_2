const express = require('express');
const router = express.Router();
const controller = require('../controllers/reader.controller');

router.get('/', controller.getAllReaders);
router.post('/', controller.createReader);

module.exports = router;