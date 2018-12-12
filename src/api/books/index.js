const express = require('express');
const controller = require('./controller');

let router = express.Router();

router.get('/', (request, response) => {
    controller.showBooks().then(data => response.json(data))
                          .catch(err => response.send(err));
});


router.post('/', (request, response) => {
    const book = request.body;
    controller.saveBook(book);
});

module.exports = router;