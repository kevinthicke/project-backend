const fs = require('fs');

const pathName = './data/data.json';

function showBooks() {
    return new Promise((resolve, reject) => {
        fs.readFile(pathName, 'utf-8', (err, data) => {
            err ? reject(err) : resolve(JSON.parse(data))
        });
    });
}

module.exports = {
    showBooks
}