const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const booksRouter = require('./routes/books'); // wiring up route with index

app.use(bodyParser.json()); // parse JSON
app.use(bodyParser.urlencoded({ // parse url encoded body
    extended: true,
}))

app.get('/', (req, res) => {
    res.json({'message': 'It is alive'})
})

app.use('/books', booksRouter); // linking up the route books to the booksRouter

// Error handler middleware (handle any errors and provide a proper status code and message in case of an error)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});

    return;

})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})