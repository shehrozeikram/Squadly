const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'squadly',
    // password: 'Welcome.123!'
    password: 'mysql'
});

module.exports = pool.promise();