const sortTrips = async (query, sort) => {
    let result;
    if (sort) {
        sort = sort.split(',').join(' ')
        result = await query.sort(sort)
    }
    else {
        result = await query;
    }
    return result;
}

module.exports = sortTrips