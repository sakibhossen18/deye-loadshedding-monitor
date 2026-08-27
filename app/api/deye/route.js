export async function POST(req) {

  try {

    const body = await req.json();

    const {
      appId,
      appSecret,
      email,
      inverterSn
    } = body;


    // Deye Token Request
    const tokenResponse = await fetch(
      "https://api.deyecloud.com/v1.0/account/token",
      {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          appId,
          appSecret
        })
      }
    );


    const tokenData = await tokenResponse.json();


    if(!tokenData.accessToken){
      return Response.json({
        error:"Token failed",
        data:tokenData
      });
    }


    // Inverter Status Request
    const statusResponse = await fetch(
      "https://api.deyecloud.com/v1.0/device/latest",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":
          `Bearer ${tokenData.accessToken}`
        },
        body:JSON.stringify({
          deviceSn: inverterSn
        })
      }
    );


    const statusData = await statusResponse.json();


    return Response.json({
      connected:true,
      inverter:statusData
    });


  } catch(error){

    return Response.json({
      error:error.message
    });

  }

}