const db = require('../config/db');

exports.getAllReaders = async () => {
    const pool = await db;

    const result = await pool.request().query(`
        SELECT * FROM readers
    `);

    return result.recordset;
};

exports.createReader = async (data) => {
    const pool = await db;

    await pool.request()
        .input('name', data.name)
        .input('class', data.class)
        .input('dob', data.dob)
        .input('gender', data.gender)
        .query(`
            INSERT INTO readers (name, class, dob, gender)
            VALUES (@name, @class, @dob, @gender)
        `);
};