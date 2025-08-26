import dotenv from "dotenv";
import {config} from "dotenv";


import { log } from "console";
import express,{Express,Request,Response} from "express";
import cors from "cors"



const app:Express = express()

config();

const port = process.env.PORT || 8080


// Middleware
app.use(cors({
    origin:process.env.HOST_URL || "*" 
}))


//BASIC ENDPOINT
app.get("/",(req:Request,res:Response)=>{
    console.log("NAMAN MITTAL");
    // res.send("Hello World")
    res.json({
        success:true,
        name:"Naman Mittal",
        age:22
    })
})


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);  
})