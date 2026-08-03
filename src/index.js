import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js';
import { error } from "node:console";

dotenv.config({
    path:'./.env'
})

connectDB()
.then(
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is running on port ${process.env.PORT}`)
    })
).catch((error) => {
    console.log('MONGODB CONNECTION FAILED !!' , error)
})


 







// rough method

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express();


// ( async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error" , (error)=>{
//             console.log("ERR:", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is running on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR:" , error)
//         throw error
        
//     }
// })()