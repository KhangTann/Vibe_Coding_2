// models/borrow.model.js
const db = require('../config/db');

exports.createBorrow = async(data) => {
    const pool = await db;

    await pool.request()
        .input('reader_id', data.reader_id)
        .input('book_copy_id', data.book_copy_id)
        .input('librarian_id', data.librarian_id)
        .input('borrow_date', data.borrow_date)
        .query(`
            INSERT INTO borrows (reader_id, book_copy_id, librarian_id, borrow_date, status)
            VALUES (@reader_id, @book_copy_id, @librarian_id, @borrow_date, 'borrowing')
        `);
};