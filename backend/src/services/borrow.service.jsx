const sql = require('mssql');
const db = require('../config/db');

exports.borrowBook = async(data) => {
    const pool = await db;
    const transaction = new sql.Transaction(pool);

    try {
        await transaction.begin();
        const request = new sql.Request(transaction);

        // 1. Check reader (Sử dụng request của transaction)
        const checkReader = await request
            .input('reader_id', data.reader_id)
            .query(`SELECT id FROM borrows WHERE reader_id = @reader_id AND status = 'borrowing'`);
        
        if (checkReader.recordset.length > 0) throw new Error('Reader already borrowing'); [cite, 18]

        // 2. Check & Update Book status đồng thời
        const updateBook = await request
            .input('book_id', data.book_copy_id)
            .query(`
                UPDATE book_copies 
                SET status = 'borrowed' 
                WHERE id = @book_id AND status = 'available'
            `);

        if (updateBook.rowsAffected[0] === 0) throw new Error('Book not available'); [cite, 14, 20]

        // 3. Tạo phiếu mượn
        await request
            .input('r_id', data.reader_id)
            .input('bc_id', data.book_copy_id)
            .input('l_id', data.librarian_id)
            .query(`
                INSERT INTO borrows (reader_id, book_copy_id, librarian_id, borrow_date, status)
                VALUES (@r_id, @bc_id, @l_id, GETDATE(), 'borrowing')
            `);

        await transaction.commit();
    } catch (err) {
        await transaction.rollback();
        throw err;
    }
};