import dotenv from "dotenv";
import {config} from "dotenv";
// CREATING A SERVER
// STEPS
// 1. Import the express

import { log } from "console";
import express,{Express,Request,Response} from "express";

// 2. Initialize the express

    const app:Express = express()


    config();
// 3. Define a port

const port = process.env.PORT || 8080


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

// 4.  Listen on a port

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);  
})