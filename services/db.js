// The services folder will house all my services.
// One of them is db.js, used to talk with the MySQL database and enabling
// running queries

const mysql = require('mysql/promise');
const config = require('../config');

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}