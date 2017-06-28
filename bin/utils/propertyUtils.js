'use strict';

module.exports = {
    getType: function getType() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (obj.type === 'homes-for-sale') {
            return 'Homes for sale';
        }

        if (obj.type === 'apartments-for-rent') {
            return 'Apartments for rent';
        }

        if (obj.type === 'houses-for-rent') {
            return 'Houses for rent';
        }

        if (obj.type === 'building-directory-sitemap') {
            return 'Apartment complexes';
        }

        console.log('propertyUtils#getType error: No valid type found for', obj.type);
    }
};
//# sourceMappingURL=propertyUtils.js.map