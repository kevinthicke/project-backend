const express = require('express');
const showBooks = require('./controller').showBooks;

let router = express.Router();
const pathName = './data/data.json';

router.get('/', (request, response) => {
    showBooks(pathName).then(data => response.json(data));
});

module.exports = router;