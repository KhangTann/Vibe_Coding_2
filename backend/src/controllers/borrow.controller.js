// controllers/borrow.controller.js
const service = require('../services/borrow.service');

exports.borrowBook = async(req, res) => {
    try {
        await service.borrowBook(req.body);
        res.json({ message: 'Borrow success' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};