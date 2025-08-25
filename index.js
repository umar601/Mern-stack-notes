const express = require("express")

let app=express();

let port=8080;

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.listen(port,()=>{
    console.log("listening at port ",port);
})

app.get("/action",(req,res)=>{

    let {username,password}=req.query;

    console.log(username);
    console.log(password)

    res.send(username,password)
})

app.post("/action",(req,res)=>{

    console.log(req.body)

    // let {username,password}=req.body

    res.send("psot")
})


