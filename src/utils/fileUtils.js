import appRoot from 'app-root-path';
import fs from 'fs';

const outputFile = appRoot + '/topCities.json';
const pathToCsv = appRoot + '/top-cities.csv';

export function readFile() {
    // Load top-cities file.
    return new Promise((resolve, reject) => {
        return fs.readFile(pathToCsv, 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading file:', err);
                return reject(err);
            }

            return resolve(data);
        });
    });
}

export function writeFile(data) {
    return new Promise((resolve, reject) => {
        let json = JSON.stringify(data);

        return fs.writeFile(outputFile, json, 'utf8', (err, data) => {
            if (err) {
                console.log('Error writing json file:', err);
                return reject(err);
            }

            return resolve(data);
        });
    });
}