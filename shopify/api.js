const axios = require("axios");
const config = require("../config/settings");


async function shopifyRequest(endpoint, data = {}) {

    try {

        const response = await axios.post(
            `https://${config.shopify.storeUrl}/admin/api/2026-07/${endpoint}`,
            data,
            {
                headers: {
                    "X-Shopify-Access-Token": config.shopify.accessToken,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data;

    } catch(error) {

        console.log("Shopify API Error:");
        console.log(error.message);

        return null;
    }

}


module.exports = {
    shopifyRequest
};
