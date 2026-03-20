// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// const readerRoutes = require('./routes/reader.routes');
// app.use('/api/readers', readerRoutes);

// app.get('/', (req, res) => {
//     res.send('API is running...');
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// const borrowRoutes = require('./routes/borrow.routes');
// app.use('/api/borrow', borrowRoutes);
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// 1. IMPORT ROUTES
const readerRoutes = require('./routes/reader.routes');
const borrowRoutes = require('./routes/borrow.routes');
const authRoutes = require('./routes/auth.routes');
const reportRoutes = require('./routes/report.routes');

const app = express();

// 2. MIDDLEWARES
app.use(cors());
app.use(express.json()); // Để server đọc được dữ liệu JSON từ request body

// 3. ĐĂNG KÝ ROUTES (Cấu trúc /api/...)
app.use('/api/auth', authRoutes); // Quản lý đăng nhập
app.use('/api/readers', readerRoutes); // Quản lý độc giả
app.use('/api/borrow', borrowRoutes); // Quản lý mượn/trả sách
app.use('/api/reports', reportRoutes); // Quản lý báo cáo thống kê

// Route kiểm tra trạng thái server
app.get('/', (req, res) => {
    res.send('Library Management API is running...');
});

// 4. XỬ LÝ LỖI TẬP TRUNG (Optional nhưng nên có)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Đã xảy ra lỗi hệ thống!', error: err.message });
});

// 5. START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`-----------------------------------------`);
    console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
    console.log(`-----------------------------------------`);
});

module.exports = app;