'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propertyUtils = require('./propertyUtils');

var _propertyUtils2 = _interopRequireDefault(_propertyUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildJson = function buildJson(data) {
    return new Promise(function (resolve, reject) {
        var topCities = {};

        data.forEach(function (obj) {
            // Create state if it doesn't exist.
            if (!topCities[obj.state]) {
                topCities[obj.state] = {};
            }

            // Create city if it doesn't exist.
            if (!topCities[obj.state][obj.name]) {
                topCities[obj.state][obj.name] = {
                    name: obj.name,
                    listingTypes: []
                };
            }

            var newListingType = {
                type: _propertyUtils2.default.getType(obj),
                url: obj.url
            };

            topCities[obj.state][obj.name].listingTypes.push(newListingType);
        });

        return resolve(topCities);
    });
};

exports.default = buildJson;
//# sourceMappingURL=buildJson.js.map