'use strict';
const calculateTotalBusiness = require('../business').calculateTotal;
module.exports = calculateTotal;
async function calculateTotal(request, response) {
    try {
        const input = request.body;
        console.log('API URL:', request.url);
        // TO DO apply joi schema for the request model
        let responseData = calculateTotalBusiness(input);
        console.log("responsessss", responseData)
        return response.status(200).send(responseData);
    } catch (error) {
        console.log("\n Error in az/catch \n", error);
        return response.status(500).send(error);
    }
};