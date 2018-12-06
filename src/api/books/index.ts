import * as express from 'express';
import { showBooks } from './controller';

let router = express.Router();
const pathName = './data/data.json';

router.get('/', (request, response) => {
    showBooks(pathName).then(data => response.json(data));
});

export = router;