const express = require("express");
const router = express.Router();

const { submitOrder } = require("../services/pesapalService");

router.post("/create", async (req, res) => {

    try {

        const result = await submitOrder(req.body);

        res.json(result);

    } catch (err) {

        console.log(err.message);

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

module.exports = router;
