// Lay bao cao thong ke 
const reportService = require('../services/report.service');

// Thống kê 5 đầu sách được mượn nhiều nhất
exports.getMostBorrowedBooks = async(req, res) => {
    try {
        const data = await reportService.getTopBooks();
        res.json({
            title: "Thống kê đầu sách mượn nhiều nhất",
            data: data
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Danh sách độc giả chưa trả sách (quá hạn hoặc đang mượn)
exports.getOverdueReports = async(req, res) => {
    try {
        const data = await reportService.getOverdueReaders();
        res.json({
            title: "Danh sách độc giả chưa trả sách",
            count: data.length,
            data: data
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};