const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "thanhvinhtv1523",
    database: "datashop_db"
});

module.exports = db;
