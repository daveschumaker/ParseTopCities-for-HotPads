/**
  *   ParseTopCities
  *   
  *   Given a CSV file with a list of the top cities and property types,
  *   generate a valid JSON file to use for creating a sitemap on HotPads.
  *
  */

import appRootDir from 'app-root-dir';
import buildJson from './utils/buildJson';
import encodeJson from './utils/encodeJson';
import parseCsv from './utils/parseCsv';
import { readFile, writeFile } from './utils/fileUtils';

let appDir = appRootDir.get();

console.log('-= ParseTopCities for HotPads Sitemap v.0.2 =-');
readFile()
    .then((data) => parseCsv(data))
    .then((data) => buildJson(data))
    .then((data) => encodeJson(data))
    .then((data) => writeFile(data))
    .then(() => {
        console.log('\nJSON file successfully created.');
        console.log(`Check: ${appDir}/topCitiesEncoded.json`);
    })
    .catch((err) => {
        console.log('Error:', err);
    });
