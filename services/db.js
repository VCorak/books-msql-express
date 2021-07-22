// The services folder will house all my services.
// One of them is db.js, used to talk with the MySQL database and enabling
// running queries

const mysql = require('mysql2/promise');
const config = require('../config');

// execute - helper which will prepare and query the statement
async function getBooks(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const results = await connection.execute[sql, params];
// console.log(results);
    return results;

}

module.exports = {
    getBooks
}