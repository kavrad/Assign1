//require twilio
const twilio=require("twilio");

//require dotenv
require("dotenv").config();

//whatsapp controller send a whatsapp message to given phone number
exports.whatsAppController=async (req,res)=>{
    const client=twilio(process.env.ACCOUNT_SID,process.env.TOKEN);
    try{

        //extract phoneumber from req.body
        const phoneNumber=req.body.to;

        //create a whatsapp message to send to recipient with given phone number
         const whatsapp=await client.messages.create({
            body:"Your appointment is coming up on July 21 at 3PM",
            from:"whatsapp:+14155238886",
            to:`whatsapp:${phoneNumber}`
         })
         console.log(whatsapp.sid);

         res.status(200).json({
            success:true,
            data:whatsapp.body,
            message:"Sucessfully sent the message through whatsapp"
         })

       }catch(err){

        //return a response of invalid phone number in case of error
        console.log(err);
        
        return res.status(400).json({
            success:false,
            data:err.message,
            message:"Invalid phone number"
        })
       }
}