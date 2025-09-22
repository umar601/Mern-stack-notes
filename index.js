
const express = require("express");

const app = express();





// app.use((req,res,next)=>{
  
//     req.responseTime = new Date();
//  console.log(req.method,req.path,req.hostname,req.ip,req.responseTime)
//  next()
// })


app.use((req,res,next)=>{

    let {token} = req.query;

    if(token=="umar"){
        return next()
    }
    throw new Error("not allowed");
})



app.get("/random",(req,res)=>{

  res.send("random");
})


app.use((req,res)=>{
    res.status(404).send("page not found")
})


app.listen(8080,()=>{
  console.log("app is listening")
})
