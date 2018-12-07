const mongodb = require('mongodb');

let MongoClient = mongodb.MongoClient;
const mongoUrl = 'mongodb://localhost:27017/BOOKS_DB';

function showBooks() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoUrl, (err, db) => {

            let collection = db.collection('books');
            collection.find({}).toArray((err, result) => resolve(result));
        });        
    });
}

module.exports = {
    showBooks
}