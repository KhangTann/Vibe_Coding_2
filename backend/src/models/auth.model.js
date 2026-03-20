const db = require('../config/db');
const sql = require('mssql');

exports.getUserByUsername = async(username) => {
    const pool = await db;
    const result = await pool.request()
        .input('username', sql.NVarChar, username)
        .query(`
            SELECT u.id, u.username, u.password, r.role_name 
            FROM users u
            JOIN roles r ON u.role_id = r.id
            WHERE u.username = @username
        `);
    return result.recordset[0]; // Trả về user đầu tiên tìm thấy
};