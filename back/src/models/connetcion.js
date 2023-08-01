const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSORD,
    database: process.MYSQL_DB,
});

module.exports = connection;