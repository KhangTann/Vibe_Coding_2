const reportModel = require('../models/report.model');

exports.getTopBooks = async() => {
    try {
        const result = await reportModel.getTopBooks();
        // Bạn có thể xử lý thêm dữ liệu ở đây nếu cần (vd: định dạng lại ngày tháng)
        return result.recordset;
    } catch (err) {
        throw new Error('Lỗi khi lấy thống kê sách: ' + err.message);
    }
};

exports.getOverdueReaders = async() => {
    try {
        const result = await reportModel.getOverdueReaders();
        // Logic: Có thể tính toán số ngày quá hạn ở đây
        return result.recordset;
    } catch (err) {
        throw new Error('Lỗi khi lấy danh sách độc giả chưa trả: ' + err.message);
    }
};