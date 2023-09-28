//require twilio
const twilio=require("twilio");

//require dotenv
require("dotenv").config();


//smsController sends a sms to a recipient with given phone number
exports.smsController=async (req,res)=>{
    const client=twilio(process.env.ACCOUNT_SID,process.env.TOKEN);
    try{
        const phoneNumber=req.body.to;
        
         const message=await client.messages.create({from:process.env.PHONE_NUMBER,body:"Hi There",to:phoneNumber});
         
         console.log(message.sid)
          return res.status(200).json({
            success:true,
            data:message.body,
            message:"Sucessfully sent the sms"
         })
       }catch(err){
         console.log(err);
         res.status(400).json({
            success:false,
            message:"Invalid phone number"
         })
       }
}