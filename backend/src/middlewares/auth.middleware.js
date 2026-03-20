const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // 1. Lấy token từ Header (thường có dạng: Bearer <token>)
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Bạn cần đăng nhập để thực hiện chức năng này' });
    }

    try {
        // 2. Xác thực token bằng JWT_SECRET trong file .env
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key_123');

        // 3. Lưu thông tin user vào request để các Controller sau này có thể dùng (vd: lấy id thủ thư)
        req.user = decoded;

        // 4. Cho phép đi tiếp vào Controller
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Phiên đăng nhập hết hạn hoặc không hợp lệ' });
    }
};

module.exports = authMiddleware;