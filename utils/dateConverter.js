const { parse } = require('date-fns')

const converter = (date) => {
    date = parse(date, 'dd-MM-yyyy', new Date())
    return date;
}

module.exports = converter