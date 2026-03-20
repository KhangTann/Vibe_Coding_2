const errorHandler = (err, req, res, next) => {
    // Ghi lỗi ra console để lập trình viên (là bạn) kiểm tra
    console.error('🔥 ERROR LOG:', err.stack);

    // Xác định mã lỗi (mặc định là 500 nếu không có)
    const statusCode = err.statusCode || 500;

    // Trả về phản hồi JSON thống nhất cho Frontend
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Đã xảy ra lỗi hệ thống, vui lòng thử lại sau',
        // Chỉ hiện chi tiết lỗi khi đang ở môi trường phát triển (development)
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
};

module.exports = errorHandler;