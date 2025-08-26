import dottenv from "dotenv";
import {config} from "dotenv";
// CREATING A SERVER
// STEPS
// 1. Import the express

import { log } from "console";
import express,{Express} from "express";

// 2. Initialize the express

    const app:Express = express()


    config();
// 3. Define a port

const port = process.env.PORT || 8080

// 4.  Listen on a port

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);  
})