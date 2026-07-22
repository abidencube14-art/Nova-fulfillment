const axios = require("axios");
const config = require("../config/settings");


async function authenticatePesapal() {

    try {

        const response = await axios.post(
            "https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken",

            {
                consumer_key: config.pesapal.consumerKey,
                consumer_secret: config.pesapal.consumerSecret
            },

            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );


        return response.data.token;


    } catch(error) {

        console.log("PesaPal authentication failed");

        console.log(error.message);

        return null;
    }

}


module.exports = {
    authenticatePesapal
};
