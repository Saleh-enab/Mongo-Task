const converter = require('../utils/dateConverter')
const createFilter = (query) => {
    const filter = {};
    let startDate = (query.date_from) ? converter(query.date_from) : null;
    let endDate = (query.date_till) ? converter(query.date_till) : null;
    if (startDate) {
        filter.startDate = { $gte: startDate };
    }
    if (endDate) {
        filter.endDate = { $lte: endDate };
    }
    if (query.departure) {
        filter.departure = query.departure
    }
    if (query.destination) {
        filter.destination = query.destination
    }
    return filter
}

module.exports = createFilter
