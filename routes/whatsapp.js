//require express
const express=require("express");

const router=express.Router();

//require whatsapp controller
const {whatsAppController}=require("../controllers/whatsAppController");

//route to send a whatsapp message to recipient
router.post("/whatsapp",whatsAppController);

module.exports=router;