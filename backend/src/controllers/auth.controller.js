// Đăng nhập 
const authService = require('../services/auth.service');

exports.login = async(req, res) => {
    try {
        const { username, password } = req.body;

        // 1. Kiểm tra input
        if (!username || !password) {
            return res.status(400).json({ message: 'Vui lòng nhập tài khoản và mật khẩu' });
        }

        // 2. Gọi service để xác thực
        const result = await authService.login(username, password);

        // 3. Trả về token và thông tin user (không trả về password)
        res.json({
            message: 'Đăng nhập thành công',
            token: result.token,
            user: result.user
        });
    } catch (err) {
        // Trả về lỗi 401 nếu sai tài khoản/mật khẩu
        res.status(401).json({ message: err.message });
    }
};