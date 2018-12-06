let express = require('express');
let booksRouter = require('./api/books/index')

let app = express();

app.get('/', booksRouter);

app.listen(8080);