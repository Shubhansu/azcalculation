'use strict';

const calculateTotalService = require('../service').calculateTotal;
module.exports = crmCheck;

function crmCheck(input) {
    return { finalAmount: calculateTotalService.calcultate(input), message: "success"};
}