const db = require('../config/db');

exports.getTopBooks = async() => {
    const pool = await db;
    return await pool.request().query(`
        SELECT TOP 5 b.title, COUNT(br.id) as total 
        FROM books b 
        JOIN borrows br ON b.id = br.book_id 
        GROUP BY b.title ORDER BY total DESC
    `);
};

exports.getOverdueReaders = async() => {
    const pool = await db;
    return await pool.request().query(`
        SELECT r.fullname, br.borrow_date 
        FROM readers r 
        JOIN borrows br ON r.id = br.reader_id 
        WHERE br.status = 'borrowing'
    `);
};