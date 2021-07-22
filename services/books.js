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
    // console.log('Hey valentina');

    const data = helper.emptyOrRows(rows);
    const meta = {page};

    console.log(data);

    return {
        data, meta
    }
}

// POST A NEW BOOK- for this to be accessible need to add a route to link it up
async function create(books) {
    const result = await db.getBooks(`INSERT INTO books_data (name, author, 
                   genre, review) VALUES (?, ?, ?, ?, ?))`, [
                       books.name, books.author, books.genre, books.review
    ]);

    let message = 'Error in creating books';

    if (result.affectedRows) {
        message ='Books created!'
    }

    return {message};
}

// UPDATE BOOK- wire up with route and put endpoint
async function update(id, books) {
    const result = await db.getBooks(`UPDATE books_data SET name=?, author=?, 
                   genre=?, review=? WHERE id=?`, [
        id, books.name, books.author, books.genre, books.review
    ]);

    let message = 'Error in updating books';

    if (result.affectedRows) {
        message ='Books updated!'
    }

    return {message};
}

// REMOVE BOOK- wire up with route
async function remove(id) {
    const result = await db.getBooks(`DELETE FROM books_data WHERE id=?`, [id]);

    let message = 'Error in deleting books';

    if (result.affectedRows) {
        message ='Books deleted!'
    }

    return {message};
}

module.exports = {
    getMultiple, create, update, remove
}