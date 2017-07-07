const forOwn = require('lodash/forOwn');
const split = require('lodash/split');
const dropRight = require('lodash/dropRight');
const last = require('lodash/last');
const output = {};

const types = {
    'Apartments for rent': 1,
    'Apartment complexes': 2,
    'Homes for sale': 4,
    'Houses for rent': 8
};

const encodeJson = (input) => {
    forOwn(input, (cities, state) => {
        if (state === 'REST') {
            // Bad data in topCities.json
            return;
        }
        state = state.toLowerCase();
        const stateContainer = output[state] = [];
        forOwn(cities, ({listingTypes}, cityName) => {
            let slug;
            let flags = 0;

            listingTypes.forEach(({type, url}) => {
                slug = last(dropRight(split(url, '/'), 1));
                flags |= types[type];
            });

            stateContainer.push(cityName, slug.toLowerCase(), flags);
        });
    });

    return output;
}

export default encodeJson;