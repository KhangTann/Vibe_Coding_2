// controllers/borrow.controller.js
// const service = require('../services/borrow.service');

// exports.borrowBook = async(req, res) => {
//     try {
//         await service.borrowBook(req.body);
//         res.json({ message: 'Borrow success' });
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };
// Bổ sung vào borrow.controller.js
// Đảm bảo có dòng require service này ở đầu file
const service = require('../services/borrow.service');

exports.borrowBook = async(req, res) => {
    try {
        await service.borrowBook(req.body);
        res.json({ message: 'Borrow success' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.returnBook = async(req, res) => {
    try {
        const { borrow_id, book_copy_id } = req.body;
        // Gọi đến hàm returnBook trong service
        await service.returnBook(borrow_id, book_copy_id);
        res.json({ message: 'Return success' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};