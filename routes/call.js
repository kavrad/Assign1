//require express

const express=require("express");

const router=express.Router();

//require call controller

const {callController}=require("../controllers/callController");

//post request to make a call

router.post("/call",callController);

module.exports=router;