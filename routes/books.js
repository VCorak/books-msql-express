// This file will act as the glue between the URI and the corresponding
// function in the services/programmingLanguages.js service.

const express = require('express');
const router = express.Router();
const books = require('../services/books');

// GET BOOKS!!
router.get('/', async function(req, res, next) {
    try {
        res.json(await books.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting books`, err.message);
        next(err)
    }
})

// POST BOOKS!
router.post('/', async function(req, res, next) {
    try {
        res.json(await books.create(req.body));
    } catch (err) {
        console.error(`Error while creating books`, err.message);
        next(err);
    }
});

module.exports = router;

// try to get books to route; if not successful show error