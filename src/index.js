/**
  *   ParseTopCities
  *   
  *   Given a CSV file with a list of the top cities and property types,
  *   generate a valid JSON file to use for creating a sitemap on HotPads.
  *
  */

import buildJson from './utils/buildJson';
import parseCsv from './utils/parseCsv';
import { readFile, writeFile } from './utils/fileUtils';

console.log('-= ParseTopCities for HotPads Sitemap v.0.1 =-');

readFile()
    .then((data) => parseCsv(data))
    .then((data) => buildJson(data))
    .then((data) => writeFile(data))
    .then(() => {
        console.log('\nJSON file successfully created.');
        console.log('Check topCities.json');
    })
    .catch((err) => {
        console.log('Error:', err);
    });
