'use strict';

var _appRootDir = require('app-root-dir');

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _buildJson = require('./utils/buildJson');

var _buildJson2 = _interopRequireDefault(_buildJson);

var _encodeJson = require('./utils/encodeJson');

var _encodeJson2 = _interopRequireDefault(_encodeJson);

var _parseCsv = require('./utils/parseCsv');

var _parseCsv2 = _interopRequireDefault(_parseCsv);

var _fileUtils = require('./utils/fileUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appDir = _appRootDir2.default.get(); /**
                                           *   ParseTopCities
                                           *   
                                           *   Given a CSV file with a list of the top cities and property types,
                                           *   generate a valid JSON file to use for creating a sitemap on HotPads.
                                           *
                                           */

console.log('-= ParseTopCities for HotPads Sitemap v.0.2 =-');
(0, _fileUtils.readFile)().then(function (data) {
    return (0, _parseCsv2.default)(data);
}).then(function (data) {
    return (0, _buildJson2.default)(data);
}).then(function (data) {
    return (0, _encodeJson2.default)(data);
}).then(function (data) {
    return (0, _fileUtils.writeFile)(data);
}).then(function () {
    console.log('\nJSON file successfully created.');
    console.log('Check: ' + appDir + '/topCitiesEncoded.json');
}).catch(function (err) {
    console.log('Error:', err);
});
//# sourceMappingURL=index.js.map