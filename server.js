import express  from  "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config()

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL;

const app = express();
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Hello World")
})


import itemRouter from "./src/routes/item.routes.js"
app.use('/api/item', itemRouter);

import authRoutes from "./src/routes/auth.routes.js"
app.use('/api/auth', authRoutes);


// Initiating Database and Server
const connect = async ()=>{
    try{
      await  mongoose.connect(MONGOURL);
      console.log("Mongodb Connected")
        app.listen(PORT , ()=>{
            console.log("Server Connected")
        })
    }catch (e) {
        console.log("Unable To Connect")
    }
}


connect();


