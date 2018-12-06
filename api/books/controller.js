const readFile = require('fs').readFile;

const showBooks = (pathName) => {
    return new Promise((resolve, reject) => {
        readFile(pathName, 'utf-8', (err, data) => {
            err ? reject(err) : resolve(JSON.parse(data))
        });
    });
}

module.exports = {
    showBooks
}