const express = require('express');
const showBooks = require('./controller').showBooks;

let router = express.Router();

router.get('/', (request, response) => {
    showBooks().then(data => response.json(data));
});

module.exports = router;