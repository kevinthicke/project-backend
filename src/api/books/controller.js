const mongodb = require('mongodb');
const fs = require('fs');

const MongoClient = mongodb.MongoClient;
const Server = mongodb.Server;
const ObjectId = mongodb.ObjectId;

const pathName = './data/data.json';
const MONGO_URL = 'mongodb://localhost:27017';

function showBooks() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(MONGO_URL, (err, client) => {
            if(err) reject(err);
            else {
                const db = client.db('BOOK_DB');
                const booksCollection = db.collection('books');
                booksCollection.find({}).toArray().then(result => resolve(result));
            }
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
        MongoClient.connect(MONGO_URL, (err, client) => {
            if(err) reject(err);
            else {
                const db = client.db('BOOK_DB');
                const booksCollection = db.collection('books');
                booksCollection.insert(book).then(result => resolve(result));
            }
        });
    });
}

module.exports = {
    showBooks,
    saveBook
}