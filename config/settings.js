require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3000,

    shopify: {
        storeUrl: process.env.SHOPIFY_STORE_URL,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN
    },

    pesapal: {
        consumerKey: process.env.PESAPAL_CONSUMER_KEY,
        consumerSecret: process.env.PESAPAL_CONSUMER_SECRET,
        environment: process.env.PESAPAL_ENVIRONMENT
    }
};
