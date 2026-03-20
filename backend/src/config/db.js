const sql = require('mssql');

const config = {
    user: "sa", // Đổi thành user bạn dùng nếu không phải 'sa'
    password: "123456", // Đổi thành password đúng
    server: "localhost", // Đúng instance SQL Server của bạn
    database: "library_management", // Đúng tên database
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const pool = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool;
    })
    .catch(err => console.log('DB Connection Failed', err));

module.exports = pool;