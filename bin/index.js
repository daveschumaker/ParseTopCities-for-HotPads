'use strict';

var _buildJson = require('./utils/buildJson');

var _buildJson2 = _interopRequireDefault(_buildJson);

var _parseCsv = require('./utils/parseCsv');

var _parseCsv2 = _interopRequireDefault(_parseCsv);

var _fileUtils = require('./utils/fileUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('-= ParseTopCities for HotPads Sitemap v.0.1 =-'); /**
                                                                 *   ParseTopCities
                                                                 *   
                                                                 *   Given a CSV file with a list of the top cities and property types,
                                                                 *   generate a valid JSON file to use for creating a sitemap on HotPads.
                                                                 *
                                                                 */

(0, _fileUtils.readFile)().then(function (data) {
    return (0, _parseCsv2.default)(data);
}).then(function (data) {
    return (0, _buildJson2.default)(data);
}).then(function (data) {
    return (0, _fileUtils.writeFile)(data);
}).then(function () {
    console.log('\nJSON file successfully created.');
    console.log('Check topCities.json');
}).catch(function (err) {
    console.log('Error:', err);
});
//# sourceMappingURL=index.js.map