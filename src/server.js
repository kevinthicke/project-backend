const express = require('express');
const booksRouter = require('./api/books/index');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.use('/books', booksRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));