//require twilio
const twilio=require("twilio");

//require dotenv
require("dotenv").config();

//callController make a call to a recipent with given phone number
exports.callController=async (req,res)=>{
    const client=twilio(process.env.ACCOUNT_SID,process.env.TOKEN);
    try{
        const phoneNumber=req.body.to;
        const call=await client.calls.create({
            url:'http://demo.twilio.com/docs/voice.xml',
            to:phoneNumber,
            from:process.env.PHONE_NUMBER
        })
        console.log(call.sid);
        res.status(200).json({
            success:true,
            message:"Sucessfully called the recipient"
        })
    }catch(err){
      console.log(err);
      return res.status(400).json({
        success:false,
        data:err.message,
        message:"Invalid phone number"
      })
    }
    
}