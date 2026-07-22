const axios = require("axios");
const config = require("../config/settings");


async function createPayment(order) {

    console.log("Creating PesaPal payment request...");

    /*
    This will later send:
    - customer details
    - order amount
    - callback URL
    - description
    */

    return {
        status: "pending",
        message: "PesaPal payment creation ready",
        orderId: order.id
    };

}


module.exports = {
    createPayment
};
