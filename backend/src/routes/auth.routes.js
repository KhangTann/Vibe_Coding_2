const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Đường dẫn đầy đủ sẽ là: POST /api/auth/login
router.post('/login', authController.login);

module.exports = router;