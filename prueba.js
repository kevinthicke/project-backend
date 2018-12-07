const mongodb = require('mongodb');

let MongoClient = mongodb.MongoClient;
const mongoUrl = 'mongodb://localhost:27017/BOOKS_DB';

const callback = (err, db) => {
    let collection = db.collection('books');
    let books;
    collection.find({}).toArray().then(data => books = data);
    return books;
    db.close();
}

const showBooks = (pathName) => {
    return new Promise((resolve, reject) => MongoClient.connect(mongoUrl, () => {
        console.log(callback(err,db))
    }));
}

showBooks();