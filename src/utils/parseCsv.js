import csv from 'csv';

const parseCsv = (data) => {
    return new Promise((resolve, reject) => {
        return csv.parse(data, {columns: true}, (err, data) => {
            if (err) {
                return reject(err);
            }

            return resolve(data);
        });
    })
};

export default parseCsv;