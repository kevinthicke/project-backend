const express = require('express');
const controller = require('./controller');
const fs = require('fs');

let router = express.Router();

router.get('/', (request, response) => {
    controller.showBooks().then(data => response.json(data))
                                  .catch(err => response.send(err));
});

const pathName = './data/data.json';

router.post('/', (request, response) => {
    const book = request.body;
    fs.writeFile(pathName, JSON.stringify(book), err =>  err ? response.send(err) : response.send('Book saved correctly!')); 
});

module.exports = router;