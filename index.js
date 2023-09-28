//require express

const express=require("express");

//require cors
const cors=require("cors");

//require dotenv
const dotenv=require("dotenv");

//require routes from routes folder
const smsRoutes=require("./routes/sms");
const callRoutes=require("./routes/call");
const whatsAppRoutes=require("./routes/whatsapp");

dotenv.config();

const port=process.env.PORT || 4000

//initialize express server
const app=express();

//middleware to parse the request body
app.use(express.json());

app.use(smsRoutes);
app.use(callRoutes);
app.use(whatsAppRoutes);


app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on port:",port);
})