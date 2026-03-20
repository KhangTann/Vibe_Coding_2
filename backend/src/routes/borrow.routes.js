// routes/borrow.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/borrow.controller');

router.post('/', controller.borrowBook);

module.exports = router;