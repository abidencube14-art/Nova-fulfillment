const express = require("express");
const axios = require("axios");
const router = express.Router();

const { authenticatePesapal } = require("../pesapal/auth");

router.get("/", async (req, res) => {
    try {
        const token = await authenticatePesapal();

        const response = await axios.get(
            "https://pay.pesapal.com/v3/api/URLSetup/GetIpnList",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        res.json(response.data);

    } catch (err) {
        res.status(500).json(err.response?.data || err.message);
    }
});

module.exports = router;
