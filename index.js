
const express = require("express");

const app = express();

const expresserro = require("./expresserror")



//loggeer

// app.use((req,res,next)=>{
  
//     req.responseTime = new Date();
//  console.log(req.method,req.path,req.hostname,req.ip,req.responseTime)
//  next()
// })

//task to verify token 

// app.use((req,res,next)=>{

//     let {token} = req.query;

//     if(token=="umar"){
//       return next()
//     }
//     // throw new Error("not allowed");
//     throw new expresserro(401,"access denied")

    
// })


// app.get("/",(req,res)=>{
//   res.send("eh")
// })


// app.get("/random",(req,res)=>{

//   abc=abc

//   res.send("random");
// })


// let adminRoute = (req,res,next)=>{

//   throw new expresserro(403,"unauthorized");
// }



// app.use("/admin",adminRoute,(req,res)=>{

//   res.send("admin");

// })


function asyncWrap(fun){

  return function(req,res,next){
    fun(req,res,next).catch((err)=>{
   next(err)
    })
  }
}


app.get("/home",asyncWrap(async(req,res,next)=>{

  // next(new expresserro(400,"not"))


    let chat = await user.findById("Sdf");
  
 
  
}))


let handlerOfValidation = (err)=>{

  console.log("handling or performing task");

  return err;
}


//custom error handling middleware

app.use((err,req,res,next)=>{

  // console.log("_____________errr____________________")
  // res.send(err)

  if(err.name=="ReferenceError"){
    err=handlerOfValidation(err);
  }
  let {status=500,message="some message"} = err

  //we are assigning value to status and message if we not throw error it by default set it to 500 and som message 

  res.status(status).send(message)
})



// app.use((req,res)=>{
//     res.status(404).send("page not found")
// })


app.listen(8080,()=>{
  console.log("app is listening")
})
