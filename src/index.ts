import dotenv from "dotenv";
import {config} from "dotenv";


import { log } from "console";
import express,{Express,Request,Response} from "express";
import cors from "cors"
import { connectDb } from "./utils/db";
import bookRouter from "./routes/bookRoute";
import routes from "./routes";



const app:Express = express()

config();

const port = process.env.PORT || 8080


//DB CONNECTION

connectDb()

// Middleware
app.use(cors({
    origin:process.env.HOST_URL || "*" 
}))

app.use(express.json())


// app.use("/api/books",bookRouter)
app.use("/api",routes)


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