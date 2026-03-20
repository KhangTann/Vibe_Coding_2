const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller');
// const authMiddleware = require('../middlewares/auth.middleware'); // Sau này dùng để bảo mật

// Thống kê sách mượn nhiều nhất
router.get('/top-books', reportController.getMostBorrowedBooks);

// Danh sách độc giả chưa trả sách
router.get('/overdue', reportController.getOverdueReports);

module.exports = router;