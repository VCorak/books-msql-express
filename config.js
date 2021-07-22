//  This file will have configurations like the database credentials and rows per page
//  we want to show when we paginate results.
const config = {
    db: {
        host: 'localhost',
        user:  'root',
        password: 'password',
        database: 'books',
    },

    listPerPage: 10,
}

module.exports = config;