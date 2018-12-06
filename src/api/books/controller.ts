import { readFile } from 'fs';

export const showBooks = (pathName:string) => {
    return new Promise((resolve, reject) => {
        readFile(pathName, 'utf-8', (err, data) => {
            err ? reject(err) : resolve(JSON.parse(data))
        });
    });
}