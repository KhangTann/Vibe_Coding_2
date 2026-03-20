const readerService = require('../services/reader.service');

exports.getAllReaders = async(req, res) => {
    try {
        const data = await readerService.getReaders();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createReader = async(req, res) => {
    try {
        await readerService.createReader(req.body);
        res.json({ message: 'Reader created successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};