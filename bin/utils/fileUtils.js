'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readFile = readFile;
exports.writeFile = writeFile;

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var outputDir = _appRootPath2.default + '/output/';
var pathToCsv = _appRootPath2.default + '/top-cities.csv';

function readFile() {
    // Load top-cities file.
    return new Promise(function (resolve, reject) {
        return _fs2.default.readFile(pathToCsv, 'utf8', function (err, data) {
            if (err) {
                console.log('Error reading file:', err);
                return reject(err);
            }

            return resolve(data);
        });
    });
}

function writeFile(data) {
    var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'topCitiesEncoded.json';

    return new Promise(function (resolve, reject) {
        var json = JSON.stringify(data);

        return _fs2.default.writeFile(outputDir + filename, json, 'utf8', function (err, data) {
            if (err) {
                console.log('Error writing json file:', err);
                return reject(err);
            }

            return resolve(data);
        });
    });
}
//# sourceMappingURL=fileUtils.js.map