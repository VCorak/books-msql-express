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

// PUT, UPDATE BOOKS!
router.put('/:id', async function(req, res, next) {
    try {
        res.json(await books.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating books`, err.message);
        next(err);
    }
});

// DELETE BOOKS!
router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await books.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting books`, err.message);
        next(err);
    }
});

module.exports = router;

// try to get books to route; if not successful show error