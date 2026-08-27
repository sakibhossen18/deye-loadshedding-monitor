export async function POST(){
 return Response.json({
  status:"connected",
  message:"Deye API bridge ready. Add Deye credentials in Vercel Environment Variables."
 });
}