
// Deye API Bridge (Starter)
// Run this on a small server/hosting later.
// Do not put your App Secret inside public HTML.

const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const APP_ID = process.env.DEYE_APP_ID;
const APP_SECRET = process.env.DEYE_APP_SECRET;

app.post("/deye/token", async (req,res)=>{
  try{
    const response = await axios.post(
      "https://eu1-developer.deyecloud.com/v2/api/v1.0/account/token",
      {
        appSecret: APP_SECRET,
        email: req.body.email,
        password: req.body.password
      },
      {
        params:{appId:APP_ID},
        headers:{"Content-Type":"application/json"}
      }
    );
    res.json(response.data);
  }catch(e){
    res.status(500).json({error:e.message});
  }
});

app.post("/deye/latest", async (req,res)=>{
  res.json({
    message:"Next step: connect device/latest API using token",
    inverterSN:req.body.inverterSN
  });
});

app.listen(3000,()=>console.log("Deye bridge running"));
