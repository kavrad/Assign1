//require twilio
const twilio=require("twilio");

//require dotenv
require("dotenv").config();


//callController make a call to a recipent with given phone number
exports.callController=async (req,res)=>{
    const client=twilio(process.env.ACCOUNT_SID,process.env.TOKEN);
    try{

        //extract the phoneNumber from req.body
        const phoneNumber=req.body.to;

        //Make a call to the recipient with the given phone number
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
      //printing the error
      console.log(err);

      //return a response of invalid phone number in case of error
      return res.status(400).json({
        success:false,
        data:err.message,
        message:"Invalid phone number"
      })
    }
    
}