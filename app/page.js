'use client';
import {useState} from 'react';

export default function Home(){
 const [msg,setMsg]=useState('');
 async function connect(){
  const r=await fetch('/api/deye',{method:'POST'});
  const d=await r.json();
  setMsg(JSON.stringify(d));
 }
 return <main style={{padding:30,fontFamily:'Arial'}}>
 <h1>⚡ Deye Load Shedding Monitor V6</h1>
 <div style={{border:'1px solid #ddd',padding:20,borderRadius:12}}>
 <h3>Deye Cloud Connection</h3>
 <input placeholder="App ID" id="id" style={{display:'block',margin:8,width:300}}/>
 <input placeholder="App Secret" id="secret" style={{display:'block',margin:8,width:300}}/>
 <input placeholder="Email" id="email" style={{display:'block',margin:8,width:300}}/>
 <input placeholder="Inverter SN" id="sn" style={{display:'block',margin:8,width:300}}/>
 <button onClick={connect}>Connect Deye Cloud</button>
 </div>
 <h3>Grid Status</h3>
 <b style={{color:'green'}}>Normal</b>
 <pre>{msg}</pre>
 </main>
}
