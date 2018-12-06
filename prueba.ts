import * as fs from 'fs';

function getData(fileName:string) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, 'utf-8', (err, data) => {
          err ? reject(err) : resolve(data);
      });
    });
  }

getData('./data/data.json').then(data => console.log(data));
