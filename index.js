const express=require("express")

const app=express();

app.get('/',(req,res)=>{
    res.end("hello from server")
})
const PORT=3000;
app.listen(process.env.PORT||3000,()=>{
    console.log('server started at localhost http://localhost:3000')
})

