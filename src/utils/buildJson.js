import propertyUtils from './propertyUtils';

let buildJson = (data) => {
    return new Promise((resolve, reject) => {
        let topCities = {};
        
        data.forEach((obj) => {
            // Create state if it doesn't exist.
            if (!topCities[obj.state]) {
                topCities[obj.state] = {}
            }

            // Create city if it doesn't exist.
            if (!topCities[obj.state][obj.name]) {
                topCities[obj.state][obj.name] = {
                    name: obj.name,
                    listingTypes: []
                }
            }

            let newListingType = {
                type: propertyUtils.getType(obj),
                url: obj.url
            }

            topCities[obj.state][obj.name].listingTypes.push(newListingType);
        });


        return resolve(topCities);
    })
};

export default buildJson;