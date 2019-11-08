const mysql = require('mysql2');

const pool = mysql.createPool({
    // host: '192.168.1.200',
    // database: 'squadly',
    // user: 'shehroz',
    // password: 'Welcome.123!'  
   
    host: 'localhost',  
    database: 'squadly',
    user: 'root',
    password: 'mysql'
});

module.exports = pool.promise();