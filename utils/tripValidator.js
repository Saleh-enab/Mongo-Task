const { check } = require('express-validator')

const validator = () => {
    const validators = [
        check('departure')
            .notEmpty()
            .withMessage("Departure is required")
            .escape(),
        check('destination')
            .notEmpty()
            .withMessage("Destination is required")
            .escape(),
        check('startDate')
            .notEmpty()
            .withMessage("Start Date is required")
            .isISO8601()
            .withMessage('Date must be in the format yyyy-MM-dd\'T\'HH:mm\'Z\''),
        check('endDate')
            .notEmpty()
            .withMessage("End Date is required")
            .isISO8601()
            .withMessage('Date must be in the format yyyy-MM-dd\'T\'HH:mm\'Z\''),
        check('passengers')
            .isInt({ min: 1 })
            .withMessage("Number of passengers must be greater than 1")
    ]
    return validators;
}

module.exports = validator();