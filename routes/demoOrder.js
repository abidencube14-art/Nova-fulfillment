const express = require("express");

const router = express.Router();

const {
submitOrder
}
=
require("../services/pesapalService");


router.get("/",async(req,res)=>{

    try{

        const order={

            amount:10,

            email:"customer@example.com",

            phone:"+263771234567",

            firstName:"Nova",

            lastName:"Customer"

        };

        const result=
        await submitOrder(order);

        res.json(result);

    }catch(err){

        res.status(500).json({

            success:false,

            error:err.message

        });

    }

});

module.exports=router;
