//require express
const express=require("express");

const router=express.Router();

//require sms controller
const {smsController}=require("../controllers/smsController");

//route to send a sms to recipient
router.post("/sms",smsController);

module.exports=router;