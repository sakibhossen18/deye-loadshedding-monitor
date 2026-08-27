
const express = require("express");
const app = express();

app.use(express.json());

let gridStatus = "Normal";
let todayHours = 0;
let monthHours = 0;
let lastFailure = "No failure detected";

app.get("/", (req,res)=>{

res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Deye Load Shedding Monitor V6</title>

<style>

body{
font-family:Arial;
background:#f2f5ff;
padding:20px;
}

.card{
background:white;
padding:25px;
margin:15px;
border-radius:15px;
box-shadow:0 5px 20px #ddd;
}

h1{
color:#1464ff;
}

.normal{
color:green;
font-size:30px;
font-weight:bold;
}

.failure{
color:red;
font-size:30px;
font-weight:bold;
}

input{
width:90%;
padding:12px;
margin:8px;
border-radius:8px;
border:1px solid #ccc;
}

button{
background:#1464ff;
color:white;
padding:15px;
border:none;
border-radius:10px;
width:95%;
font-size:18px;
}

</style>

</head>


<body>

<h1>⚡ Deye Load Shedding Monitor V6</h1>


<div class="card">

<h2> Deye Cloud Connection</h2>

<input placeholder="App ID">

<input placeholder="App Secret">

<input placeholder="Deye Email">

<input placeholder="Inverter SN">

<button>
Connect Deye Cloud
</button>

</div>



<div class="card">

<h2>Grid Status</h2>

<div class="${gridStatus=="Normal"?"normal":"failure"}">

${gridStatus}

</div>

</div>



<div class="card">

<h2>Load Shedding Report</h2>

<h3>Today:
${todayHours} Hours</h3>

<h3>This Month:
${monthHours} Hours</h3>

<h3>
Last Failure:
${lastFailure}
</h3>


</div>



</body>
</html>

`);

});



app.get("/api/status",(req,res)=>{

res.json({

grid:gridStatus,

today:todayHours,

month:monthHours,

lastFailure:lastFailure

});

});



app.listen(process.env.PORT || 3000,()=>{

console.log("Deye Monitor V6 Running");

});
