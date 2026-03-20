// routes/borrow.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/borrow.controller');

// Route mượn sách
router.post('/', controller.borrowBook);

// BỔ SUNG: Route trả sách (Đây là mảnh ghép còn thiếu)
// URL sẽ là: POST /api/borrow/return
router.post('/return', controller.returnBook);

module.exports = router;