const authModel = require('../models/auth.model');
const jwt = require('jsonwebtoken');

exports.login = async (username, password) => {
    // 1. Tìm user trong Database
    const user = await authModel.getUserByUsername(username);

    // 2. Kiểm tra user tồn tại và mật khẩu khớp
    // Trong thực tế nên dùng bcrypt.compare, ở đây tui dùng so sánh trực tiếp theo code của bạn
    if (!user || user.password !== password) {
        throw new Error('Tài khoản hoặc mật khẩu không chính xác');
    }

    // 3. Tạo JWT Token (Hết hạn sau 1 ngày)
    const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role_name },
        process.env.JWT_SECRET || 'secret_key_123', // Lấy từ .env
        { expiresIn: '1d' }
    );

    // 4. Trả về kết quả (Xóa password trước khi trả về để bảo mật)
    delete user.password;
    return { user, token };
};