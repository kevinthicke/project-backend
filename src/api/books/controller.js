const fs = require('fs');

const pathName = './data/data.json';

function showBooks() {
    return new Promise((resolve, reject) => {
        fs.readFile(pathName, 'utf-8', (err, data) => {
            err ? reject(err) : resolve(JSON.parse(data))
        });
    });
}

function insertBook (book) {
    return new Promise ((resolve, reject) => {
        showBooks().then(data => {
            data.push(book);
            resolve(data);
        });
    });
}
        

function saveBook(book) {
    insertBook(book).then( data => {
        fs.writeFile(pathName, JSON.stringify(data), err => err ? console.log(err) : console.log('Book saved!'));
    });
}

const myBook = {
    id: 3,
    name: "The Meaning of General Relativity",
    author: "Albert Einstein",
    year: 1967
}

saveBook(myBook);

module.exports = {
    showBooks
}