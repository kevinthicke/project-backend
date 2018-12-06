import * as express from 'express';
import * as booksRouter from './api/books/index';

const port = 3000;
const app = express();

app.use('/books', booksRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));