const readerModel = require('../models/reader.model');

exports.getReaders = async() => {
    return await readerModel.getAllReaders();
};

exports.createReader = async(data) => {
    if (!data.name) {
        throw new Error('Name is required');
    }

    return await readerModel.createReader(data);
};