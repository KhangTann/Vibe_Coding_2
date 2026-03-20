// services/borrow.service.js
const db = require('../config/db');
const borrowModel = require('../models/borrow.model');

exports.borrowBook = async(data) => {
    const pool = await db;

    // check reader đang mượn
    const check = await pool.request()
        .input('reader_id', data.reader_id)
        .query(`
            SELECT * FROM borrows
            WHERE reader_id = @reader_id AND status = 'borrowing'
        `);

    if (check.recordset.length > 0) {
        throw new Error('Reader already borrowing a book');
    }

    // check sách
    const book = await pool.request()
        .input('book_id', data.book_copy_id)
        .query(`
            SELECT * FROM book_copies
            WHERE id = @book_id AND status = 'available'
        `);

    if (book.recordset.length === 0) {
        throw new Error('Book not available');
    }

    // tạo borrow
    await borrowModel.createBorrow(data);

    // update sách
    await pool.request()
        .input('book_id', data.book_copy_id)
        .query(`
            UPDATE book_copies
            SET status = 'borrowed'
            WHERE id = @book_id
        `);
};