// Another service is programmingLanguages.js,
// which will have methods like getMultiple, create, etc.
// to get and create the programming language resource.
// Basic mapping of the URI and the related service function will look like below:
// GET /programming-languages → getMultiple()
// POST /programming-languages → create()
// PUT /programming-languages/:id → update()
// DELETE /programming-languages/:id → remove()

const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.getBooks(`SELECT id, name, author, genre, review FROM books_data LIMIT ?,?`,
        [offset, config.listPerPage]);
    console.log('Hey valentina');

    const data = helper.emptyOrRows(rows);
    const meta = {page};

    console.log(data);

    return {
        data, meta
    }
}

module.exports = {
    getMultiple
}