import mongoose from "mongoose";

import env from "dotenv";


env.config();
export const connect = ()=>{
    const mongoDB = process.env.MONGO_URL;
    mongoose.connect(mongoDB,(err)=>{
        if(err){
            console.log("ERROR : UNABLE TO CONNECT");
        }
        else{
            console.log("DB CONNECTED");
        }
    })
}