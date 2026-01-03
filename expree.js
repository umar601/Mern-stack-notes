const express = require("express");

const app = express();

const port = 8080;

app.set("view engine","ejs")

const path = require("path");
const expresserro = require("./expresserror");

app.set("views",path.join(__dirname,"./views"));

app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended:true}))

app.use(express.json());

// import { name } from "ejs";
// import { Agent } from "http";
// import mongoose from "mongoose";
// ;


// main.then(()=>{
//     console.log("connected successfully")
// }).catch(()=>{
//     console.log("error")
// })

// async function main() {

//     await mongoose.connect("mongodb://127.0.0.1:2701/test")
    
// }


// const userSchema = new mongoose.Schema({

//     name:String,
//     Age:Number,
//     marks:Number
// })

// const user = mongoose.model("user",userSchema);


// let user1=new user({
//     name:"umar"
// })
// user1.save().then(()=>{
//     console.log(res)
// }).catch(()=>{
//     console.log(err)
// })


// user.insertMany([
//     {}
// ]).then(()=>{
//     console.log("Save")
// }).catch(()=>{
//     console.log(err)
// })

// user.findById().then(()=>{
//     console.log(re)
// }).catch(()=>{
//     console.log(err)
// })
// const methodOverride = require("method-override")

// app.use(methodOverride("_method"))

// const {v4:uuidv4}=require("uuid")
// uuidv4();




app.use((req,res,next)=>{

    let {token} = req.query;

    if(token=="umar"){

        return next()
    }

    res.status(404).send("not allowed")
})




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


app.use((err,req,res,next)=>{

    console.log("Error handling middle ware")
    next(new expresserro(400,"not"))
})

app.get("/",(req,res)=>{

    let {username}=req.query;

    res.render("index.ejs",{username})

})




app.listen(port,()=>{

    console.log("port is litening")
})