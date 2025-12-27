const express = require("express");

const app = express();

const port = 8080;

app.set("view engine","ejs")

const path = require("path");

app.set("views",path.join(__dirname,"./views"));

app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended:true}))

app.use(express.json());

// const methodOverride = require("method-override")

// app.use(methodOverride("_method"))

// const {v4:uuidv4}=require("uuid")
// uuidv4();




// app.get("/",(req,res)=>{

// let {username,id}=req.query;


// console.log(username,id)

//     res.send({username,id})
// })


// app.get("/:username",(req,res)=>{

// let {username}=req.params;


// console.log(username)

//     res.send(username)
// })

app.get("/",(req,res)=>{

    let {username}=req.query;

    res.render("index.ejs",{username})
})




app.listen(port,()=>{

    console.log("port is litening")
})