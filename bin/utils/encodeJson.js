'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var forOwn = require('lodash/forOwn');
var split = require('lodash/split');
var dropRight = require('lodash/dropRight');
var last = require('lodash/last');
var output = {};

var types = {
    'Apartments for rent': 1,
    'Apartment complexes': 2,
    'Homes for sale': 4,
    'Houses for rent': 8
};

var encodeJson = function encodeJson(input) {
    forOwn(input, function (cities, state) {
        if (state === 'REST') {
            // Bad data in topCities.json
            return;
        }
        state = state.toLowerCase();
        var stateContainer = output[state] = [];
        forOwn(cities, function (_ref, cityName) {
            var listingTypes = _ref.listingTypes;

            var slug = void 0;
            var flags = 0;

            listingTypes.forEach(function (_ref2) {
                var type = _ref2.type,
                    url = _ref2.url;

                slug = last(dropRight(split(url, '/'), 1));
                flags |= types[type];
            });

            stateContainer.push(cityName, slug.toLowerCase(), flags);
        });
    });

    return output;
};

exports.default = encodeJson;
//# sourceMappingURL=encodeJson.js.map