'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _csv = require('csv');

var _csv2 = _interopRequireDefault(_csv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseCsv = function parseCsv(data) {
    return new Promise(function (resolve, reject) {
        return _csv2.default.parse(data, { columns: true }, function (err, data) {
            if (err) {
                return reject(err);
            }

            return resolve(data);
        });
    });
};

exports.default = parseCsv;
//# sourceMappingURL=parseCsv.js.map